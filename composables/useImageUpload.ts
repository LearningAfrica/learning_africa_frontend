type UploadNumberOption = "multi" | "single";

type Images = "create-course-image" | "create-organization-image"|
'create-course-content-image' | 'create-course-content-file' | 'create-course-content-video';

export const useUseImageUpload = (
	files_key: Images,
	upload_type: UploadNumberOption = "single"
) => {
	interface FilePreview {
		file: File;
		preview: string;
	}

	type UploadedFiles = Record<Images, File[]>;
	type UploadedPreviews = Record<Images, FilePreview[]>;

	const uploaded_files = useState<UploadedFiles>(
		"file-upload-data",
		() => ({[files_key]: []}) as any
	);
	const uploaded_previews = useState<UploadedPreviews>(
		"file-upload-preview",
		() => ({[files_key]: []}) as any
	);

	const handleFileUpload = (event: Event) => {
		const up_files = (event.target as any)["files"] as File[];
		const files_in_form = Array.from(up_files || []);
		if (files_in_form.length > 0) {
			if (upload_type === "single") {
				uploaded_files.value[files_key] = [files_in_form[0]];
			} else {
				uploaded_files.value[files_key] = files_in_form;
			}
			const previews = uploaded_files.value[files_key].map((file) => {
				const file_reader = new FileReader();
				return new Promise<FilePreview>((resolve) => {
					file_reader.onloadend = () => {
						resolve({file, preview: file_reader.result as string});
					};
					file_reader.readAsDataURL(file);
				});
			});
			Promise.all(previews).then((prevs) => {
				uploaded_previews.value[files_key] = prevs;
			});
		}
	};

	const clearFiles = () => {
		uploaded_files.value[files_key] = [];
		uploaded_previews.value[files_key] = [];
	};

	const has_previews = computed(
		() =>
			Array.isArray(uploaded_previews.value[files_key]) &&
			uploaded_previews.value[files_key].length > 0
	);
	const has_files = computed(
		() =>
			Array.isArray(uploaded_files.value[files_key]) &&
			uploaded_files.value[files_key].length > 0
	);
	return {
		has_files,
		has_previews,
		uploaded_files,
		uploaded_previews,
		handleFileUpload,
		clearFiles
	};
};

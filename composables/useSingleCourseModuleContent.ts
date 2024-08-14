import { AxiosError } from "axios";
// import type { SingleCourseResponse } from "~/types/courses";
// import type {PaginationData} from "~/types/response";
type Module = {
	"id": number,
	"title": string,
	"content_type": "text",
	"text": string,
	"file": null,
	"video_url": string | null,
	"image": string | null
};
type Data = Module; // Pick<PaginationData, "courses">["courses"]["data"][number];

export const useSingleCourseModuleContent = () => {
	const { $privateAxios } = useNuxtApp();
	const singleCourseModuleContentData = useState(
		"single-course-module-content-data",
		() => ({}) as Data
	);
	const fetch_error = useState<AxiosError | Error | null>(
		"single-course-module-content-fetch-error",
		() => null
	);
	const has_error = useState<boolean>(
		"single-course-module-content-loading",
		() => false
	);
	const is_loading = useState<boolean>(
		"single-course-module-content-loading",
		() => false
	);
	const cache = useState<{ [key: string]: Data }>(
		"course-module-content-cache",
		() => ({})
	);
	type Params = {
		course_id: number;
		module_id: number;
		content_id: number;
	};

	const fetchData = async (
		{ course_id, module_id, content_id }: Params,
		bypass_cache: boolean = false
	) => {
		const cacheKey = `data:course_id=${course_id}&module_id=${module_id}&content_id=${content_id}`;
		// console.log({ options, page, limit });

		is_loading.value = true;
		try {
			if (!bypass_cache) {
				// Check if the data is already in the cache
				if (cache.value[cacheKey]) {
					console.log("Returning cached data for", cacheKey);
					singleCourseModuleContentData.value = cache.value[cacheKey];

					return cache.value[cacheKey];
				}
			}

			// Fetch data from the API
			const response = await $privateAxios.get(
				`/api/courses/${course_id}/modules/${module_id}/contents/${content_id}/`
			);

			const data = response.data as Data;

			// Store the fetched data in the cache
			cache.value[cacheKey] = data;

			// Set the categories state with the fetched data
			singleCourseModuleContentData.value = data;

			return data;
		} catch (err: any) {
			if (err instanceof AxiosError) {
				fetch_error.value = err;
			} else {
				fetch_error.value = err;
			}
			has_error.value = true;
		} finally {
			is_loading.value = false;
		}
	};

	const refreshData = async (params: Params) => {
		await fetchData(params, true);
	};

	return {
		data: singleCourseModuleContentData,
		is_loading: is_loading,
		has_error: has_error,
		fetch_error: fetch_error,
		fetchData,
		refreshData
	};
};

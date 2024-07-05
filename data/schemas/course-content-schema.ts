import {toTypedSchema} from "@vee-validate/zod";
import * as z from "zod";

const contentSchema = z.enum(["file", "image", "text", "video"]);

export const createCourseContentSchema = toTypedSchema(
	z
		.object({
			title: z.string({message: "Title is required"}),
			text: z.string({message: "Text is required"}).optional(),
			url: z.string({message: "URL is required"}).optional(),
			content_type: contentSchema,
			file: z
				.any()
				.optional(),
				// .refine(
				// 	(data) => {
				// 		if (data['file']&&!(data['file'] instanceof File)) {
				// 			return false;
				// 		}
				// 		return true;
				// 	},
				// 	{message: "File is required"}
				// ),
			image: z
				.any()
				.optional()
				// .refine(
				// 	(data) => {
				// 		if (data['image'] && !(data['image'] instanceof File)) {
				// 			return false;
				// 		}
				// 		return true;
				// 	},
				// 	{message: "Image is required"}
				// )
		})
		// .refine((data) => {
		// 	// content type = file
		// 	if (data.content_type === "file") {
		// 		// file field
		// 		if (!data.file) {
		// 			return false;
		// 		}
		// 	}
		// 	// content type = image
		// 	if (data.content_type === "image") {
		// 		// image field
		// 		if (!data.image) {
		// 			return false;
		// 		}
		// 	}
		// 	// content type = video
		// 	if (data.content_type === "video") {
		// 		// url field is required
		// 		if (!data.url) {
		// 			return false;
		// 		}
		// 	}
		// 	// content type = text
		// 	if (data.content_type === "text") {
		// 		// text field is required
		// 		if (!data.text) {
		// 			return false;
		// 		}

		// 	}
		// })
);

export type CreateCourseContentType = typeof createCourseContentSchema;

import {toTypedSchema} from "@vee-validate/zod";
import * as z from "zod";

export const createCourseContentSchema = toTypedSchema(
	z.object({
		module: z.number({message: "Module is required"}),
		title: z.string({message: "Title is required"}),
		text: z.string({message: "Text is required"}),
		url: z.string({message: "URL is required"}),
		content_type: z.string({message: "Content type is required"})
	})
);

export type CreateCourseContentType = typeof createCourseContentSchema;

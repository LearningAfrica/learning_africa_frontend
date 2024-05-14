import {toTypedSchema} from "@vee-validate/zod";
import * as z from "zod";

export const courseCategorySchema = z.object({
	id: z.number(),
	organization: z.string(),
	creator: z.number(),
	title: z.string(),
	slug: z.string(),
	created: z.date(),
	updated: z.date()
});

export const createCourseCategorySchema = toTypedSchema(
	z.object({
		title: z
			.string({message: "Title is required"})
			.min(3, "Title must be at least 3 characters"),
		organization: z.string({message: "Please select an organization"})
	})
);
export type CourseCategoryType = z.infer<typeof courseCategorySchema>;
export type CreateCourseCategoryType = typeof createCourseCategorySchema;

import {toTypedSchema} from "@vee-validate/zod";
import * as z from "zod";

export const createCourseSchema = toTypedSchema(
	z.object({
		organization: z.string({message: "Organization is required"}),
		category: z.number(),
		title: z.string(),
		overview: z.string(),
		tags:z.string().default(''),
		is_premium: z.boolean().default(false),
		price: z.number().default(0),
		is_private: z.boolean().default(false),
		course_image: z.any().optional()
	})
);

export type CreateCourseType = typeof createCourseSchema;

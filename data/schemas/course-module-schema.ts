import {toTypedSchema} from "@vee-validate/zod";
import * as z from "zod";

export const createCourseModuleSchema = toTypedSchema(
	z.object({
		title: z.string({
			message: "Title is required"
		}),
		description: z.string({
			message: "Description is required"
		
		})
	})
);

export type CreateCourseModuleType = typeof createCourseModuleSchema;

import * as z from "zod";

export const createCourseSchema = z.object({
	organization: z.string(),
	category: z.number(),
	title: z.string(),
	overview: z.string(),
	is_premium: z.boolean(),
	price: z.number(),
	is_private: z.boolean()
});

export type CreateCourseType = z.infer<typeof createCourseSchema>;

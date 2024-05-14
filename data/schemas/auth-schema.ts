import {toTypedSchema} from "@vee-validate/zod";
import * as z from "zod";
export const loginFormSchema = toTypedSchema(
	z.object({
		username_or_email: z.string().min(3).max(30),
		password: z.string().max(20).min(6),
		show_password: z.boolean().optional().default(false)
	})
);

export type LoginUserFormType = typeof loginFormSchema;

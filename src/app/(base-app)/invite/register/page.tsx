"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster, toast } from "react-hot-toast";

import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { AuthApiService } from "../../auth/_services/auth";
import useParamHook from "@/hooks/use-param-hook";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";

const authApi = new AuthApiService();
const RegisterSchema = z
  .object({
    email: z.string().email("Please enter a valid email"),
    first_name: z.string({ required_error: "First name is required" }),
    username: z.string({ required_error: "Username is required" }),
    is_admin: z.boolean().default(false),
    is_instructor: z.boolean().default(false),
    is_student: z.boolean().default(false),
    is_super_admin: z.boolean().default(false),
    last_name: z.string({ required_error: "Last name is required" }),
    password: z
      .string({})
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(20, {
        message: "Password must be at most 50 characters long",
      }),
    confirm_password: z.string(),
    token: z.string().optional(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export type RegisterFormType = z.infer<typeof RegisterSchema>;

export default function Register() {
  const router = useRouter();

  const {
    searchParam: { token },
  } = useParamHook({ location });
  const form = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      is_student: false,
      confirm_password: "",
      password: "",
      email: "",
      first_name: "",
      is_admin: true,
      is_instructor: false,
      is_super_admin: false,
      last_name: "",
      username: "",
      token: token ?? "",
    },
  });
  // const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: authApi.register,
    onSuccess: () => {
      toast.success("Registration successful", {
        className: "bg-green-500 text-white font-bold p-4 rounded-md",
        icon: "👏",
        position: "top-right",
        duration: 5000,
      });
    },
    onError: (_error) => {
      toast.error("Registration failed", {
        className: "bg-red-500 text-white font-bold p-4 rounded-md",
        icon: "👏",
        position: "top-right",
        duration: 5000,
      });
    },
  });
  const onSubmit: SubmitHandler<RegisterFormType> = async (values) => {
    // toast.success('Registration successful', {
    // 	className: 'bg-green-500 text-white font-bold p-4 rounded-md',
    // 	icon: '👏',
    // 	position: 'top-right',
    // 	duration: 5000
    // });
    mutation.mutate(values);
    // const res = await api.register(values);
  };
  return (
    <div className="bg-light p-4">
      <Toaster />
      <div className="max-w-7xl mx-auto py-4 flex flex-col items-center justify-center min-h-[70vh]">
        <div>
          {/* Create account title */}
          <h1 className="text-4xl font-bold">Register</h1>
          {/* <pre
						className={cn(
							'bg-primary-100 p-4 rounded-md my-4 max-w-xl overflow-x-auto'
						)}
					>
						<code>
							{token}
						</code>
					</pre> */}
        </div>
        <Form {...form}>
          <form
            action=""
            className={cn("flex flex-col gap-4 w-full max-w-2xl mx-auto p-4")}
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4")}>
              {/* First name */}
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem className={cn("w-full")}>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First name"
                        className={cn("w-full")}
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
										This is your public display name.
									</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Last name */}
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name" {...field} />
                    </FormControl>
                    {/* <FormDescription>
										This is your public display name.
									</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Last name */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    {/* <FormDescription>
										This is your public display name.
									</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@email.com" {...field} />
                    </FormControl>
                    {/* <FormDescription>
										This is your public display name.
									</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="********" type="password" {...field} />
                  </FormControl>
                  {/* <FormDescription>
										This is your public display name.
									</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="********" type="password" {...field} />
                  </FormControl>
                  {/* <FormDescription>
										This is your public display name.
									</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className={cn(
                "bg-primary-pk text-white font-bold py-4 px-8 rounded-md",
                {
                  "opacity-50": mutation.isPending,
                  "cursor-not-allowed": mutation.isPending,
                }
              )}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Loading..." : "Register"}
            </Button>
            {/* Login link */}
            <div className="flex-1">
              <p>
                Already have an account?{" "}
                <Link href="/auth/login" className="text-blue-500">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

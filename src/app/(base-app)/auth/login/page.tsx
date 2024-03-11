/* eslint-disable react/no-unescaped-entities */
"use client";
import { useAtom } from "jotai";
import toast, { Toaster } from "react-hot-toast";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { authStoreAtom } from "@/store/auth-atom";
import { Button } from "@/components/ui/button";
import { AxiosError } from "axios";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthApiService } from "../_services/auth";
const loginUserSchema = z.object({
  username_or_email: z.string(),
  password: z
    .string({})
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(20, {
      message: "Password must be at most 50 characters long",
    }),
});

export type LoginUserType = z.infer<typeof loginUserSchema>;

function LoginPage() {
  const form = useForm<LoginUserType>({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      password: "",
      username_or_email: "",
    },
  });
  const authApi = new AuthApiService();
  const [, setAuth] = useAtom(authStoreAtom);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      toast.success("Login successful", {
        className: "bg-green-500 text-white font-bold p-4 rounded-md",
        icon: "👏👏",
        position: "top-right",
        duration: 5000,
      });

      setAuth({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        user: {
          username: data.username,
          user_role: data.user_role,
        },
      });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.detail, {
          className: "bg-red-500 text-white font-bold p-4 rounded-md",
          icon: "👏",
          position: "top-right",
          duration: 5000,
        });
      }
    },
  });
  const [isPending, setIsPending] = React.useState(false);
  const onSubmit: SubmitHandler<LoginUserType> = async (values) => {
    mutation.mutate(values);
    const res = await authApi.login(values);
  };
  return (
    <div className="bg-light p-4">
      <Toaster />
      <div className="max-w-7xl mx-auto py-4 flex flex-col items-center justify-center min-h-[70vh]">
        <div>
          {/* Create account title */}
          <h1 className="text-4xl font-bold">Login</h1>
        </div>
        <Form {...form}>
          <form
            action=""
            className={cn("flex flex-col gap-4 w-full max-w-2xl mx-auto p-4")}
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* Email/Username */}
            <FormField
              control={form.control}
              name="username_or_email"
              render={({ field }) => (
                <FormItem className={cn("w-full")}>
                  <FormLabel>Email/Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter username or email"
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

            <Button
              type="submit"
              className={cn(
                "bg-primary text-white font-bold py-4 px-8 rounded-md",
                {
                  "opacity-50": mutation.isPending,
                  "cursor-not-allowed": mutation.isPending,
                }
              )}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Loading..." : "login"}
            </Button>
            {/* Login link */}
            <div className="flex-1">
              <p>
                Don't have an account?{" "}
                <Link href="/auth/register" className="text-blue-500">
                  Create account
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;

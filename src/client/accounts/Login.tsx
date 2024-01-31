import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Toaster, toast } from 'react-hot-toast';

import {
	Form,
	FormControl,
	// FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AuthApiService } from '@/lib/services/api-services/auth.service';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { cn } from '@/lib/utils';
import { AxiosError } from 'axios';

const authApi = new AuthApiService();
const loginSchema = z.object({
	username_or_email: z.string(),
	password: z
		.string({})
		.min(8, { message: 'Password must be at least 8 characters long' })
		.max(20, {
			message: 'Password must be at most 50 characters long'
		})
});

export type LoginFormType = z.infer<typeof loginSchema>;

export default function Login() {
	const form = useForm<LoginFormType>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			password: '',
			username_or_email: ''
		}
	});
	// const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: authApi.login,
		onSuccess: () => {
			toast.success('Registration successful', {
				className: 'bg-green-500 text-white font-bold p-4 rounded-md',
				icon: '👏',
				position: 'top-right',
				duration: 5000
			});
		},
		onError: (error) => {
			console.log(error);
			if (error instanceof AxiosError) {
				toast.error(error.response?.data.detail, {
					className: 'bg-red-500 text-white font-bold p-4 rounded-md',
					icon: '👏',
					position: 'top-right',
					duration: 5000
				});
			}
		}
	});
	const onSubmit: SubmitHandler<LoginFormType> = async (values) => {
		// console.log(values);
		// toast.success('Registration successful', {
		// 	className: 'bg-green-500 text-white font-bold p-4 rounded-md',
		// 	icon: '👏',
		// 	position: 'top-right',
		// 	duration: 5000
		// });
		mutation.mutate(values);
		// const res = await api.register(values);
		// console.log(res);
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
						className={cn(
							'flex flex-col gap-4 w-full max-w-2xl mx-auto p-4'
						)}
						onSubmit={form.handleSubmit(onSubmit)}
					>
						{/* First name */}
						<FormField
							control={form.control}
							name="username_or_email"
							render={({ field }) => (
								<FormItem className={cn('w-full')}>
									<FormLabel>First name</FormLabel>
									<FormControl>
										<Input
											placeholder="enter username or email"
											className={cn('w-full')}
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
										<Input
											placeholder="********"
											type="password"
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

						<Button
							type="submit"
							className={cn(
								'bg-primary text-white font-bold py-4 px-8 rounded-md',
								{
									'opacity-50': mutation.isPending,
									'cursor-not-allowed': mutation.isPending
								}
							)}
							disabled={mutation.isPending}
						>
							{mutation.isPending ? 'Loading...' : 'login'}
						</Button>
						{/* Login link */}
						<div className="flex-1">
							<p>
								Don't have an account?{' '}
								<NavLink to="/sign-up" className="text-blue-500">
									Create account
								</NavLink>
							</p>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
}

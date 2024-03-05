import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Toaster, toast } from 'react-hot-toast';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import {
	Form,
	FormControl,
	FormDescription,
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
import { useAtom } from 'jotai';
import { authStoreAtom } from '@/store/authAtom';
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem
} from '@radix-ui/react-select';
import { Link } from 'react-router-dom';

const authApi = new AuthApiService();
const instructorCreateCourseSchema = z.object({
	title: z.string(),
	description: z.string(),
	category_id: z.number(),
	overview: z.string(),
	private: z.boolean().default(false),
	organization_id: z.number()
});

export type InstructorCreateCourseFormType = z.infer<
	typeof instructorCreateCourseSchema
>;

const organizations = [
	{
		id: 1,
		name: 'Organization 1'
	},
	{
		id: 2,
		name: 'Organization 2'
	},
	{
		id: 3,
		name: 'Organization 3'
	}
];

export default function InstructorCreateCourse() {
	const form = useForm<InstructorCreateCourseFormType>({
		resolver: zodResolver(instructorCreateCourseSchema),
		defaultValues: {
			title: '',
			description: '',
			category_id: 0,
			overview: '',
			private: false,
			organization_id: 0
		}
	});

	const [, setAuth] = useAtom(authStoreAtom);
	// const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: authApi.login,
		onSuccess: (data) => {
			toast.success('Login successful', {
				className: 'bg-green-500 text-white font-bold p-4 rounded-md',
				icon: '👏👏',
				position: 'top-right',
				duration: 5000
			});

			setAuth({
				access_token: data.access_token,
				refresh_token: data.refresh_token,
				user: {
					username: data.username,
					user_role: data.user_role
				}
			});
		},
		onError: (error) => {
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
	const onSubmit: SubmitHandler<InstructorCreateCourseFormType> = async (
		values
	) => {
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
		<div className=" p-4">
			<Toaster />
			<div className="max-w-7xl bg-white mx-auto py-4 flex flex-col items-center justify-center">
				<div>
					{/* Create account title */}
					<h1 className="text-4xl font-bold">Create Course</h1>
				</div>
				<Form {...form}>
					<form
						action=""
						className={cn(
							'flex flex-col gap-4 w-full max-w-2xl mx-auto p-4'
						)}
						onSubmit={form.handleSubmit(onSubmit)}
					>
						{/* Title */}
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem className={cn('w-full')}>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input
											placeholder="enter title"
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
						{/* Description */}
						<div className="grid w-full gap-1.5">
							<Label htmlFor="message">Description</Label>
							<Textarea
								placeholder="enter description."
								id="message"
							/>
						</div>

						{/* Overview */}
						<div className="grid w-full gap-1.5">
							<Label htmlFor="message">overview</Label>
							<Textarea
								placeholder="enter overview."
								id="message"
							/>
						</div>
						<FormField
							control={form.control}
							name="organization_id"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="block">
										Organization
									</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue
													className="w-full p-2 border rounded-md"
													placeholder="Select a verified email to display"
												/>
											</SelectTrigger>
										</FormControl>
										<SelectContent className="bg-white border p-2 flex flex-col gap-1 rounded-md shadow-md w-full max-h-60 overflow-y-auto">
											{organizations.map((org) => (
												<SelectItem value={org.id}>
													{org.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormDescription>
										You can manage email addresses in your{' '}
										<Link to="/examples/forms">
											email settings
										</Link>
										.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button
							type="submit"
							className={cn(
								'bg-primary-pk text-white font-bold py-4 px-8 rounded-md',
								{
									'opacity-50': mutation.isPending,
									'cursor-not-allowed': mutation.isPending
								}
							)}
							disabled={mutation.isPending}
						>
							{mutation.isPending ? 'Loading...' : 'Save Course'}
						</Button>
						{/* Login link */}
					</form>
				</Form>
			</div>
		</div>
	);
}

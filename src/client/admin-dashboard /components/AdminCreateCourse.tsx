import { useState } from 'react';

const course_categories = [
	{
		id: 1,
		title: 'Software Engineering',
		description: 'Software Engineering',
		category_id: 1,
		creator: {
			name: 'John Doe'
		}
	},
	{
		id: 2,
		title: 'Mathematics',
		description: 'Mathematics',
		category_id: 1,
		creator: {
			name: 'Sam Smith'
		}
	},
	{
		id: 3,
		title: 'Science',
		description: 'Science',
		category_id: 1,
		creator: {
			name: 'mary Doe'
		}
	},
	{
		id: 4,
		title: 'Geography',
		description: 'Geography',
		category_id: 1,
		creator: {
			name: 'mary Doe'
		}
	},
	{
		id: 5,
		title: 'Psychology',
		description: 'Psychology',
		category_id: 1,
		creator: {
			name: 'mary Doe'
		}
	},
	{
		id: 6,
		title: 'Geography',
		description: 'Geography',
		category_id: 1,
		creator: {
			name: 'mary Doe'
		}
	},
	{
		id: 7,
		title: 'Philosophy',
		description: 'Philosophy',
		category_id: 1,
		creator: {
			name: 'mary Doe'
		}
	},
	{
		id: 8,
		title: 'Astrology',
		description: 'Astrology',
		category_id: 1,
		creator: {
			name: 'mary Doe'
		}
	}
];

type CourseType = {
	id: number;
	title: string;
	description: string;
	category_id: number;
	overview: string;
	private: boolean;
	organization_id: number;
	creator: {
		name: string;
		email: string;
	};
	created_at: string;
	updated_at: string;
};
export default function AdminCreateCourse() {
	const [formData, setFormData] = useState<CourseType>({} as CourseType);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		console.log(e.target.name, e.target.value);
		const target = e.target;
		if (target.name === 'private'&&target.type==='checkbox') {
			setFormData(
				(prev) =>
					({
						...prev!,
						[e.target.name]: (target).checked
					} as CourseType)
			);
			return;
		}
		setFormData(
			(prev) =>
				({
					...prev!,
					[e.target.name]: e.target.value
				} as CourseType)
		);
	};
  return  (
	<div className="p-4 flex flex-col gap-4">
		<div className="flex items-center flex-col gap-4 justify-between">
			<div>
				<h2 className="text-2xl font-bold">Create course</h2>
			</div>
			<form
				action=""
				className="w-full max-w-4xl p-10 shadow-sm border gap-4"
			>
				<div className="flex flex-col gap-4">
					{/* Category */}
					<div className="flex flex-col gap-2">
						<label htmlFor="">Course category</label>

						<select
							name=""
							id=""
							className="border p-2 rounded"
						>
							<option value="">Select course category</option>
							{course_categories.map((category) => (
								<option
									value={category.id}
									key={category.id}
								>
									{category.title}
								</option>
							))}
						</select>
					</div>
					{/* Course title */}
					<div className="flex flex-col gap-2">
						<label htmlFor="">Course Title</label>
						<input
							type="text"
							className="border p-2 rounded"
							placeholder='e.g. "Learning Africa"'
							value={formData?.title}
							onChange={handleInputChange}
						/>
					</div>
					{/* Course overview */}
					<div className="flex flex-col gap-2">
						<label htmlFor="">Course overview</label>
						<textarea
							name="course_overview"
							className="border p-2 rounded"
							value={formData?.description}
							placeholder='e.g. "John Doe"'
							onChange={handleInputChange}
						></textarea>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="private"  className='flex gap-2 items-center'>
							<input
								type="checkbox"
								name="private"
								className="border p-2 rounded"
								value={formData?.description}
								placeholder='e.g. "John Doe"'
								onChange={handleInputChange}
							/>
							<span>Is private?</span>
						</label>
					</div>
				</div>
				{ 
				// Organization reference dropdown
					formData?.private && (
						<div className="flex flex-col gap-2">
							<label htmlFor="">Organization</label>
							<select
								name=""
								id=""
								className="border p-2 rounded"
							>
								<option value="">Select organization</option>
								<option value="">Learning Africa</option>
								<option value="">Learning Africa</option>
								<option value="">Learning Africa</option>
							</select>
						</div>
					)


				}
				<div className="flex justify-start gap-2 my-4">
					{/* <button
						className="bg-blue-500 text-white px-2 py-1 rounded-full"
						onClick={() => {}}
					>
						Create Organization
					</button> */}
					<button className="p-2 bg-orange-500 text-white rounded-md w-full">
						Save
					</button>
				</div>
			</form>
		</div>
	</div>
);
}

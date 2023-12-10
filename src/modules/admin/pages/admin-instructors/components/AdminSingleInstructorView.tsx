import { instructorsData } from '@/components/data/instructors-data';
import {
	faFacebook,
	faGoogle,
	faLinkedin,
	faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
	faLocation,
	faMessage,
	faPhone,
	faPlay,
	faStar,
	faTrophy,
	faUserGroup
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function AdminSingleInstructorView() {
	const { id } = useParams();
	const [instructor, setInstructor] = React.useState<
		(typeof instructorsData)[0] | null
	>(null);

	React.useEffect(() => {
		const instructor = instructorsData.find(
			(item) => item!.id === Number(id)
		);
		setInstructor(instructor!);
	}, [id]);
	return (
		<div className="max-w-7xl mx-auto flex flex-col gap-4">
			<div className="grid grid-cols-1 lg:grid-cols-[20rem_1fr] gap-4 p-2">
				<div className="flex flex-col gap-2">
					<div className="shadow p-2 pb-4">
						<div>
							<img
								src={instructor?.profile_image}
								alt=""
								className="w-full h-64 rounded"
							/>
						</div>
						<div className="text-center flex flex-col gap-2 mt-2">
							<div>
								{[10, 210, 311].map((item) => (
									<FontAwesomeIcon
										icon={faStar}
										key={item}
										className="text-orange-500 text-sm"
									/>
								))}
							</div>
							<div className="flex gap-2 justify-center items-center text-blue-500">
								<FontAwesomeIcon
									icon={faFacebook}
									className="text-lg h-6 w-6"
								/>
								<FontAwesomeIcon
									icon={faTwitter}
									className="text-lg h-6 w-6"
								/>
								<FontAwesomeIcon
									icon={faGoogle}
									className="text-lg h-6 w-6"
								/>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="text-lg h-6 w-6"
								/>
							</div>
						</div>
					</div>
					<div className="shadow p-4 flex flex-col gap-4 border ">
						<div>
							<h1 className="text-lg font-bold underline">
								Experience
							</h1>
						</div>
						<div className="flex flex-col gap-2">
							{[10, 20, 3].map((item) => (
								<div
									key={item + 'experience'}
									className="flex items-center gap-4"
								>
									<div className="border p-4 rounded-full">
										<FontAwesomeIcon icon={faTrophy} />
									</div>
									<div>
										<h1 className="text-sm font-bold">
											2020 - 2021
										</h1>
										<p className="text-sm">
											Best instructor of the year
										</p>
									</div>
								</div>
							))}
						</div>
						<hr />
						<div className="p-2 flex flex-col gap-4">
							<div>
								<h1 className="text-lg font-bold underline">
									Skills
								</h1>
							</div>
							<div className="flex flex-wrap gap-2">
								{instructor?.skills.split(',').map((item) => (
									<div
										key={item}
										className="border px-2 rounded-full bg-slate-300"
									>
										{item}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-10 py-10">
					{/* Header */}
					<div className="flex flex-col gap-2">
						<h2>Hello, I'm</h2>
						<h1 className="text-4xl font-bold">
							{instructor?.first_name +
								' ' +
								instructor?.last_name}
						</h1>
						<p>
							<span className="font-medium">
								{instructor?.skills}
							</span>
						</p>
					</div>
					<div>
						<p className="text-sm whitespace-pre">
							{instructor?.about}
						</p>
					</div>
					{/* Address */}
					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-1 px-1">
							<FontAwesomeIcon
								icon={faLocation}
								className="text-orange-500"
							/>
							<span>Address: Nairobi Kenya, 1234</span>
						</div>
						<div className="flex items-center gap-2 px-1">
							<FontAwesomeIcon
								icon={faMessage}
								className="text-orange-500"
							/>
							<span>Email: instructor@learningafrica.com</span>
						</div>
						<div className="flex items-center gap-2 px-1">
							<FontAwesomeIcon
								icon={faPhone}
								className="text-orange-500"
							/>
							<span>Phone: +25412345678</span>
						</div>
					</div>
					{/* Stats */}
					<div className="grid grid-cols-4">
						<div className="flex items-center gap-4">
							<div className="h-12 w-12 border flex items-center justify-center bg-green-100 text-green-900">
								<FontAwesomeIcon icon={faPlay} />
							</div>
							<div>
								<h1 className="text-2xl font-bold">20+</h1>
								<p className="text-sm">Total Courses</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="h-12 w-12 border flex items-center justify-center bg-purple-100 text-purple-900">
								<FontAwesomeIcon icon={faUserGroup} />
							</div>
							<div>
								<h1 className="text-2xl font-bold">30K+</h1>
								<p className="text-sm">Total students</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="h-12 w-12 border flex items-center justify-center bg-orange-100 text-orange-900">
								<FontAwesomeIcon icon={faTrophy} />
							</div>
							<div>
								<h1 className="text-2xl font-bold">5+</h1>
								<p className="text-sm">Years of experience</p>
							</div>
						</div>
					</div>
					{/* Course list */}
					<div>
						<h1 className="text-2xl font-bold">Courses</h1>

						<div>
							{(instructor?.courses || [])!.map((item, index) => (
								<div
									key={item.id + index}
									className="flex items-center gap-4 p-2 border-b"
								>
									<div className="w-48 h-48 rounded bg-gray-100">
										{item.thumbnail && (
											<img
												src={item.thumbnail}
												alt=""
												className="w-full h-full object-cover rounded"
											/>
										)}
									</div>
									<div className="flex flex-col gap-2">
										<h1 className="text-lg font-bold">
											{item.name}
										</h1>
										<p className="text-sm space-x-2">
											<span className="font-semibold">
												By:
											</span>
											<span>
												{instructor?.first_name +
													' ' +
													instructor?.last_name}
											</span>
										</p>
										<p className="text-sm space-x-2">
											<span className="font-semibold">
												Students:
											</span>
											<span>{item.enrolled}</span>
										</p>
										<p className="text-sm space-x-2">
											<span className="font-semibold">
												Rating:
											</span>
											<span>{item.ratings}</span>
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			{/* Related instructors */}
			<div className="p-2 flex flex-col gap-4 ">
				{/* Header */}
				<div>
					<h1 className="font-bold text-2xl">Related instructors.</h1>
				</div>
				{/* List */}
				<div className="grid grid-cols-1 lg:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-4">
					{instructorsData.slice(1, 5).map((item) => (
						<div
							key={item.id}
							className="flex items-center flex-col gap-4"
						>
							<div className="w-full flex items-center justify-center">
								<img
									src={item.profile_image}
									alt=""
									className="w-full h-64  rounded"
								/>
							</div>
							<div className="flex flex-col gap-2 text-center">
								<h1 className="text-sm font-medium ">
									{item.first_name + ' ' + item.last_name}
								</h1>
								<p className="text-sm">
									<span className="font-semibold"></span>
									<span>{item.qualification}</span>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

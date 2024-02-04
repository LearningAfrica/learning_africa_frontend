import { AnimatePresence, motion } from 'framer-motion';
import { CircularLinkedList } from '@/lib/utils/circular-linked-list-converter';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye } from '@fortawesome/free-solid-svg-icons';
type Course = {
	id: string;
	name: string;
	category: string;
	tags: string[];
	thumbnail: string;
	discount: number;
	price: number;
	rating: number;
	duration: number;
	is_free?: boolean;
};

const courses = [
	{
		id: '1',
		name: 'Web Development Fundamentals',
		category: 'Web Development',
		tags: ['HTML', 'CSS', 'JavaScript'],
		thumbnail:
			'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww',
		discount: 20,
		price: 49.99,
		rating: 4.5,
		is_free: true,
		duration: 30 // in days
	},
	{
		id: '2',
		name: 'Python Programming Basics',
		category: 'Programming',
		tags: ['Python', 'Coding', 'Programming'],
		thumbnail:
			'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHl0aG9uJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D',
		discount: 10,
		price: 59.99,
		rating: 4.2,
		is_free: false,
		duration: 45 // in days
	},
	{
		id: '3',
		name: 'Machine Learning for Beginners',
		category: 'Machine Learning',
		tags: ['Machine Learning', 'Data Science', 'Python'],
		thumbnail:
			'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
		discount: 15,
		price: 79.99,
		rating: 4.7,
		is_free: false,
		duration: 60 // in days
	},
	{
		id: '4',
		name: 'Digital Marketing Mastery',
		category: 'Digital Marketing',
		tags: ['Marketing', 'Social Media', 'SEO'],
		thumbnail:
			'https://plus.unsplash.com/premium_photo-1663134377392-50c34664d632?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D',
		discount: 25,
		price: 69.99,
		rating: 4.6,
		is_free: false,
		duration: 45 // in days
	},
	{
		id: '5',
		name: 'Graphic Design Fundamentals',
		category: 'Graphic Design',
		tags: ['Design', 'Photoshop', 'Illustrator'],
		thumbnail:
			'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D',
		discount: 30,
		price: 54.99,
		rating: 4.4,
		is_free: false,
		duration: 30 // in days
	},
	{
		id: '6',
		name: 'Mobile App Development with React Native',
		category: 'Mobile App Development',
		tags: ['React Native', 'App Development', 'JavaScript'],
		thumbnail:
			'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1ldHxlbnwwfHwwfHx8MA%3D%3D',
		discount: 20,
		price: 89.99,
		is_free: false,
		rating: 4.8,
		duration: 60 // in days
	},
	{
		id: '7',
		name: 'Data Analysis with Python',
		category: 'Data Science',
		tags: ['Data Analysis', 'Python', 'Pandas'],
		thumbnail:
			'https://images.unsplash.com/photo-1599658880436-c61792e70672?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww',
		discount: 10,
		price: 74.99,
		rating: 4.3,
		is_free: false,
		duration: 45 // in days
	},
	{
		id: '8',
		name: 'Financial Planning and Investment Strategies',
		category: 'Finance',
		tags: ['Finance', 'Investment', 'Budgeting'],
		thumbnail:
			'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D',
		discount: 15,
		price: 99.99,
		rating: 4.9,
		is_free: false,
		duration: 60 // in days
	},
	{
		id: '9',
		name: 'Photography Masterclass',
		category: 'Photography',
		tags: ['Photography', 'Camera', 'Composition'],
		thumbnail:
			'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D',
		discount: 20,
		price: 49.99,
		rating: 4.7,
		is_free: false,
		duration: 30 // in days
	},
	{
		id: '10',
		name: 'Business Strategy and Management',
		category: 'Business',
		tags: ['Business', 'Strategy', 'Management'],
		thumbnail:
			'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww',
		discount: 25,
		price: 79.99,
		rating: 4.5,
		is_free: false,
		duration: 45 // in days
	}
] as Course[];
const llist = new CircularLinkedList<Course>();
courses.forEach((course) => llist.append(course));
export default function HomeCourses() {
	const [seconds, setSeconds] = React.useState(0);
	const [currentCourse, setCurrentCourse] = React.useState(llist.head);

	React.useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((prevSeconds) => prevSeconds + 1);
			setCurrentCourse((prev) => prev.next); // Move to the next course
		}, 3000); // Change the course every 3 seconds

		return () => clearInterval(interval);
	}, []);
	return (
		<div className="w-full bg-primary-pk bg-opacity-10 p-10">
			<div className="w-full bg-opacity-10 p-10">
				<div className="max-w-7xl mx-auto flex flex-col gap-4">
					<h1
						className="text-4xl font-bold text-primary-pk"
						id="courses"
					>
						Our Courses
					</h1>
					{/* Render the current course */}
					<div className="flex gap-4">
						<div className="flex gap-4 flex-wrap">
							{[
								currentCourse.previous.value,
								currentCourse.value,
								currentCourse.next.value
							].map((course,index) => (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{
										opacity: 1,
										transition: { duration: 0.5 }
									}}
									exit={{ opacity: 0, x: 100, y: 100 }}
									key={course.id+index}
									className="flex-[1_0_18rem] flex flex-col bg-white gap-4 rounded-md shadow-md overflow-hidden"
								>
									<div className="flex justify-center h-72 relative">
										<img
											src={course.thumbnail}
											alt="course"
											className="w-full h-full object-cover rounded-md"
										/>

										{course.is_free && (
											<div className="absolute top-2 left-2 bg-primary-pk text-white px-2 py-1 rounded-md">
												Free
											</div>
										)}
										<div className="absolute bottom-2 left-2 flex gap-2 text-white	rounded  text-xs">
											{course.tags.map((tag, index) => (
												<span
													className="rounded bg-primary-pk p-1"
													key={tag+index}
												>
													{tag}
												</span>
											))}
										</div>
									</div>
									<div className="p-4 bg-white h-full flex flex-col gap-4">
										{/* Review and views */}
										<div className="flex justify-between">
											<div className="flex flex-row-reverse items-center gap-2">
												<span>200</span>
												<FontAwesomeIcon icon={faEye} />
											</div>
											<div>
												<FontAwesomeIcon
													icon={faClock}
												/>
												<span>
													{course.duration} days
												</span>
											</div>
										</div>
										<div className="text-lg font-bold text-primary-pk">
											<h1>{course.name}</h1>
										</div>
										<div>{course.category}</div>
										<div className="flex justify-between">
											{course.is_free ? (
												<div className="text-lg font-medium text-primary-pk">
													<h1>Free</h1>
												</div>
											) : (
												<div className="text-lg font-bold text-primary-pk">
													{course.discount > 0 ? (
														<>
															<span className="text-gray-400 line-through text-sm">
																{course.price}
															</span>
															<span>
																$
																{(
																	course.price -
																	course.discount
																).toFixed(2)}
															</span>
														</>
													) : (
														<span>
															${course.price}
														</span>
													)}
												</div>
											)}
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
					<AnimatePresence mode="wait">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: { duration: 0.5 }
							}}
							exit={{ opacity: 0 }}
							className="App"
							style={{ fontSize: 100 }}
							key={seconds}
						>
							{seconds}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}

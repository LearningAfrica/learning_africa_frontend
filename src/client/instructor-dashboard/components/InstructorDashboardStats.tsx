import {
	faBookReader,
	faChevronLeft,
	faChevronRight,
	faComputer,
	faDashboard,
	faTrophy,
	faUserGraduate
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const stats = [
	{
		title: 'Total Sales',
		value: '40',
		new: '10',
		icon: faTrophy
	},
	{
		title: 'Total Enrollments',
		value: '100',
		new: '10',
		icon: faComputer
	},
	{
		title: 'Total courses',
		value: '100',
		new: '10',
		icon: faBookReader
	},
	{
		title: 'Total purchased courses',
		value: '100',
		new: '10',
		icon: faUserGraduate
	}
];

const newCourses = [
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
	}
];

const student_features = [
	{
		id: '1',
		version: 'v2.3',
		title: 'Enhanced Student Dashboard',
		description:
			'Introducing a new and improved student dashboard with a more intuitive interface, making it easier for students to navigate courses, track progress, and access resources.'
	},
	{
		id: '2',
		version: 'v2.2',
		title: 'Personalized Learning Paths',
		description:
			'Students can now create and customize their own learning paths by selecting courses, modules, and assignments that align with their goals and interests.'
	},
	{
		id: '3',
		version: 'v2.1',
		title: 'Interactive Discussion Forums',
		description: `We've added interactive discussion forums to each course, providing students with a platform to engage in discussions, ask questions, and collaborate with peers.`
	},
	{
		id: '4',
		version: 'v2.0',
		title: 'Mobile Learning App',
		description:
			'Introducing our mobile learning app for students on the go. Access your courses, view content offline, and participate in discussions right from your mobile device.'
	},
	{
		id: '5',
		version: 'v1.9',
		title: 'Real-time Progress Tracking',
		description: `Students can now monitor their progress in real-time, seeing their scores on assignments and quizzes as soon as they're graded, providing immediate feedback for improvement.`
	}
];

const announcents = [
	{
		id: '1',
		title: 'New Course: Introduction to Web Development',
		description:
			'Learn the fundamentals of web development with this introductory course. You will learn how to create a website from scratch using HTML, CSS, and JavaScript.'
	},
	{
		id: '2',
		title: 'New Course: Introduction to Python Programming',
		description:
			'Learn the basics of Python programming with this introductory course. You will learn how to write code in Python, create functions, and use loops and conditionals.'
	},
	{
		id: '3',
		title: 'New Course: Introduction to Machine Learning',
		description:
			'Learn the basics of machine learning with this introductory course. You will learn how to use Python and TensorFlow to build a neural network that can classify images.'
	}
];

export default function InstructorDashboardStats() {
  return (
	<div className="p-4 flex flex-col gap-4">
			<div className="flex gap-4 items-center">
				<FontAwesomeIcon
					icon={faDashboard}
					className="text-4xl text-gray-500"
				/>
				<h2 className="text-4xl font-medium text-gray-500">
					Instructor Dashboard
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{[
					stats.map((stat) => (
						<div className="bg-white p-4 flex gap-4 items-center flex-row-reverse justify-between rounded-md shadow-md">
							<div className="bg-primary p-4 rounded-full">
								<FontAwesomeIcon
									icon={stat.icon}
									className="text-white text-2xl"
									aria-hidden="true"
								/>
							</div>
							<div className="flex flex-col gap-4">
								<div className="text-2xl font-bold">
									{stat.value}
								</div>
								<div className="text-sm text-gray-500">
									{stat.title}
								</div>
							</div>
						</div>
					))
				]}
			</div>
			{/* News */}
			<div className="grid grid-cols-1 md:grid-rows-2 lg:grid-cols-2 gap-4">
				<div className="shadow p-4 bg-white">
					<div className="flex justify-between">
						<h2 className="text-lg font-bold text-gray-500">
							Course Subscriptions
						</h2>
						<div className="flex">
							<button className="">
								<FontAwesomeIcon icon={faChevronLeft} />
							</button>
							<button className="px-2 rounded-md">
								<FontAwesomeIcon icon={faChevronRight} />
							</button>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						{newCourses.map((course) => (
							<div
								key={course.id}
								className="flex gap-4 items-center my-4"
							>
								<div className="w-16 h-16 bg-gray-200 rounded-md">
									<img
										src={course.thumbnail}
										alt="course"
										className="w-full h-full object-cover rounded-md"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<div className="text-lg font-bold">
										{course.name}
									</div>
									<div className="text-gray-500">
										{course.category}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="bg-white p-4 shadow px-2 rounded-md flex flex-col">
					<div className="flex justify-between items-center">
						<h2 className="text-lg font-bold text-gray-500">
							Announcements
						</h2>
						<div className="flex">
							<button className="">
								<FontAwesomeIcon icon={faChevronLeft} />
							</button>
							<button className="px-2 rounded-md">
								<FontAwesomeIcon icon={faChevronRight} />
							</button>
						</div>
					</div>
					<div className="flex flex-col text-xs">
						{announcents.map((announcement) => (
							<div
								key={announcement.id}
								className="flex gap-4 items-center my-4"
							>
								<div className="w-16 h-16 bg-gray-200 rounded-md">
									<img
										src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHl0aG9uJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
										alt="course"
										className="w-full h-full object-cover rounded-md"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<div className="text-lg font-bold">
										{announcement.title}
									</div>
									<div className="text-gray-500">
										{announcement.description}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="bg-white p-4 shadow px-2 rounded-md flex flex-col justify-between col-span-2">
					<div
						className="flex justify-between items-center"
						style={{ marginBottom: '-1rem' }}
					>
						<h2 className="text-lg font-bold text-gray-500">
							System Updates
						</h2>
						<div className="flex">
							<button className="">
								<FontAwesomeIcon icon={faChevronLeft} />
							</button>
							<button className="px-2 rounded-md">
								<FontAwesomeIcon icon={faChevronRight} />
							</button>
						</div>
					</div>
					<div className="flex flex-col text-xs">
						{student_features.map((feature) => (
							<div
								key={feature.id}
								className="flex gap-4 items-center my-4 border p-2 rounded"
							>
								<div className="flex justify-between items-center">
									<div className="text-md font-medium	 text-gray-500">
										{feature.version}
									</div>
									<div className="text-sm text-gray-500">
										{/* New */}
									</div>
								</div>
								<div className="flex flex-col gap-2">
									<div className="text-sm font-medium">
										{feature.title}
									</div>
									<div className="text-gray-500 text-ellipsis">
										{feature.description}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
  )
}

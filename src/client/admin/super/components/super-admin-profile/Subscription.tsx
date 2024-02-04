import { faBell, faBellSlash } from '@fortawesome/free-solid-svg-icons';
import SubscriptionCard from './SubscriptionCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const subsciptionplan = [
	{
		name: 'Sarah doe',
		image: 'https://images.unsplash.com/photo-1705397290310-98a9dd4d6a54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		icon: faBell,
		title: 'Wordpress & Plugin Tutor',
		price: 'Free',
		student: '10.k Students',
		courses: '11 Courses'
	},
	{
		name: 'JOhn doe',
		icon: faBellSlash,
		title: 'Wordpress & Plugin Tutor',
		image: 'https://images.unsplash.com/photo-1705397290310-98a9dd4d6a54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		student: '10.k Students',
		courses: '11 Courses'
	},
	{
		title: 'Wordpress & Plugin Tutor',
		name: 'JOhn doe',
		image: 'https://images.unsplash.com/photo-1705397290310-98a9dd4d6a54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		icon: faBell,
		student: '10.k Students',
		courses: '11 Courses'
	},
	{
		title: 'Wordpress & Plugin Tutor',
		name: 'JOhn doe',
		image: 'https://images.unsplash.com/photo-1705397290310-98a9dd4d6a54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		icon: faBell,
		student: '10.k Students',
		courses: '11 Courses'
	}
];

function Subscription() {
	return (
		<div className="flex flex-col space-y-3">
			<h2>Subscription</h2>
			<div className="grid grid-cols-4 place-items-center mt-6 gap-4">
				{subsciptionplan.map(
					({ icon, title, courses, student, name, image }) => (
						<SubscriptionCard>
							<div className="flex justify-center border-1 border-gray-300 p-2">
								<img
									src={image}
									className="rounded-full h-12 w-12 "
									alt=""
								/>
							</div>
							<p className="text-center text-xl">{name}</p>
							<span className="text-xl text-center">{title}</span>

							<div className="flex flex-row justify-center items-center space-x-3">
								<button className="rounded-full bg-primary-pk px-4 py-2 text-white">
									Subscribed
								</button>
								<FontAwesomeIcon
									icon={icon}
									className="text-[8px] text-gray-200 text-center w-8 h-8 p-1 bg-gray-300 rounded-full"
								/>
							</div>
							<div className="flex flex-row space-x-6">
								<p className="text-[12px] text-center text-gray-500">
									{courses}
								</p>
								<p className="text-[12px] text-center text-gray-500">
									{student}
								</p>
							</div>
						</SubscriptionCard>
					)
				)}
			</div>
		</div>
	);
}

export default Subscription;

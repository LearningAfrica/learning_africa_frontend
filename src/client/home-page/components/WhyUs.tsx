import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
	faChalkboardTeacher,
	faComputer,
	faRocket
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const features = [
	{
		icon: faChalkboardTeacher,
		title: 'World-Class Educators',
		description:
			'At Learning Africa, we pride ourselves on offering top-notch education with a team of highly qualified and experienced instructors. Our educators are passionate about teaching and are dedicated to providing students with the knowledge and skills they need to succeed.'
	},
	{
		icon: faComputer,
		title: 'Interactive Online Platform',
		description:
			'Learning Africa provides a dynamic and interactive online learning environment. Our platform is designed to engage students through live classes, discussions, and collaborative projects. You can access your courses from anywhere, making it convenient for learners of all backgrounds.'
	},
	{
		icon: faRocket,
		title: 'Diverse Course Selection',
		description:
			'We offer a wide range of courses tailored to meet the needs of our diverse student body. Whether you are interested in technology, business, arts, or sciences, Learning Africa has something for everyone. Our curriculum is constantly updated to stay current with industry trends and advancements.'
	}
];

type FeatureProps = {
	icon: IconDefinition;
	title: string;
	description: string;
};
function Feature({ icon, title, description }: FeatureProps) {
	return (
		<div className="flex flex-col gap-4 flex-[1_0_20rem]">
			<div className="flex justify-center ">
				<FontAwesomeIcon
					icon={icon}
					size="6x"
					className="text-gray-400"
				/>
			</div>
			<div className="text-2xl font-bold text-primary">{title}</div>
			<div>{description}</div>
		</div>
	);
}
export default function WhyUs() {
	return (
		<div className="bg-white min-h-[60vh]">
			<div className="max-w-7xl mx-auto px-4 py-10">
				<div className="text-4xl font-bold">Why Learning Africa?</div>
				<div className="gap-8 mt-10 flex flex-wrap">
					{features.map((feature, i) => (
						<Feature key={i} {...feature} />
					))}
				</div>
			</div>
		</div>
	);
}

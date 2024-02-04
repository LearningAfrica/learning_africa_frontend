import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lazy } from 'react';
const Card = lazy(() => import('./SuperAdminCard'));
const FaqCard = lazy(() => import('./SuperAdminFaqCard'));
const helpItems = [
	{
		title: 'Account',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
		icon: faQuestionCircle
	},
	{
		title: 'Course TRACKING',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
		icon: faQuestionCircle
	},
	{
		title: 'How to create sidebar menu',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
		icon: faQuestionCircle
	},
	{
		title: 'Purchase Refunds',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
		icon: faQuestionCircle
	},
	{
		title: 'Troubleshooting',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
		icon: faQuestionCircle
	},
	{
		title: 'Mobile App',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
		icon: faQuestionCircle
	}
];
const helpFAQS = [
	{
		question: 'Life access to course'
	},
	{
		question: 'Payment'
	},
	{
		question: 'Refund'
	},
	{
		question: 'Cerficate of completion'
	},
	{
		question: 'Payment Issues'
	},
	{
		question: 'How to create sidebar menu'
	}
];
function SuperAdminStudentTab() {
	return (
		<div className="flex flex-col w-full">
			<h2 className="text-start ml-3 p-2">
				Select a topic to search for help
			</h2>
			<div className="grid grid-cols-3 place-items-center mt-6 gap-8">
				{helpItems.map(({ icon, title, description }) => (
					<Card>
						<div className="flex justify-center items-center">
							<FontAwesomeIcon
								icon={icon}
								className="text-2xl text-center w-8 h-8 p-1 bg-orange-300 rounded-md"
							/>
						</div>
						<span className="text-xl text-center">{title}</span>
						<p className="text-[12px] text-center text-gray-500">
							{description}
						</p>
					</Card>
				))}
			</div>
			<h2 className="text-start ml-3 p-2">Frequently Asked Questions</h2>
			<div className="grid grid-cols-3 place-items-center mt-6 gap-8">
				{helpFAQS.map(({ question }) => (
					<FaqCard>
						<span className="text-xl text-center ">{question}</span>
					</FaqCard>
				))}
			</div>
		</div>
	);
}

export default SuperAdminStudentTab;

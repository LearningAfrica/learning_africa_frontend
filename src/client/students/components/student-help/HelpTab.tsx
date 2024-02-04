import React from 'react';
import InstructorTab from './InstructorTab';
import StudentTab from './StudentTab';

function HelpTab() {
	const [activeTab, setActiveTab] = React.useState<number>(1);
	const tabs = [
		{ id: 1, title: 'Instructor', content: <InstructorTab /> },
		{ id: 2, title: 'Student', content: <StudentTab /> }
	];

	return (
		<div className="">
			<div className="flex  bg-white shadow-sm flex-row justify-center items-center p-1">
				{tabs.map((tab) => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={`${
							activeTab === tab.id
								? 'border-primary outline-none  border-b-2 rounded-full px-4 py-2 text-gray-800'
								: ' text-gray-800'
						} mr-2`}
					>
						{tab.title}
					</button>
				))}
			</div>
			<div className="mt-4">
				{tabs.map((tab) =>
					activeTab === tab.id ? (
						<div key={tab.id}>{tab.content}</div>
					) : null
				)}
			</div>
		</div>
	);
}

export default HelpTab;

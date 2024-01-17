import React from 'react';
import Discussion from './Discussion';
import Purchased from './Purchased';
import About from './About';
import Subscription from './Subscription';

function ProfileTab() {
	const [activeTab, setActiveTab] = React.useState<number>(1);
	const tabs = [
		{ id: 1, title: 'About', content: <About /> },
		{ id: 2, title: 'Discussion', content: <Discussion /> },
		{ id: 3, title: 'Purchased', content: <Purchased /> },
		{
			id: 4,
			title: 'Subscription',
			content: <Subscription />
		}
	];

	return (
		<div className="">
			<div className="flex  bg-white shadow-sm flex-row justify-start  p-1">
				{tabs.map((tab) => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={`${
							activeTab === tab.id
								? 'border-primary outline-none  border-b-2 rounded-full px-4 py-2 text-gray-800'
								: ' text-gray-800'
						} px-4 py-2 mr-2 `}
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

export default ProfileTab;

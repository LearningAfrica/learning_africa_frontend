import React, { useState } from 'react';
import Notification from './Notification';
import Privacy from './Privacy';
import CloseAccount from './CloseAccount';
import Account from './Account';

const Tab: React.FC = () => {
	const [activeTab, setActiveTab] = useState<number>(1);

	const tabs = [
		{ id: 1, title: 'Account', content: <Account /> },
		{ id: 2, title: 'Notification', content: <Notification /> },
		{ id: 3, title: 'Privacy', content: <Privacy /> },
		{ id: 4, title: 'Close Account', content: <CloseAccount /> }
	];

	return (
		<div className='mt-5'>
			<div className="flex">
				{tabs.map((tab) => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={`${
							activeTab === tab.id
								? 'bg-primary-pk rounded-full px-4 py-2 text-white'
								: ' text-gray-600'
						} px-4 py-2 mr-2 rounded-full`}
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
};

export default Tab;

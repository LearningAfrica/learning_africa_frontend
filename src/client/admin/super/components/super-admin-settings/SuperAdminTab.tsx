import React, { useState } from 'react';
import SuperAdminNotification from './SuperAdminNotification';
import SuperAdminPrivacy from './SuperAdminPrivacy';
import SuperAdminCloseAccount from './SuperAdminCloseAccount';
import SuperAdminAccount from './SuperAdminAccount';

const SuperAdminTab: React.FC = () => {
	const [activeTab, setActiveTab] = useState<number>(1);

	const tabs = [
		{ id: 1, title: 'Account', content: <SuperAdminAccount /> },
		{ id: 2, title: 'Notification', content: <SuperAdminNotification /> },
		{ id: 3, title: 'Privacy', content: <SuperAdminPrivacy /> },
		{ id: 4, title: 'Close Account', content: <SuperAdminCloseAccount /> }
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

export default SuperAdminTab;

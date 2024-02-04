import React, { ReactNode } from 'react';
interface SuperAdminCardProps {
	children: ReactNode;
}

const SuperAdminFaqCard: React.FC<SuperAdminCardProps> = ({ children }) => {
	return (
		<div className="bg-white w-[500px] h-[70px] p-1 rounded-md shadow-md flex flex-col">
			<div className="flex flex-col m-auto justify-center">{children}</div>
		</div>
	);
};

export default SuperAdminFaqCard;

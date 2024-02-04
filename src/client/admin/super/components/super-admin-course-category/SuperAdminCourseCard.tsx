import React, { ReactNode } from 'react';

interface SuperAdminCardProps {
	children: ReactNode;
}

const SuperAdminCourseCard: React.FC<SuperAdminCardProps> = ({ children }) => {
	return (
		<div className="bg-white w-[300px] h-[100px] rounded-md shadow-md flex flex-col">
			<div className="flex flex-row space-x-6 m-auto">
				{children}
			</div>
		</div>
	);
};

export default SuperAdminCourseCard;
 
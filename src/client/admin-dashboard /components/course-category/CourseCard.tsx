import React, { ReactNode } from 'react';

interface CardProps {
	children: ReactNode;
}

const CourseCard: React.FC<CardProps> = ({ children }) => {
	return (
		<div className="bg-white w-[300px] h-[100px] rounded-md shadow-md flex flex-col">
			<div className="flex flex-row space-x-6 m-auto">
				{children}
			</div>
		</div>
	);
};

export default CourseCard;
 
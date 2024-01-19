import React, { ReactNode } from 'react';
interface CardProps {
	children: ReactNode;
}

const FaqCard: React.FC<CardProps> = ({ children }) => {
	return (
		<div className="bg-white w-[500px] h-[70px] p-1 rounded-md shadow-md flex flex-col">
			<div className="flex flex-col m-auto justify-center">{children}</div>
		</div>
	);
};

export default FaqCard;

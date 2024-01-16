import React, { ReactNode } from 'react';

interface CardProps {
	children: ReactNode;
}

const PurchaseCard: React.FC<CardProps> = ({ children }) => {
	return (
		<div className="bg-white w-[900px] h-[300px] rounded-md shadow-md flex space-x-3 flex-col">
			<div className="flex flex-row  space-x-6 p-2 justify-center ">
				{children}
			</div>
		</div>
	);
};

export default PurchaseCard;

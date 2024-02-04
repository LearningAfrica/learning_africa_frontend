import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white w-[500px] h-[200px]   rounded-md shadow-md flex flex-col">
      <div className='flex flex-col space-y-2 m-auto justify-center '>{children}</div>
    </div>
  );
};

export default Card;

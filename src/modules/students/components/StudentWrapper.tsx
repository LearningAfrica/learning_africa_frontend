import React from 'react';
import StudentSidebar from './StudentSidebar';
import { motion } from "framer-motion"

type Props = {
	children: React.ReactNode;
};

export default function StudentWrapper({ children }: Props) {
	const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

	React.useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768) {
				setIsSidebarOpen(true);
			}
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<div className='relative'>
			<StudentSidebar 
				isSidebarOpen={isSidebarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
			/>
			<motion.div
				animate={{ x: isSidebarOpen ? 60 : 20 }}
				transition={{ ease: "easeOut", duration: 0.3 }}

				className={`absolute top-0 left-0 w-full h-full  ${ isSidebarOpen ? 'ml-60' : 'ml-20' } p-2`}
			>{children}</motion.div>
		</div>
	);
}

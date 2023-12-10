import React from 'react';
import AdminSidebar from './AdminSidebar';
import { motion } from 'framer-motion';
import AdminHeader from './AdminHeader';

type Props = {
	children: React.ReactNode;
};

export default function AdminWrapper({ children }: Props) {
	const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

	React.useEffect(() => {
		const handleResize = () => {
			// if (window.innerWidth > 768) {
			// 	setIsSidebarOpen(true);
			// }else{
			// 	setIsSidebarOpen(false);
			// }
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<div className="relative grid ">
			<AdminSidebar
				isSidebarOpen={isSidebarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
			/>
			<motion.div
				style={
					isSidebarOpen
						? { marginLeft: 250, width: 'calc(100% - 250px)' }
						: { marginLeft: 80, width: 'calc(100% - 80px)' }
				}
				className='p-4 h-screen overflow-y-auto bg-light'
			>
				<AdminHeader />
				{children}
			</motion.div>
		</div>
	);
}

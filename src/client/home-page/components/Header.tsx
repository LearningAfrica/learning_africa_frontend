import { useScrollHeight } from '@/lib/hooks/useScrollHeight';
import { cn } from '@/lib/utils/cn';
import { motion } from 'framer-motion';
import assets from '@/lib/constants/assets';
import { NavLink } from 'react-router-dom';

export default function Header() {
	const { isScroll } = useScrollHeight(100, {
		expre: '>=',
		magnitude: 200,
		from: 'top'
	});
	return (
		<motion.div
			animate={
				{
					// y: isScroll ? 0 : -100,
					// opacity: isScroll ? 1 : 0
				}
			}
			style={{
				backgroundImage: `url(${assets.images.headerBg})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed'
			}}
			transition={{
				duration: 0.5
			}}
			className={cn(
				'w-full flex justify-between items-center px-4 transition-all duration-500 py-2  bg-primary bg-blend-overlay bg-opacity-10',

				{
					'sticky top-2  z-20 mx-auto bg-white bg-opacity-100 border-b-2 border-primary shadow':
						isScroll
				}
			)}
		>
			<div
				className={cn(
					'bg-white w-full flex justify-between items-center p-4 max-w-7xl mx-auto rounded-md h-20 shadow border',
					{
						'bg-opacity-100 border-none shadow-none': isScroll
					}
				)}
			>
				<div className="flex items-center">
					<div className="flex items-center">
						<img
							className="w-14 h-14 rounded-full"
							src="https://avatars.githubusercontent.com/u/150797856?s=200&v=4"
							alt="avatar"
						/>
						<div
							className={cn(
								'text-xl   text-primary ml-4 font-bold uppercase'
							)}
						>
							Learning Africa
						</div>
					</div>
				</div>
				<div>
					<div className="flex items-center">
						<div className="text-sm font-medium text-gray-900">
							Home
						</div>
						<div className="text-sm font-medium text-gray-900 ml-4">
							About
						</div>
						<div className="text-sm font-medium text-gray-900 ml-4">
							Contact
						</div>
					</div>
				</div>
				<div className="flex items-center">
					<div className="flex items-center">
						<NavLink
							to={'/login'}
							className="text-sm font-medium text-gray-900"
						>
							Login
						</NavLink>
						<div className="text-sm font-medium text-gray-900 ml-4 bg-primary px-8 py-4 rounded">
							Signup
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

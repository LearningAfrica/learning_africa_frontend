import assets from '@/lib/constants/assets';
import { NavLink } from 'react-router-dom';

export default function HomeBanner() {
	return (
		<div
			style={{
				backgroundImage: `url(${ assets.images.headerBg })`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed'
			}}
			className="w-full bg-primary-pk bg-blend-overlay bg-opacity-10"
		>
			<div className=" max-w-7xl mx-auto  w-full gap-8 grid md:grid-cols-2 md:gap-4 p-10 md:min-h-[80vh] justify-center items-center">
				<div className="flex flex-col gap-4">
					<h1 className="text-4xl sm:text-6xl font-bold">
						Spread Your <span className="text-primary-pk">Skills</span>{' '}
						Around the world
					</h1>
					<p className="text-xl">
						Confidence in Skills with experienced mentors and
						updated curriculum, E-learning is ready to advance your
						career
					</p>
					<div className="flex gap-4">
						<NavLink
							to={'/student/dashboard'}
							className="bg-primary-pk text-white px-4  md:px-8 py-2 md:py-4 rounded-md text-sm md:text-2xl"
						>
							Get Started
						</NavLink>
						<button className="bg-white text-primary-pk px-4  md:px-8 py-2 md:py-4 rounded-md text-sm md:text-2xl border-primary-pk border">
							Learn More
						</button>
					</div>
				</div>
				<div className="relative">
					<img
						className="w-full h-full"
						src={assets.images.img2}
						alt="header"
					/>
					<div className="absolute top-0 left-40 md:left-80 -z-[1] rounded-full w-20 h-20 md:w-40 md:h-40 bg-primary-pk bg-opacity-50"></div>
					<div className="absolute top-0 left-0 rounded-full w-20 h-20 bg-green-600 bg-opacity-50"></div>
					<div className="absolute top-0 left-0 rounded-full w-20 h-20 bg-primary-pk-pk bg-opacity-50"></div>
					<div className="absolute top-20 right-10 rounded-full w-20 h-20 bg-blue-400 bg-opacity-50"></div>
					<div className="absolute top-10 left-0 rounded-full w-20 h-20 bg-red-400 -z-[1] bg-opacity-50"></div>
					<div className="absolute right-0 bottom-0 rounded-full  w-64 -z-[1] h-20 bg-primary-pk bg-opacity-50"></div>
				</div>
			</div>
		</div>
	);
}

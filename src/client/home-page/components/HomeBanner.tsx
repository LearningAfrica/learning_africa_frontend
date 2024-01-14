import assets from '@/lib/constants/assets';

export default function HomeBanner() {
	return (
		<div
			style={{
				backgroundImage: `url(${assets.images.headerBg})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
			}}
			className="w-full bg-primary bg-blend-overlay bg-opacity-10"
		>
			<div className=" max-w-7xl mx-auto  w-full grid grid-cols-2 gap-4 p-10 min-h-[80vh] justify-center items-center">
				<div className="flex flex-col gap-4">
					<h1 className="text-6xl font-bold">
						Spread Your <span className="text-primary">Skills</span>{' '}
						Around the world
					</h1>
					<p className="text-xl">
						Confidence in Skills with experienced mentors and
						updated carriculumn, E-learning is readyto advance your
						career
					</p>
					<div className="flex gap-4">
						<button className="bg-primary text-white px-8 py-4 rounded-md">
							Get Started
						</button>
						<button className="bg-white text-primary px-8 py-4 rounded-md border-primary border-1">
							Learn More
						</button>
					</div>
				</div>
				<div>
					<img
						className="w-full h-full"
						src={assets.images.img2}
						alt="header"
					/>
				</div>
			</div>
		</div>
	);
}

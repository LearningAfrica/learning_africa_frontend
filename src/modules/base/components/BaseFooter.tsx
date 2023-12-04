import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

export default function BaseFooter() {
	const year = new Date().getFullYear();
	return (
		<div className="">
			<div className="w-full bg-s-blue py-10">
				<div className="max-w-7xl mx-auto flex flex-col gap-2 md:gap-4 md:flex-row items-center py-4">
					<div className="flex-1 flex flex-col gap-2">
						{/* Logo */}
						<div className="text-white font-bold text-2xl">
							<FontAwesomeIcon icon={faEnvelope} size="2x" />
						</div>
						<h1 className="text-md md:text-2xl text-light font-bold">
							Newsletter
						</h1>
						<p className="text-lg text-light">
							Subscribe to our newsletter to get our latest news.
							Get to be the first to know about our new courses
							and promotions.
						</p>
					</div>
					{/* Newsletter */}
					<div className="flex-1">
						{/* Newsletter */}
						<form action="" className="w-full flex">
							<input
								type="text"
								className="border border-s-black rounded-md p-2 w-full"
								placeholder="Enter your email"
							/>
							<input
								type="submit"
								value="Subscribe"
								className="bg-s-black text-white rounded-md p-2"
							/>
						</form>
					</div>
				</div>
			</div>
			<div className="w-full bg-s-black p-10">
				<div className="max-w-7xl mx-auto flex flex-col gap-4 py-4">
					{/* Footer */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						<div className='flex flex-col gap-4'>
							<h1 className="text-white font-bold text-lg">
								About
							</h1>
							<p className="text-white text-sm">
								We are a team of nurses, doctors, technologists
								and executives dedicated to help nurses find
								jobs that they love.
							</p>
							<div className='flex gap-2 text-light '>
								<a
									href="https://www.facebook.com"
									className="text-s-blue"
								>
								<FontAwesomeIcon icon={faFacebookSquare} size="2x" color='white' />
								</a>
								<a
									href="https://www.twitter.com"
									className="text-s-blue"
								>
									<FontAwesomeIcon icon={faTwitterSquare} size="2x" color='white' />
								</a>
								<a
									href="https://www.instagram.com"
									className="text-s-blue"
								>
									<FontAwesomeIcon icon={faInstagramSquare} size="2x" color='white' />
								</a>
								<a
									href="https://www.youtube.com"
									className="text-s-blue"
								>
									<FontAwesomeIcon icon={faYoutubeSquare} size="2x" color='white'/>
								</a>
							</div>
						</div>
						<div
						className='flex flex-col gap-4'
						>
							<h1 className="text-white font-bold text-lg">
								Sitemap
							</h1>
							<ul className="text-white text-sm">
								<li> Nurses</li>
								<li> Employers</li>
								<li> Social networking</li>
								<li> Jobs</li>
							</ul>
						</div>
						<div className='flex flex-col gap-4'>
							<h1 className="text-white font-bold text-lg">
								Privacy
							</h1>
							<ul className="text-white text-sm">
								<li> Terms of use</li>
								<li> Privacy policy</li>
								<li> Cookie policy</li>
							</ul>
						</div>
						<div
						className='flex flex-col gap-4'
						>
							<h1 className="text-white font-bold text-lg">
								Contact us
							</h1>
							<ul className="text-white text-sm">
								<li> 1-800-123-4567</li>
								<li>
									<a
										href="mailto:la@gmail.com"
										className="text-light"
									>
									la@gmail.com
									</a>
								</li>
							</ul>

						</div>
					</div>
					{/* Horizontal line */}
					<hr />
					{/* Copyright */}
					<div className="text-center text-white font-bold text-sm">
						© {year} All rights reserved.
					</div>
				</div>
			</div>
		</div>
	);
}

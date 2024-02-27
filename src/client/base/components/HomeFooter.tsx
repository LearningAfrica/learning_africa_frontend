
export default function HomeFooter() {
	return (
		<div className="bg-orange-700 px-4 py-10 text-white ">
			<div className="px-4 md:px-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
				<div>
					<div className="text-2xl font-bold text-white">
						About Us
					</div>
					<div className="text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, quos!
					</div>
					<div>
						<div className="text-xl font-bold text-white mt-4">
							Contact Us
						</div>
						<div className="text-white">+234 703 123 4567</div>
						<div className="text-white"></div>
					</div>
				</div>
				<div>
					<h1>Office</h1>
					<p>+234 703 123 4567</p>
					<p>+234 703 123 4567</p>
				</div>
				<div>
					<h1>
						Quick <span className="text-primary-pk">Links</span>
					</h1>
					<p>Home</p>
					<p>About</p>
				</div>
				<div>
					<h1>Recent Courses</h1>
					<div>
						{[1, 2, 3].map((course) => (
							<div
								key={course}
								
							>
								<p>Course {course}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<hr />
			<div className="max-w-7xl mx-auto flex justify-between py-4 text-white">
				<div>
					Copyright &copy;{new Date().getFullYear()} - All rights
					reserved(Learning Africa)
				</div>
				<div>
					Designed by{' '}
					<a
						href="
					https://www.linkedin.com/in/abdulqudus-abdulrahman-9b7a4a1b7/"
					>
						Felix Orinda
					</a>
				</div>
			</div>
		</div>
	);
}

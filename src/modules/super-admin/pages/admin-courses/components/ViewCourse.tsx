import React from 'react';

const courses = [
	{
		courseName: 'Introduction to Financial Markets',
		description:
			'This course provides an overview of financial markets, including their structure, types of instruments traded, and the impact of market dynamics on economies.',
		category: 'Market Fundamentals',
		thumbnail: 'https://example.com/thumbnails/financial-markets.jpg',
		modules: [
			{
				moduleName: 'Basics of Financial Markets',
				content: [
					'Definition and role of financial markets',
					'Types of financial markets: Stock, Bond, Forex, Derivatives',
					'Functions of financial markets in an economy'
				],
				quiz: 'Basic concepts of financial markets'
			},
			{
				moduleName: 'Stock Markets',
				content: [
					'Introduction to stocks and stock exchanges',
					'Understanding market indices and their significance',
					'Basics of stock trading and investment'
				],
				quiz: 'Stock market fundamentals'
			},
			{
				moduleName: 'Bond Markets',
				content: [
					'Overview of government and corporate bonds',
					'Bond pricing and yield calculations',
					'Risk assessment in bond markets'
				],
				quiz: 'Basics of bond markets'
			}
		]
	},
	{
		courseName: 'Corporate Finance',
		description:
			'Learn the fundamentals of corporate finance, including capital budgeting, financial analysis, and funding strategies.',
		category: 'Corporate Finance',
		thumbnail: 'https://example.com/thumbnails/corporate-finance.jpg',
		modules: [
			{
				moduleName: 'Introduction to Corporate Finance',
				content: [
					'Key concepts in corporate finance',
					'Reading and understanding financial statements',
					'Value creation and financial decision making'
				],
				quiz: 'Corporate finance principles'
			},
			{
				moduleName: 'Capital Budgeting',
				content: [
					'Principles of investment decision making',
					'Techniques for evaluating investment opportunities',
					'Risk and return analysis in capital budgeting'
				],
				quiz: 'Investment analysis'
			},
			{
				moduleName: 'Funding Strategies',
				content: [
					'Equity vs. debt financing',
					'Hybrid financing options',
					'Capital structure and its impact on company value'
				],
				quiz: 'Financing and capital structure'
			}
		]
	},
	{
		courseName: 'Investment Strategies',
		description:
			'This course covers various investment strategies, portfolio management, and risk mitigation techniques.',
		category: 'Investment Management',
		thumbnail: 'https://example.com/thumbnails/investment-strategies.jpg',
		modules: [
			{
				moduleName: 'Fundamentals of Investing',
				content: [
					'Introduction to various investment types',
					'Understanding the risk-return tradeoff',
					'Building a foundational investment knowledge'
				],
				quiz: 'Investment basics'
			},
			{
				moduleName: 'Portfolio Management',
				content: [
					'Creating a diversified investment portfolio',
					'Strategies for portfolio management and rebalancing',
					'Measuring portfolio performance'
				],
				quiz: 'Portfolio construction and management'
			},
			{
				moduleName: 'Risk Management',
				content: [
					'Identifying financial risks',
					'Tools and techniques for risk assessment',
					'Strategies for risk mitigation'
				],
				quiz: 'Risk assessment in investments'
			}
		]
	}
	// ... Additional courses can be added
];

function ViewCourse() {
	const [course, setCourse] = React.useState(courses[0]);
	return (
		<div>
			<div className="min-h-[20svh] h-fit grid grid-cols-2 items-center gap-4 p-4">
				<div>
					<h1 className="text-3xl font-bold ">{course.courseName}</h1>
					<p className="text-lg">
						Get a certificate of completion at the end of this
						course
					</p>
				</div>
				<img
					src="https://th.bing.com/th/id/R.875b7e9bc007fbd292c070ac9735ef6a?rik=NkfIsfiwzk%2br5g&riu=http%3a%2f%2fmarvistamom.com%2fwp-content%2fuploads%2fbooks3.jpg&ehk=45OcK5XC3hHbUte6%2frEAdckJ2n%2bdSAASyFXEw0EOXZ8%3d&risl=&pid=ImgRaw&r=0"
					alt=""
					className="w-full h-56"
				/>
			</div>
			<div className="grid md:grid-cols-2 gap-10">
				<div>
					<p className="whitespace-break-spaces">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Nihil officiis ratione perferendis, sunt similique,
						excepturi rerum ullam placeat optio rem maiores
						exercitationem, consequuntur omnis quam doloremque
						voluptate odio corporis nesciunt iure quo dicta! Tenetur
						qui voluptatum deleniti veritatis, debitis corrupti
						dignissimos quas voluptas molestiae numquam ut molestias
						eos. Iure dolorem qui reprehenderit at, ipsam quaerat
						blanditiis ipsum rem voluptatum aliquam reiciendis atque
						unde voluptatem et quibusdam illum, nostrum odio. Ad,
						cupiditate? Sint iusto repellat ipsam repudiandae rerum,
						officia ad! Maiores unde nisi sequi delectus voluptate
						iusto, ut debitis ad quae eaque suscipit illo neque,
						magnam earum qui illum ipsum repellat!
					</p>
					<div className="border p-4 my-2">
						<h1 className="text-xl font-bold">Modules</h1>
						<hr className="my-2" />
						<div className="flex flex-col gap-4 my-2">
							{course.modules.map((module, index) => (
								<div
									key={module.moduleName}
									className="flex flex-col gap-4"
								>
									<h1 className="font-medium">
										<span className="border h-8 w-8 p-4 rounded-full">
											{index + 1}
										</span>{' '}
										{module.moduleName}
									</h1>
									{/* <ul className='list-disc px-4'>
										{module.content.map((content) => (
											<li className="whitespace-break-spaces">
												{content}
											</li>
										))}
									</ul> */}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4 border p-10">
					<h1 className="text-2xl font-bold">What you will learn</h1>
					<ul className="list-disc">
						<li>
							Learn how to use the most popular software in the
							business analytics industry
						</li>
						<li>
							Learn how to use the most popular software in the
							business analytics industry
						</li>
						<li>
							Learn how to use the most popular software in the
							business analytics industry
						</li>
						<li>
							Learn how to use the most popular software in the
							business analytics industry
						</li>
						<li>
							Learn how to use the most popular software in the
							business analytics industry
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ViewCourse;

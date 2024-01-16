import PurchaseCard from './PurchaseCard';
const purchased = [
	{
		img: 'https://images.unsplash.com/photo-1705397290310-98a9dd4d6a54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		views: '109K views',
		days: '15 days ago',
		title: 'Complete Python Bootcamp: Go from zero to hero in Python 3',
		category: 'Web Development | Python',
		button: 'Purchased',
		name: 'John Doe',
		price: '$10'
	},
	{
		img: 'https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		views: '109K views',
		days: '15 days ago',
		title: 'Complete Python Bootcamp: Go from zero to hero in Python 3',
		category: 'Web Development | Python',
		button: 'Purchased',
		name: 'John Doe',
		price: '$10'
	},
	{
		img: 'https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		views: '109K views',
		days: '15 days ago',
		title: 'Complete Python Bootcamp: Go from zero to hero in Python 3',
		category: 'Web Development | Python',
		button: 'Purchased',
		name: 'John Doe',
		price: '$10'
	}
];
function Purchased() {
	return (
		<div className='p-2'>
			<h2 className='text-start p-2'>Purchased Courses</h2>
			<div className="grid grid-cols-1 place-items-start mt-6 gap-4">
				{purchased.map(
					({ img, days, category, views, name, price, title }) => (
						<PurchaseCard>
							<div>
								<a href="#">
									<img
										className="w-[500px] h-[250px] rounded-t-lg "
										src={img}
										alt=""
									/>
								</a>
							</div>

							<div className="flex flex-col space-y-2   justify-start">
								<div className="flex justify-start flex-row space-x-6">
									<p className="text-[11px] text-center text-gray-500">
										{views}
									</p>
									<p className="text-[12px] text-center text-gray-500">
										{days}
									</p>
								</div>
								<a href="#">
									<h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
										{title}
									</h5>
								</a>
								<p className="mb-3 font-normal text-gray-700">
									{category}
								</p>
								<div>
									<a
										href="#"
										className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300"
									>
										Purchased
									</a>
								</div>

								<div className="flex flex-col mt-3 space-x-7">
									<div className="flex justify-start">
										<p className="text-[12px]">
											By: {name}
										</p>
									</div>
									<div className="flex justify-end">
										{price}
									</div>
								</div>
							</div>
						</PurchaseCard>
					)
				)}
			</div>
		</div>
	);
}

export default Purchased;

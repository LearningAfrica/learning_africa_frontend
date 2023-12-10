import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cards = [
	{
		title: 'Courses',
		count: 200,
		icon: faUser
	},
	{
		title: 'Learners',
		count: 50,
		icon: faUser
	},
	{
		title: 'Instructors',
		count: 20,
		icon: faUser
	},
	{
		title: 'Subjects',
		count: 50,
		icon: faUser
	}
];
export default function AdminStatsCardSection() {
	return (
		<div>
			<div className=" p-4 flex flex-col gap-4">
				<h1 className="text-2xl font-semibold">Dashboard</h1>
				<div className="flex gap-2 flex-wrap justify-between">
					{/* Stats cards */}
					{cards.map((item) => {
						return (
							<div
								key={item.title}
								className={`flex max-w-[20rem] items-center gap-4 shadow-sm p-4 border h-32 w-full rounded-md relative justify-between`}
							>
								<div className="absolute left-0 w-full h-full admin-card-clip bg-neutral-200 -z-[1]"></div>
								<div className="flex flex-col gap-2">
									<h1 className="text-3xl uppercase font-extrabold ">
										{item.count}
									</h1>
									<p className='p-2 text-lg'>{item.title}</p>
								</div>
								<div className="text-neutral-900 border border-neutral-800 p-2 rounded-full">
									<FontAwesomeIcon icon={faUser} size="3x" />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

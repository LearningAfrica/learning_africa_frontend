import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function BaseHeader() {
	return (
		<div className="border-b p-2 bg-light sticky top-0">
			<div className="max-w-7xl mx-auto py-2 flex justify-between">
				<div className='flex items-center gap-2'>
					<FontAwesomeIcon icon={faBars} size="2x" />
					<h2 className='text-xl uppercase font-bold'>Learning</h2>
				</div>
				<div>
					<ul>
						<li className='inline-block mr-2'>
							<a href="#" className='text-sm uppercase font-bold'>Home</a>
						</li>
						<li className='inline-block mr-2'>
							<a href="#" className='text-sm uppercase font-bold'>About</a>
						</li>
						<li className='inline-block mr-2'>
							<a href="#" className='text-sm uppercase font-bold'>Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

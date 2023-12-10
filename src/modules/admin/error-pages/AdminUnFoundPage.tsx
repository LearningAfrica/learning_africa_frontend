import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AdminUnFoundPage() {
	return (
		<div className="min-h-screen p-10 flex items-center justify-center flex-col">
			<div>
				<FontAwesomeIcon
					icon={faExclamationTriangle}
					size="5x"
					className="text-neutral-500"
				/>
			</div>
			<p>
				<span className="text-lg">
					Oops something went wrong. Page not found.
				</span>
			</p>
		</div>
	);
}

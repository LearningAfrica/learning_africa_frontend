import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
	return (
		<div className="flex items-center flex-col justify-center h-screen bg-neutral-100 gap-3">
			<h1 className={cn('text-xl font-bold text-neutral-900')}>
				404 - Page Not Found
			</h1>
			<p>We're sorry, the page you were looking for doesn't exist.</p>
			<p>
				You can go back to the{' '}
				<Link to="/" className="text-primary-pk">
					homepage
				</Link>
				.
			</p>
		</div>
	);
}

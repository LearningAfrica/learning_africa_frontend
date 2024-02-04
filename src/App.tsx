import router from '@/router';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import DefaultPageLoad from './components/shared/DefaultPageLoad';
export default function App() {
	return (
		<Suspense fallback={<DefaultPageLoad />}>
			<RouterProvider router={router} />
		</Suspense>
	);
}

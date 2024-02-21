import router from '@/router';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import DefaultPageLoad from './components/shared/DefaultPageLoad';
import { ThemeProvider } from './components/shared/theme-provider';
export default function App() {
	return (
		<Suspense fallback={<DefaultPageLoad />}>
			<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
				<RouterProvider router={router} />
			</ThemeProvider>
		</Suspense>
	);
}

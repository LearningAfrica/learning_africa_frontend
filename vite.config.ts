import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react({ plugins: [] })],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src') // src 路径
		}
	}
});

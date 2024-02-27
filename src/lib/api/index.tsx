/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// import jtwDecode, { JwtPayload } from 'jwt-decode';
import * as jtwDecode from 'jwt-decode';
import type { JwtPayload } from 'jwt-decode';

import axios from 'axios';
// import AppConfigService from './config';
import { Cookie } from '../services/cookie-service';
// const current_url = 'https://8796-102-215-33-50.ngrok-free.app'
const current_url = 'https://learning-africa-backend-1d2392b46964.herokuapp.com/'
const baseURL = current_url;
	// AppConfigService.getKey('MODE') === 'development'
	// 	? AppConfigService.getKey('VITE_API_DEV_BACKEND_URL')
	// 	: AppConfigService.getKey('VITE_API_PROD_BACKEND_URL');
const appAxios = axios.create({
	baseURL,
	timeout: 30000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
		'Access-Control-Allow-Headers':
			'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials',
		'Access-Control-Allow-Credentials': 'true'
	},
	withCredentials: true
});
const privateAxios = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
		'Access-Control-Allow-Headers':
			'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials',
		'Access-Control-Allow-Credentials': 'true',
		// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
		Authorization:
			'JWT ' +
				Cookie.getCookieToken('ck_63hsG-sscWPkl')?.['accessToken'] ?? ''
	},
	withCredentials: true
});

// Add a request interceptor to add the JWT token to the authorization header
privateAxios.interceptors.request.use(
	// eslint-disable-next-line @typescript-eslint/require-await
	async (config) => {
		const token = Cookie.getCookieToken('ck_63hsG-sscWPkl');

		if (token) {
			config.headers.Authorization = `Bearer ${ token.accessToken }`;
		}

		return config;
	},
	(error) => Promise.reject(error)
);

// Add a response interceptor to refresh the JWT token if it's expired
privateAxios.interceptors.response.use(
	// eslint-disable-next-line @typescript-eslint/require-await
	async (response) => response,
	async (error) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		const originalRequest = error.config;
		// console.log('Response error: ', error.response);

		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		if (
			error.response &&
			error.response.status === 401 &&
			!originalRequest._retry
		) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			originalRequest._retry = true;
			const tokenPayload = Cookie.getCookieToken('ck_63hsG-sscWPkl');
			// console.log("tokenPayload: " + JSON.stringify(tokenPayload));

			if (!tokenPayload) {
				return Promise.reject(error);
			}
			const decodedToken = jtwDecode.jwtDecode<JwtPayload>(
				tokenPayload.refreshToken
			);
			// console.log("decodedToken: " + JSON.stringify(decodedToken));

			const currentTime = new Date().getTime() / 1000;
			if (decodedToken.exp! < currentTime) {
				console.log('Token expired');

				// clearSession();
				return Promise.reject(error);
			}
			if (!decodedToken) {
				// Cookie.removeToken("ck_63hsG-sscWPkl");
				// AppLocalStorage.removeKey('uz-stUsx-aasSW5242-00981');
				return Promise.reject(error);
			}
			const refreshToken = tokenPayload.refreshToken;
			const res = await appAxios.post('/auth/refresh_token/', {
				refresh_token: refreshToken
			});
			// console.log("res: " + JSON.stringify(res));

			if (res.status === 201 || res.status === 200) {
				Cookie.setCookieToken('ck_63hsG-sscWPkl', {
					accessToken: res.data.access_token,
					refreshToken: res.data.refresh_token
				});
				privateAxios.defaults.headers.common['Authorization'] =
					'JWT ' +
					Cookie.getCookieToken('ck_63hsG-sscWPkl').accessToken;
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
				originalRequest.headers['Authorization'] =
					'JWT ' +
					Cookie.getCookieToken('ck_63hsG-sscWPkl').accessToken;
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				return privateAxios(originalRequest);
			}
		}
		// clearSession();
		return Promise.reject(error);
	}
);
function getWebSocketAddress(url: string): string {
	// eslint-disable-next-line no-useless-escape
	const pattern = /(http|https):\/\/([^\/]+)/gi;
	// const prodRegex = new RegExp(/(http|https):\/\/([^\/]+)/);
	// const pattern = isDev ? devRegex : prodRegex;
	const match = url.match(pattern);
	// console.log("match", match);

	if (match) {
		// const protocol = match[1] === "http" ? "ws" : "wss";
		// const hostname = match[2];
		// const port = match[3];

		// const prodUrl = `${protocol}://${hostname}`;
		return match[0].replace(/http/, 'ws'); //isDev ? `${protocol}://${hostname}:${port}` : prodUrl;
	} else {
		// console.log('No match found for url', url);
		return url;
	}
}
export const wsURL = getWebSocketAddress(baseURL);

export { appAxios, privateAxios };

// eslint-disable-next-line react-refresh/only-export-components
export default Object.freeze({
	appAxios,
	privateAxios
});

import axios from "axios";
export default defineNuxtPlugin(() => {
	function refreshToken() {
		// refresh token
	}
	const BASE_URL =
		"https://learning-africa-backend-afd4f3383186.herokuapp.com/";
	const openAxios = axios.create({
		baseURL: BASE_URL,
		headers: {
			"Content-Type": "application/json"
		}
	});
	return {
		provide: {
			axios: axios.create({
				baseURL: BASE_URL,
				headers: {
					"Content-Type": "application/json"
				}
			}),
			openAxios,
			refreshToken
		}
	};
});

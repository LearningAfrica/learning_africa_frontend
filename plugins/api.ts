import axios, {
	type AxiosInstance,
	type AxiosRequestConfig
} from "axios";
export default defineNuxtPlugin(() => {
	const auth = useAuthStore();
	async function refreshToken() {
		console.log("refreshing token");

		// refresh token
	}
	const BASE_URL ='https://backend.learningafrica.com/'
		// "https://learning-africa-backend-afd4f3383186.herokuapp.com/";
	const openAxios = axios.create({
		baseURL: BASE_URL,
		headers: {
			"Content-Type": "application/json"
		}
	});
	const authHeader = auth.isAuthenticated
		? {
				Authorization: `JWT ${auth.auth.user.access_token}`
			}
		: {
				"Content-Type": "application/json"
			};

	const privateAxios = axios.create({
		baseURL: BASE_URL,
		headers: {
			"Content-Type": "application/json",
			...authHeader
		}
	});

	// privateAxios.get()

	privateAxios.interceptors.response.use(
		(response) => {
			return response;
		},
		async (error) => {
			const originalRequest = error.config;
			if (
				error.response.status === 401 &&
				!originalRequest._retry &&
				originalRequest.url !== "/auth/refresh"
			) {
				originalRequest._retry = true;
				await refreshToken();
				return privateAxios(originalRequest);
			}
			return Promise.reject(error);
		}
	);

	privateAxios.interceptors.request.use(
		(config) => {
			config.headers.Authorization = `JWT ${auth.auth.user.access_token}`;
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	class Api<T = unknown> {
		private is_loading = ref(false);
		private _error = ref("");
		private _data = ref<T>();
		private status = ref(0);

		constructor(private axios: AxiosInstance) {}

		privateRequest<T, D = unknown>(
			url: string,
			method: "GET" | "POST" | "PUT" | "DELETE",
			data?: T,
			params?: AxiosRequestConfig<D>
		) {
			return this.axios.request({
				url,
				method,
				data,
				params
			});
		}

		get data() {
			return this._data;
		}

		get error() {
			return this._error;
		}

		get<T, D = unknown>(url: string, config?: AxiosRequestConfig<D>) {
			return this.privateRequest<T, D>(url, "GET", undefined, config!);
		}

		post<T, D = unknown>(
			url: string,
			data: T,
			config?: AxiosRequestConfig<any>
		) {
			return this.privateRequest<T, D>(url, "POST", data, config);
		}

		put<T, D = unknown>(url: string, data: T, config?: AxiosRequestConfig) {
			return this.privateRequest<T, D>(url, "PUT", data, config);
		}

		delete<T, D = unknown>(url: string, config?: AxiosRequestConfig) {
			return this.privateRequest<T, D>(url, "DELETE", undefined, config);
		}

		get isLoading() {
			return this.is_loading;
		}
	}

	return {
		provide: {
			axios: axios.create({
				baseURL: BASE_URL,
				headers: {
					"Content-Type": "application/json"
				}
			}),
			openAxios,
			refreshToken,
			privateAxios,
			API: Api
		}
	};
});

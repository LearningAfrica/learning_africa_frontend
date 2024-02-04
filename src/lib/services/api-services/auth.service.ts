import { LoginFormType } from '@/client/accounts/Login';
import { RegisterFormType } from '@/client/accounts/Register';
import { appAxios } from '@/lib/api';
import { AuthState } from '@/store/useAuthStore';
export type RegisterUserType = {
	username: string;
	email: string;
	first_name: string;
	last_name: string;
	password: string;
	is_super_admin: boolean;
	is_admin: boolean;
	is_instructor: boolean;
	is_student: boolean;
	confirm_password: string;
};

export class AuthApiService {
	// register: MutationFunction<unknown, void> | undefined;
	// constructor(private http: AxiosInstance) {}

	async login(payload: LoginFormType): Promise<AuthState> {
		const resp = await appAxios.post(`/auth/login/`, payload)
		return resp.data
	}
	register(user: RegisterFormType) {
		const feedback = appAxios.post(`/auth/register/`, user);
		return feedback;
		// console.log(user);
	}
	// register(
}

// const authApiService = new AuthApiService();

// export default authApiService;

import { LoginFormType } from '@/client/base/pages/Login';
import { RegisterFormType } from '@/client/base/pages/Register';
import { appAxios } from '@/lib/api';
import { UserRoleTypes } from '@/store/authAtom';
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

type LoginUserResponse = {
	username: string;
	user_role: UserRoleTypes;
	refresh_token: string;
	access_token: string;
};

export class AuthApiService {
	// register: MutationFunction<unknown, void> | undefined;
	// constructor(private http: AxiosInstance) {}

	async login(payload: LoginFormType): Promise<LoginUserResponse> {
		const resp = await appAxios.post(`/auth/login/`, payload);
		console.log(resp.data);

		return resp.data;
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

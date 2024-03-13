import { UserRoleTypes } from "@/store/auth-atom";
import { LoginUserType } from "../login/page";
import { RegisterFormType } from "../register/page";
import { appAxios } from "@/lib/api";

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

	async login(payload: LoginUserType): Promise<LoginUserResponse> {
		const resp = await appAxios.post(`/auth/login/`, payload);
		return resp.data;
	}
	register(user: RegisterFormType) {
		const feedback = appAxios.post(`/auth/register/`, user);
		return feedback;
	}
}
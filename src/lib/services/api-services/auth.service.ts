export class AuthApiService {
	constructor(private http: HttpClient) {}

	login(email: string, password: string): Observable<AuthResponse> {
		return this.http.post<AuthResponse>(
			`${environment.apiUrl}/auth/login`,
			{
				email,
				password
			}
		);
	}
}

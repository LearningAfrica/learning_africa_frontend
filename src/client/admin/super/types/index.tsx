export type OrganizationType = {
	name: string;
	id:number
	admin:string
}

export type UserType = {
	id: number,
	username: string,
	email: string,
	first_name: string,
	last_name: string,
	is_super_admin: boolean,
	is_admin: boolean,
	is_instructor: boolean,
	is_student: boolean
}

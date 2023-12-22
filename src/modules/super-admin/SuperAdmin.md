# Module for super ADMIN

Super admin has the following abilities:
- Create organization
- Create admin
- Create Instructor
- View/Update Student
- Create courses
- Create course categories
- Create live sessions

Modules
```ts
type User = {
	id: int,
	username: string,
	email: email,
	first_name: string,
	last_name: string,
	is_super_admin: boolean,
	is_admin: boolean,
	is_instructor: boolean,
	is_student: boolean
}

type SuperAdmin = {
	user = id
}

type Admin = {
	user = id
}

type Instructor = {
	user = id
}

type Student = {
	user = id
}

type Organization = {
	id: int,
	name: string,
	admin: string
}
```

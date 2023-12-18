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
	Id: int,
	Username: string,
	Email: email,
	First_name: string,
	Last_name: string,
	Is_super_admin: boolean,
	Is_admin: boolean,
	Is_instructor: boolean,
	Is_student: boolean
}

type SuperAdmin = {
	User = id
}

type Admin = {
	User = id
}

type Instructor = {
	User = id
}

type Student = {
	User = id
}

type Organization = {
	Id: int,
	Name: string,
	Admin: string
}
```

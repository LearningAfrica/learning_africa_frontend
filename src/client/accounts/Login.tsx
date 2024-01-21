import { NavLink } from 'react-router-dom';

export default function Login() {
	return (
		<div className="bg-light p-10">
			<div className="max-w-7xl mx-auto flex flex-col items-center py-4 min-h-[70vh] justify-center">
				{/* Login title */}
				<div>
					<h1 className="text-4xl font-bold">Login</h1>
				</div>
				<form action="" className='flex flex-col gap-4 max-w-2xl w-full'>
					{/* Email */}
					<div className="flex-1">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							className="w-full border p-2"
						/>
					</div>
					{/* Password with toggle password view */}
					<div className="flex-1">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							className="w-full border p-2"
						/>
					</div>
					{/* Submit */}
					<div className="flex-1">
						<button
							type="submit"
							className="w-full bg-orange-500 text-white p-2 rounded"
						>
							Login
						</button>
					</div>
					{/* Forgot password */}
					<div className="flex-1">
						<a href="#"
						className='text-blue-500'
						>Forgot Password?</a>
					</div>
					{/* Haven't enrolled Register */}
					<div className="flex-1 text-center">
						<p>
							Don't have an account? <NavLink
							to="/sign-up"
							className='text-blue-500'
							>Create one</NavLink>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CreateAccount() {
	return (
		<div className="bg-light p-4">
			<div className="max-w-7xl mx-auto py-4 flex flex-col items-center justify-center min-h-[70vh]">
				<div>
					{/* Create account title */}
					<h1 className="text-4xl font-bold">Enroll today</h1>
				</div>
				<form action="" className="flex flex-col gap-4 p-4 max-w-2xl">
					{/* First and last name */}
					<div className="flex gap-4">
						<div className="flex-1">
							<label htmlFor="first-name">First Name</label>
							<input
								type="text"
								name="first-name"
								id="first-name"
								className="w-full border p-2"
							/>
						</div>
						<div className="flex-1">
							<label htmlFor="last-name">Last Name</label>
							<input
								type="text"
								name="last-name"
								id="last-name"
								className="w-full border p-2"
							/>
						</div>
					</div>
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
					{/* Phone */}
					<div className="flex-1">
						<label htmlFor="phone">Phone</label>
						<input
							type="tel"
							name="phone"
							id="phone"
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
					{/* Confirm password */}
					<div className="flex-1">
						<label htmlFor="confirm-password">
							Confirm Password
						</label>
						<input
							type="password"
							name="confirm-password"
							id="confirm-password"
							className="w-full border p-2"
						/>
					</div>
					{/* Submit button */}
					<div className="flex-1">
						<button className="bg-orange text-white px-4 py-2 rounded">
							Create Account
						</button>
					</div>
					{/* Hr */}
				
					{/* Terms and conditions */}
					<div className="flex-1">
						<p>
							By creating an account, you agree to our{' '}
							<a href="#" className="text-orange text-blue-500">
								Terms of Service
							</a>{' '}
							and{' '}
							<a href="#" className="text-blue-500">
								Privacy Policy
							</a>
							.
						</p>
					</div>
					
					{/* Login link */}
					<div className="flex-1">
						<p>
							Already have an account?{' '}
							<NavLink to="/login" className="text-blue-500">
								Login
							</NavLink>
						</p>
					</div>

				</form>
			</div>
		</div>
	);
}

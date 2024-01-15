import React, { useState } from 'react';

function Account() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [description, setDescription] = useState('');
	const [facebookProfile, setFacebookProfile] = useState('');
	const [twitterProfile, setTwitterProfile] = useState('');
	const [linkedinProfile, setLinkedinProfile] = useState('');
	const [youtubeProfile, setYoutubeProfile] = useState('');

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
	};

	return (
		<div className="bg-gray-100 pt-6 mt-8">
			<h1 className="text-[16px] font-bold mb-4">Your Cursus Account</h1>
			<p className="text-[12px] text-gray-400">
				This is your public presence on Cursus. You need a account to
				upload your paid courses, comment on courses, purchased by
				students, or earning.
			</p>
			<h1 className="text-[14px] font-bold mb-4">Basic Profile</h1>
			<p className="text-[12px] text-gray-400">
				Add information about yourself
			</p>
			<form onSubmit={handleSubmit}>
				<div className="flex space-x-6">
					<div className="mb-4">
						<input
							type="text"
							id="firstName"
							className="w-full border rounded-full py-2 px-3 focus:outline-none focus:ring focus:border-orange-300"
							value={firstName}
							placeholder="Felix"
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className="mb-4">
						<input
							type="text"
							id="lastName"
							className="w-full border rounded-full py-2 px-3 focus:outline-none focus:ring focus:border-orange-300"
							value={lastName}
							placeholder="orinda"
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
				</div>

				<div className="mb-4">
					<textarea
						id="description"
						className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-orange-300"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<h2 className="text-xl font-semibold mb-2">Profile Links</h2>
				<div className="mb-4">
					<input
						type="text"
						id="facebookProfile"
						placeholder="Facebook Profile:"
						className="w-full border rounded-full py-2 px-3 focus:outline-none focus:ring focus:border-orange-300"
						value={facebookProfile}
						onChange={(e) => setFacebookProfile(e.target.value)}
					/>
				</div>
				<div className="mb-4">
					<input
						type="text"
						id="twitterProfile"
						placeholder="witter Profile"
						className="w-full border rounded-full py-2 px-3 focus:outline-none focus:ring focus:border-orange-300"
						value={twitterProfile}
						onChange={(e) => setTwitterProfile(e.target.value)}
					/>
				</div>
				<div className="mb-4">
					<input
						type="text"
						id="linkedinProfile"
						placeholder="Linkedin Profile"
						className="w-full border rounded-full py-2 px-3 focus:outline-none focus:ring focus:border-orange-300"
						value={linkedinProfile}
						onChange={(e) => setLinkedinProfile(e.target.value)}
					/>
				</div>
				<div className="mb-4">
					<input
						type="text"
						id="youtubeProfile"
						placeholder="youtubeProfile"
						className="w-full border rounded-full py-2 px-3 focus:outline-none focus:ring focus:border-orange-300"
						value={youtubeProfile}
						onChange={(e) => setYoutubeProfile(e.target.value)}
					/>
				</div>
				<div>
					<button
						type="submit"
						className="bg-primary text-white py-2 px-4 rounded-full hover:bg-orange-700 focus:outline-none focus:ring focus:border-orange-300"
					>
						Save Changes
					</button>
				</div>
			</form>
		</div>
	);
}

export default Account;

import ProfileTab from './student-profile/ProfileTab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faLinkedinIn,
	faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
function StudentDashboardProfile() {
	return (
		<div>
			<div className="bg-neutral-800 m-auto w-full  flex flex-row justify-center items-center space-x-8 h-[300px]">
				<div className="flex flex-col space-y-3 justify-start">
					<div className="flex flex-row space-x-3 justify-start">
						<div className="w-[100px] h-[100px] rounded-full bg-white">
							<img className="w-8 h-8" />
						</div>
						<div className="flex flex-col text-white">
							<p className="text-white text-center text-2xl">
								John doe
							</p>
							<p className="text-white text-center text-2xl">
								Graphic Designer
							</p>
						</div>
					</div>
					<div className="">
						<table>
							<thead>
								<tr>
									<th
										scope="col"
										className="px-6 py-3 text-white"
									>
										Purchases
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-white"
									>
										Subscription
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-white"
									>
										Certificates
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-white"
									>
										Reviews
									</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td className="px-6 text-white  py-4">
										10
									</td>
									<td className="px-6 py-4 text-white">10</td>

									<td className="px-6 py-4 text-white">10</td>

									<td className="px-6 py-4 text-white">10</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className=" flex flex-col p-2 space-y-3 justify-end ">
					<div className="flex flex-row space-x-2">
						<FontAwesomeIcon
							className="text-white text-xl"
							icon={faStethoscope}
						/>
						<span className="text-2xl text-white">Setting</span>
					</div>
					<div className="flex flex-row space-x-2">
						<a href="">
							<FontAwesomeIcon
								className="text-2xl"
								icon={faXTwitter}
							/>
						</a>
						<a href="">
							<FontAwesomeIcon
								className="text-2xl text-blue-600"
								icon={faFacebook}
							/>
						</a>
						<a href="">
							<FontAwesomeIcon
								className="text-2xl"
								icon={faLinkedinIn}
							/>
						</a>
						<a href="">
							<FontAwesomeIcon
								className="text-2xl text-red-600"
								icon={faYoutube}
							/>
						</a>
					</div>
				</div>
			</div>
			<ProfileTab />
		</div>
	);
}

export default StudentDashboardProfile;

import {
	faHeart,
	faThumbsDown,
	faThumbsUp
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Discussion() {
	return (
		<div className="p-2 flex flex-col">
			<div>
				<h2>Discussion</h2>
			</div>
			<div className="flex flex-col space-y-2">
				<div className="flex flex-row space-x-1">
					<img
						className="h-8 w-8 rounded-full"
						src="https://images.unsplash.com/photo-1705397290310-98a9dd4d6a54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Jese image"
					/>
					<textarea
						className="w-full h-24 rounded-md p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
						placeholder="Write a comment..."
					></textarea>
				</div>
				<div className="flex justify-end">
					<button className="bg-primary text-white text-xl  px-4 py-2 rounded-full">
						Comment
					</button>
				</div>
			</div>
			<div className="flex items-start gap-2.5">
				<img
					className="h-8 w-8 rounded-full"
					src="https://images.unsplash.com/photo-1705397290310-98a9dd4d6a54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Jese image"
				/>
				<div className="flex flex-col gap-2.5">
					<div className="flex items-center space-x-2 rtl:space-x-reverse">
						<span className="text-sm font-semibold text-gray-900 dark:text-white">
							John Doe
						</span>
						<span className="text-sm font-normal text-gray-500 dark:text-gray-400">
							2 hours ago
						</span>
					</div>
					<div className="leading-1.5 flex w-full max-w-[320px] flex-col">
						<p className="text-[12px] text-gray-400">
							Nam gravida elit a velit rutrum, eget dapibus ex
							elementum. Interdum et malesuada fames ac ante ipsum
							primis in faucibus. Fusce lacinia, nunc sit amet
							tincidunt venenatis.
						</p>
						<div className="flex flex-row space-x-2">
							<div className="flex flex-row space-x-2">
								<FontAwesomeIcon icon={faThumbsUp} />
								<span>2</span>
							</div>
							<div className="flex flex-row space-x-2">
								<FontAwesomeIcon icon={faThumbsDown} />
								<span>1</span>
							</div>
							<div className="flex flex-row space-x-2">
								<FontAwesomeIcon icon={faHeart} />
							</div>
							<div className="flex flex-row space-x-2">
								<span>Reply</span>
							</div>
						</div>
					</div>
					<hr className="text-gray-400" />
					<div className="flex items-start bg-gray-50 dark:bg-gray-700 rounded-xl p-2">
						<img
							className="h-8 w-8 rounded-full"
							src="https://images.unsplash.com/photo-1705397290310-98a9dd4d6a54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Jese image"
						/>
						<div className="flex flex-col gap-2.5">
							<div className="flex items-center space-x-2.5">
								<span className="text-sm font-semibold text-gray-900 dark:text-white">
									John Doe
								</span>
								<span className="text-sm font-normal text-gray-500 dark:text-gray-400">
									2 hours ago
								</span>
							</div>
							<div className="leading-1.5 flex w-full max-w-[320px] flex-col">
								<p className="text-[12px] text-gray-400">
									Nam gravida elit a velit rutrum, eget
									dapibus ex elementum. Interdum et malesuada
									fames ac ante ipsum primis in faucibus.
									Fusce lacinia, nunc sit amet tincidunt
									venenatis.
								</p>
								<div className="flex flex-row space-x-2">
									<div className="flex flex-row space-x-2">
										<FontAwesomeIcon icon={faThumbsUp} />
										<span>2</span>
									</div>
									<div className="flex flex-row space-x-2">
										<FontAwesomeIcon icon={faThumbsDown} />
										<span>1</span>
									</div>
									<div className="flex flex-row space-x-2">
										<FontAwesomeIcon icon={faHeart} />
									</div>
									<div className="flex flex-row space-x-2">
										<span>Reply</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<span className="text-sm font-normal text-gray-500 dark:text-gray-400">
						Delivered
					</span>
				</div>
			</div>
		</div>
	);
}

export default Discussion;

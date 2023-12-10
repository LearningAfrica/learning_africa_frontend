export default function AdminCreateSubject() {
	return (
		<div className="w-full p-10 min-h-screen flex items-center gap-4 flex-col">
			<form
				action=""
				className="w-full max-w-2xl shadow flex flex-col gap-4 px-4 py-8"
			>
				<div>
					<h1 className="text-2xl text-center font-semibold">
						Create a new Subject
					</h1>
				</div>
				<div className="w-full flex flex-col gap-4">
					<label htmlFor="title" className="text-lg">Subject Name</label>
					<input
						type="text"
						name="title"
						className="p-2 w-full border outline-none border-slate-400 rounded"
						placeholder="Enter subject name...."
					/>
				</div>
				<div>
					{/* Submit */}
					<button className="p-2 bg-orange-500 text-white rounded-md w-full">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

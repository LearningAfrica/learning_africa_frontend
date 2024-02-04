const [learning, africa] = [
	['L', 'E', 'A', 'R', 'N', 'I', 'N', 'G'],
	['A', 'F', 'R', 'I', 'C', 'A']
];
const loading = ['L', 'o', 'a', 'd', 'i', 'n', 'g', '.', '.', '.'];

export default function DefaultPageLoad() {
	return (
		<div
			className="flex justify-center items-center h-screen"
			style={{ background: '#f3f4f6' }}
		>
			<div>
				<div className="text-5xl font-bold flex justify-center items-center">
					{learning.map((letter, index) => (
						<span
							key={index}
							className="text-primary-pk animate-ping"
							style={{ animationDelay: `${ index * 0.1 }s` }}
						>
							{letter}
						</span>
					))}
					<span className="text-primary-pk"> </span>
					{africa.map((letter, index) => (
						<span
							key={index}
							className="text-primary-pk animate-ping"
							style={{ animationDelay: `${ index * 0.1 }s` }}
						>
							{letter}
						</span>
					))}
				</div>
				<div className="text-2xl font-bold flex justify-center items-center">
					{loading.map((letter, index) => (
						<span
							key={index}
							className="text-primary-pk animate-pulse"
							style={{ animationDelay: `${ index * 0.1 }s` }}
						>
							{letter}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

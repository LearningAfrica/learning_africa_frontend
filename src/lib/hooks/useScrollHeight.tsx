import React from 'react';

type ScrollHeightOptions = {
	expre: '<=' | '>=' | '===' | '!==' | '<' | '>';
	magnitude: number;
	from: 'top' | 'bottom';
};

export function useScrollHeight(
	magnitude: number,
	options: ScrollHeightOptions
) {
	const [scrollHeight, setScrollHeight] = React.useState(0);

	React.useEffect(() => {
		const handleScroll = () => {
			const scroll =
				options.from === 'top'
					? window.scrollY
					: window.innerHeight + window.scrollY;
			setScrollHeight(scroll);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return {
		scrollHeight,
		isScroll: eval(`${scrollHeight} ${options.expre} ${magnitude}`) as boolean,
		bottom: options.from === 'bottom' ? scrollHeight : undefined
	};
}

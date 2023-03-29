import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const useScrollPosition = (): [number, Dispatch<SetStateAction<number>>] => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return [scrollPosition, setScrollPosition];
};

export default useScrollPosition;

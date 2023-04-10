import { useEffect, useState } from 'react';

const useDarkModePreference = (): 'dark' | 'light' => {
	const getCurrentBrowserColor = (): 'dark' | 'light' => {
		if (
			typeof window !== 'undefined' &&
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			return 'dark';
		}
		return 'light';
	};

	const [mode, setMode] = useState(getCurrentBrowserColor());

	useEffect(() => {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (event) => {
				const colorScheme = event.matches ? 'dark' : 'light';
				setMode(colorScheme);
			});
	}, []);

	return mode;
};

export default useDarkModePreference;

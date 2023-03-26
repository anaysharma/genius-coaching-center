import { useEffect, useState } from 'react';

const getDarkModePreference = (): string => {
	const getCurrentBrowserColor = () => {
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			return 'dark';
		} else {
			return 'light';
		}
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

export default getDarkModePreference;

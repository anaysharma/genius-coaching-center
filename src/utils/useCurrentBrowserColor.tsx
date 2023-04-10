import { useEffect, useState } from 'react';

const useCurrentBrowserColor = (): 'dark' | 'light' => {
	const [mode, setMode] = useState<'dark' | 'light'>('light');

	useEffect(() => {
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		)
			setMode('dark');
		else setMode('light');
	}, []);

	return mode;
};

export default useCurrentBrowserColor;

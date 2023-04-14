import { useEffect, useState } from "react";
import useCurrentBrowserColor from "./useCurrentBrowserColor";

const useDarkModePreference = (): "dark" | "light" => {
	const [mode, setMode] = useState(useCurrentBrowserColor());

	useEffect(() => {
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", (event) => {
				const colorScheme = event.matches ? "dark" : "light";
				setMode(colorScheme);
			});
	}, []);

	return mode;
};

export default useDarkModePreference;

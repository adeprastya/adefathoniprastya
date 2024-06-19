import { createContext, useEffect, useState } from "react";

export const appStateContext = createContext();

export default function AppStateProvider({ children }) {
	const [appState, setAppState] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
		isMobile: 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.userAgent.includes("Mobi")
	});

	const handleResize = () => {
		setAppState((prev) => ({
			...prev,
			width: window.innerWidth,
			height: window.innerHeight
		}));
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	return <appStateContext.Provider value={{ appState, setAppState }}>{children}</appStateContext.Provider>;
}

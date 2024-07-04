import { createContext, useEffect, useState } from "react";

export const appStateContext = createContext();

const init = {
	width: window.innerWidth,
	height: window.innerHeight,
	isMobile: "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.userAgent.includes("Mobi"),
	content: {
		intro: true
	}
};

export default function AppStateProvider({ children }) {
	const [appState, setAppState] = useState(init);

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

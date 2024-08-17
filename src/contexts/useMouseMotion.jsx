import { createContext, useContext, useEffect } from "react";
import { useMotionValue } from "framer-motion";

const MouseMotionContext = createContext();

export function MouseMotionProvider({ children }) {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	useEffect(() => {
		const handleMousePosition = (e) => {
			mouseX.set(e.clientX);
			mouseY.set(e.clientY);
		};

		window.addEventListener("mousemove", handleMousePosition);

		return () => {
			window.removeEventListener("mousemove", handleMousePosition);
		};
	}, []);

	return <MouseMotionContext.Provider value={{ mouseX, mouseY }}>{children}</MouseMotionContext.Provider>;
}

export default function useMouseMotion() {
	return useContext(MouseMotionContext);
}

import { createContext, useContext, useEffect } from "react";
import { useMotionValue } from "framer-motion";

const MousePositionValue = createContext();

export function MousePositionValueProvider({ children }) {
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

	return <MousePositionValue.Provider value={{ mouseX, mouseY }}>{children}</MousePositionValue.Provider>;
}

export default function useMousePositionValue() {
	return useContext(MousePositionValue);
}

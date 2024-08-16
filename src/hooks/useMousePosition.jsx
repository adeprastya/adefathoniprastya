import { useState, useEffect } from "react";
import { isMobile } from "@/utils/helper";

export default function useMousePosition() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		if (isMobile()) return;

		const handleMousePosition = (event) => {
			setMousePosition({ x: window.innerWidth / 2 - event.clientX, y: window.innerHeight / 2 - event.clientY });
		};

		window.addEventListener("mousemove", handleMousePosition);

		return () => {
			window.removeEventListener("mousemove", handleMousePosition);
		};
	}, []);

	return mousePosition;
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (event) => setMousePosition({ x: event.clientX, y: event.clientY });

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);

		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const cursorStyle = {
		top: mousePosition.y,
		left: mousePosition.x,
		width: "calc(5vw + 40px)",
		height: "calc(5vw + 40px)",
		transform:
			mousePosition.x > 0 && mousePosition.y > 0 ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0)"
	};

	return (
		<motion.div
			style={cursorStyle}
			className="z-50 fixed rounded-full backdrop-invert pointer-events-none transition-transform duration-1000"
		/>
	);
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event) => setMousePosition({ x: event.clientX, y: event.clientY });

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const cursorStyle = {
		position: "fixed",
		top: mousePosition.y - 12.5,
		left: mousePosition.x - 12.5,
		width: "25px",
		height: "25px",
		backgroundColor: "rgba(0, 0, 0, 0.7)",
		borderRadius: "50%",
		pointerEvents: "none",
		zIndex: 9999,
		mixBlendMode: "difference"
	};

	return <motion.div style={cursorStyle} />;
}

import { useState, useEffect, useContext } from "react";
import { appStateContext } from "../context/AppStateContext";

export default function Cursor() {
	const { appState } = useContext(appStateContext);
	const [mouse, setMouse] = useState({ x: 0, y: 0, isInWindow: false });

	const handleMouseMove = (event) => {
		setMouse((prev) => ({
			...prev,
			x: event.clientX,
			y: event.clientY,
			isInWindow:
				event.clientX > 10 &&
				event.clientY > 10 &&
				event.clientX < appState.width - 10 &&
				event.clientY < appState.height - 10
		}));
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const cursorStyle = {
		top: mouse.y,
		left: mouse.x,
		width: "calc(5vw + 40px)",
		height: "calc(5vw + 40px)",
		transform:
			mouse.isInWindow && !appState.isMobile ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0)"
	};

	return (
		<div
			style={cursorStyle}
			className="z-50 fixed rounded-full backdrop-invert pointer-events-none transition-transform"
		/>
	);
}

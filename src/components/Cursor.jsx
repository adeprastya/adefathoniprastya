import { useState, useEffect, useContext } from "react";
import { appStateContext } from "../context/AppStateContext";

export default function Cursor({ element }) {
	const { appState } = useContext(appStateContext);
	const [mouse, setMouse] = useState({
		x: 0,
		y: 0,
		isInWindow: false,
		isHovering: false
	});

	const handleMouseMove = (event) => {
		setMouse((prev) => ({
			...prev,
			x: event.clientX,
			y: event.clientY,
			isInWindow:
				event.clientX > 20 &&
				event.clientY > 20 &&
				event.clientX < appState.width - 20 &&
				event.clientY < appState.height - 20
		}));
	};

	const handleMouseEnter = () => {
		setMouse((prev) => ({
			...prev,
			isHovering: true
		}));
	};

	const handleMouseLeave = () => {
		setMouse((prev) => ({
			...prev,
			isHovering: false
		}));
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);

		if (element.current) {
			element.current.addEventListener("mouseenter", handleMouseEnter);
			element.current.addEventListener("mouseleave", handleMouseLeave);
		}

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);

			if (element.current) {
				element.current.removeEventListener("mouseenter", handleMouseEnter);
				element.current.removeEventListener("mouseleave", handleMouseLeave);
			}
		};
	}, []);

	const sty = {
		base: `after:rounded-full after:backdrop-invert ${mouse.isInWindow ? "after:scale-1" : "after:scale-0"}`,
		hover: `after:rounded-full after:box-border after:border-[1px] after:border-x-blue-600 after:border-y-sky-600 ${
			mouse.isInWindow ? "after:scale-1" : "after:scale-0"
		} before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full before:bg-blue-100 before:min-w-[3px] before:min-h-[3px] ${
			mouse.isInWindow ? "before:scale-1" : "before:scale-0"
		}`
	};

	return (
		<div
			style={{ top: mouse.y, left: mouse.x }}
			className={`w-28 h-28 sm:w-36 sm:h-36 xl:w-44 xl:h-44 z-50 fixed -translate-x-[50%] -translate-y-[50%] pointer-events-none after:absolute after:top-0 after:left-0 after:w-full after:h-full after:transition-all after:duration-500 ${
				mouse.isHovering ? sty.hover : sty.base
			}`}
		/>
	);
}

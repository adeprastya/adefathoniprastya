import { useState, useEffect, useContext, isValidElement } from "react";
import { appStateContext } from "@/context/AppStateContext";

const mouseInit = {
	x: 0,
	y: 0,
	inWindow: false,
	isHovering: false,
	customEl: "DEFAULT"
};

export default function Cursor({ hovers }) {
	const { appState } = useContext(appStateContext);
	const [mouse, setMouse] = useState(mouseInit);

	const handleMouseMove = (event) => {
		setMouse((prev) => ({
			...prev,
			x: event.clientX,
			y: event.clientY,
			inWindow:
				event.clientX > 20 &&
				event.clientY > 20 &&
				event.clientX < appState.width - 20 &&
				event.clientY < appState.height - 20
		}));
	};

	const handleMouseEnter = (customEl) => () => {
		setMouse((prev) => ({
			...prev,
			isHovering: true,
			customEl: customEl
		}));
	};

	const handleMouseLeave = () => {
		setMouse((prev) => ({
			...prev,
			isHovering: false,
			customEl: "DEFAULT"
		}));
	};

	// mousemove event
	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	// mouseenter/mouseleave events
	useEffect(() => {
		if (Array.isArray(hovers) && hovers.length > 0) {
			hovers.forEach(([element, customEl]) => {
				if (element) {
					element.addEventListener("mouseenter", handleMouseEnter(customEl));
					element.addEventListener("mouseleave", handleMouseLeave);
				}
			});
		}

		return () => {
			if (Array.isArray(hovers) && hovers.length > 0) {
				hovers.forEach(([element, customEl]) => {
					if (element) {
						element.removeEventListener("mouseenter", handleMouseEnter(customEl));
						element.removeEventListener("mouseleave", handleMouseLeave);
					}
				});
			}
		};
	}, [hovers]);

	const renderElement = () => {
		switch (mouse.customEl) {
			case "DEFAULT":
				return <CursorDefault />;
			case "HIDDEN":
				return <CursorHidden />;
			case "HOVER":
				return <CursorHover />;
			default:
				if (isValidElement(mouse.customEl)) return mouse.customEl;
				throw new Error("Invalid cursor element");
		}
	};

	return (
		<div
			style={{
				pointerEvents: "none",
				zIndex: 999,
				position: "fixed",
				top: mouse.y,
				left: mouse.x,
				transform: `translate(-50%, -50%) ${mouse.inWindow ? "scale(1)" : "scale(0)"}`,
				transition: "transform 0.5s ease"
			}}
		>
			{renderElement()}
		</div>
	);
}

function CursorHidden() {
	return <></>;
}

function CursorDefault() {
	return <div className="w-28 h-28 sm:w-36 sm:h-36 xl:w-44 xl:h-44 rounded-full backdrop-invert"></div>;
}

function CursorHover() {
	return (
		<div className="w-28 h-28 sm:w-36 sm:h-36 xl:w-44 xl:h-44 box-border rounded-full border-[1px] border-x-yellow-400 border-y-orange-300 after:absolute after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:rounded-full after:bg-yellow-200 after:min-w-[3px] after:min-h-[3px]"></div>
	);
}

import { useState, useEffect, useContext, isValidElement } from "react";
import { appStateContext } from "@/context/AppStateContext";
import { motion, useSpring } from "framer-motion";

const mouseInit = {
	x: 0,
	y: 0,
	inWindow: false,
	isHovering: false,
	customEl: "DEFAULT"
};

const springConfig = {
	damping: 10,
	stiffness: 50
};

export default function Cursor({ hovers }) {
	const { appState } = useContext(appStateContext);
	const [mouse, setMouse] = useState(mouseInit);
	const springX = useSpring(0, springConfig);
	const springY = useSpring(0, springConfig);

	// mousemove event
	useEffect(() => {
		if (appState.isMobile) return;

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

			springX.set(event.clientX);
			springY.set(event.clientY);
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	// mouseenter/mouseleave events
	useEffect(() => {
		if (appState.isMobile) return;

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

	const vars = {
		sty: {
			pointerEvents: "none",
			zIndex: 999,
			position: "fixed",
			top: springY,
			left: springX
		},
		hidden: {
			x: "-50%",
			y: "-50%",
			scale: 0
		},
		visible: {
			x: "-50%",
			y: "-50%",
			scale: 1
		},
		transition: {
			duration: 0.3,
			ease: "easeInOut"
		}
	};

	return (
		<>
			<motion.div
				style={vars.sty}
				variants={vars}
				initial="hidden"
				animate={mouse.inWindow ? "visible" : "hidden"}
				transition={vars.transition}
			>
				{renderElement()}
			</motion.div>
			<motion.div
				style={{ ...vars.sty, top: mouse.y, left: mouse.x }}
				variants={vars}
				initial="hidden"
				animate={mouse.inWindow ? "visible" : "hidden"}
				transition={vars.transition}
				className="translate-x-[-50%] translate-y-[-50%] w-2 h-2 rounded-full backdrop-invert opacity-50"
			/>
		</>
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
		<div className="w-28 h-28 sm:w-36 sm:h-36 xl:w-44 xl:h-44 box-border rounded-full border-[1px] border-x-yellow-400 border-y-orange-300"></div>
	);
}

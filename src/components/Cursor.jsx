import { useState, useEffect, useContext, isValidElement } from "react";
import { appStateContext } from "@/context/AppStateContext";
import { motion, AnimatePresence, useSpring } from "framer-motion";

const MOUSE_INIT = {
	x: 0,
	y: 0,
	inWindow: false,
	isHovering: false,
	customEl: "DEFAULT"
};

const SPRING_CONFIG = {
	damping: 10,
	stiffness: 50
};

const CURSOR_TYPES = {
	DEFAULT: "DEFAULT",
	HIDDEN: "HIDDEN",
	OUTLINE: "OUTLINE"
};

const CursorHidden = () => <></>;

const CursorDefault = () => (
	<div className="w-28 h-28 sm:w-36 sm:h-36 xl:w-44 xl:h-44 rounded-full backdrop-invert"></div>
);

const CursorOutline = () => (
	<div className="w-28 h-28 sm:w-36 sm:h-36 xl:w-44 xl:h-44 box-border rounded-full border-[1px] border-x-yellow-400 border-y-orange-300"></div>
);

const cursorComponents = {
	[CURSOR_TYPES.DEFAULT]: CursorDefault,
	[CURSOR_TYPES.HIDDEN]: CursorHidden,
	[CURSOR_TYPES.OUTLINE]: CursorOutline
};

const addHoverListeners = (hovers, handleMouseEnter, handleMouseLeave) => {
	hovers.forEach(([element, customEl]) => {
		if (element) {
			element.addEventListener("mouseenter", handleMouseEnter(customEl));
			element.addEventListener("mouseleave", handleMouseLeave);
		}
	});
};

const removeHoverListeners = (hovers, handleMouseEnter, handleMouseLeave) => {
	hovers.forEach(([element]) => {
		if (element) {
			element.removeEventListener("mouseenter", handleMouseEnter);
			element.removeEventListener("mouseleave", handleMouseLeave);
		}
	});
};

export default function Cursor({ hovers }) {
	const { appState } = useContext(appStateContext);
	const [mouse, setMouse] = useState(MOUSE_INIT);
	const springX = useSpring(appState.width / 2, SPRING_CONFIG);
	const springY = useSpring(appState.height / 2, SPRING_CONFIG);

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
	}, [appState.isMobile, appState.width, appState.height, springX, springY]);

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
				customEl: CURSOR_TYPES.DEFAULT
			}));
		};

		if (Array.isArray(hovers) && hovers.length > 0) {
			addHoverListeners(hovers, handleMouseEnter, handleMouseLeave);
		}

		return () => {
			if (Array.isArray(hovers) && hovers.length > 0) {
				removeHoverListeners(hovers, handleMouseEnter, handleMouseLeave);
			}
		};
	}, [hovers, appState.isMobile]);

	const renderElement = () => {
		const CustomCursor = cursorComponents[mouse.customEl];
		if (CustomCursor) {
			return <CustomCursor />;
		}
		if (isValidElement(mouse.customEl)) return mouse.customEl;
		throw new Error("Invalid cursor element");
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
			duration: 0.2,
			ease: "easeInOut"
		}
	};

	return (
		<>
			<AnimatePresence>
				<motion.div
					key={mouse.customEl}
					style={vars.sty}
					variants={vars}
					initial="hidden"
					animate={mouse.inWindow ? "visible" : "hidden"}
					exit="hidden"
					transition={vars.transition}
				>
					{renderElement()}
				</motion.div>
			</AnimatePresence>
			<motion.div
				style={{ ...vars.sty, top: mouse.y, left: mouse.x }}
				variants={vars}
				initial="hidden"
				animate={mouse.inWindow ? "visible" : "hidden"}
				transition={vars.transition}
				className="translate-x-[-50%] translate-y-[-50%] w-2 h-2 rounded-full backdrop-invert"
			/>
		</>
	);
}

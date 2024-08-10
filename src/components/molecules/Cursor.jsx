import { useState, useEffect, useCallback, isValidElement } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { isMobile } from "@/utils/commonHelper";

const MOUSE_INIT = {
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

const vars = {
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

export default function Cursor({ hovers = [] }) {
	const [mouse, setMouse] = useState(() => MOUSE_INIT);
	const x = useMotionValue(window.innerWidth / 2);
	const y = useMotionValue(window.innerHeight / 2);
	const springX = useSpring(x, SPRING_CONFIG);
	const springY = useSpring(y, SPRING_CONFIG);

	const handleMouseMove = useCallback(
		(e) => {
			setMouse((prev) => ({
				...prev,
				inWindow:
					e.clientX > 20 && e.clientY > 20 && e.clientX < window.innerWidth - 20 && e.clientY < window.innerHeight - 20
			}));

			x.set(e.clientX);
			y.set(e.clientY);
		},
		[x, y]
	);

	const handleMouseEnter = useCallback(
		(customEl) => () => {
			setMouse((prev) => ({
				...prev,
				isHovering: true,
				customEl: customEl
			}));
		},
		[]
	);

	const handleMouseLeave = useCallback(() => {
		setMouse((prev) => ({
			...prev,
			isHovering: false,
			customEl: CURSOR_TYPES.DEFAULT
		}));
	}, []);

	const renderElement = useCallback(() => {
		const CustomCursor = cursorComponents[mouse.customEl];

		if (CustomCursor) {
			return <CustomCursor />;
		}

		if (isValidElement(mouse.customEl)) {
			return mouse.customEl;
		}

		throw new Error("Invalid cursor element");
	}, [mouse.customEl]);

	// Calculating mouse position and mouse is in window
	useEffect(() => {
		if (isMobile()) return;

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [handleMouseMove]);

	// Adding and removing hovers listeners
	useEffect(() => {
		if (isMobile()) return;

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
				hovers.forEach(([element]) => {
					if (element) {
						element.removeEventListener("mouseenter", handleMouseEnter);
						element.removeEventListener("mouseleave", handleMouseLeave);
					}
				});
			}
		};
	}, [hovers, handleMouseEnter, handleMouseLeave]);

	return (
		<>
			{/* Custom cursor */}
			<AnimatePresence>
				<motion.div
					key={mouse.customEl}
					style={{ translateY: springY, translateX: springX }}
					variants={vars}
					initial="hidden"
					animate={mouse.inWindow ? "visible" : "hidden"}
					exit="hidden"
					transition={vars.transition}
					className="transform-gpu pointer-events-none z-[999] fixed top-0 left-0"
				>
					{renderElement()}
				</motion.div>
			</AnimatePresence>

			{/* Main cursor */}
			<motion.div
				style={{ translateY: y, translateX: x }}
				variants={vars}
				initial="hidden"
				animate={mouse.inWindow ? "visible" : "hidden"}
				transition={vars.transition}
				className="transform-gpu pointer-events-none z-[999] fixed top-0 left-0 w-2 h-2 rounded-full backdrop-invert"
			/>
		</>
	);
}

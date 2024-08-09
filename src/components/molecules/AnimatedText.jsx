import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const vars = {
	hidden: { top: "-40%", opacit: 0, rotateX: 90 },
	visible: { top: 0, opacit: 1, rotateX: 0 },
	exit: { top: "40%", opacit: 0, rotateX: 90 },
	transition: (i) => ({ delay: i * 0.2, duration: 0.5, ease: "easeInOut" })
};

export default function AnimatedText({ textArr, textStyle }) {
	const [texts] = useState(() => textArr);
	const [maxTextLength, setMaxTextLength] = useState(0);
	const [text, setText] = useState("");
	const index = useRef(0);

	// Get text length
	useEffect(() => {
		if (texts.length > 0) {
			let maxLength = texts.reduce((max, text) => Math.max(max, text.length), 0);
			setMaxTextLength(maxLength);
			setText(texts[0]);
		}
	}, [texts]);

	// Text index increment
	useEffect(() => {
		const increment = setInterval(() => {
			index.current = (index.current + 1) % texts.length;
			setText(texts[index.current]);
		}, 4500);

		return () => clearInterval(increment);
	}, [texts]);

	return (
		<span className="grid grid-flow-col">
			{Array.from({ length: maxTextLength }).map((_, i) => (
				<AnimatePresence mode="wait" key={i}>
					<motion.span
						key={i + text}
						variants={vars}
						initial="hidden"
						animate="visible"
						exit="exit"
						transition={vars.transition(i)}
						className={textStyle + " relative"}
					>
						{text[i] || ""}
					</motion.span>
				</AnimatePresence>
			))}
		</span>
	);
}

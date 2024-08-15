import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const vars = {
	hidden: {
		translateY: "-25%",
		opacity: 0,
		filter: "blur(20px)"
	},
	visible: {
		translateY: 0,
		opacity: 1,
		filter: "blur(0)"
	},
	exit: {
		translateY: "25%",
		opacity: 0,
		filter: "blur(20px)"
	},
	transition: (i) => ({
		delay: i * 0.1,
		duration: 0.4,
		ease: "linear"
	})
};

export default function AlternatingTexts({ children, textStyle }) {
	const [texts] = useState(children.split(","));
	const [text, setText] = useState(texts[0]);
	const index = useRef(0);

	// Text index increment
	useEffect(() => {
		const interval = setInterval(() => {
			index.current += 1;
			setText(texts[index.current % texts.length]);
		}, 5000);

		return () => clearInterval(interval);
	}, [texts]);

	return (
		<AnimatePresence mode="wait">
			<span key={index.current}>
				{Array.from(text).map((t, i) => (
					<motion.span
						key={i}
						variants={vars}
						initial="hidden"
						animate="visible"
						exit="exit"
						transition={vars.transition(i)}
						className={`${textStyle} inline-block transform-gpu`}
					>
						{t}
					</motion.span>
				))}
			</span>
		</AnimatePresence>
	);
}

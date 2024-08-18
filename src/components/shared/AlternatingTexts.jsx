import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "@/utils/helper";

const vars = {
	hidden: {
		y: "-25%",
		opacity: 0,
		filter: "blur(20px)"
	},
	visible: {
		y: 0,
		opacity: 1,
		filter: "blur(0)"
	},
	exit: {
		y: "25%",
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
	const texts = useRef(children.split(", "));
	const [index, setIndex] = useState(0);
	const indexWrapper = wrap(0, texts.current.length);

	// Index increment
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => indexWrapper(prev + 1));
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<AnimatePresence mode="wait">
			<span key={index}>
				{Array.from(texts.current[index]).map((t, i) => (
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

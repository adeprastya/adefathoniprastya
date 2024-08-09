import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedText({ textArray, textStyle }) {
	const [texts] = useState(textArray);
	const [textLength, setTextLength] = useState(0);
	const [text, setText] = useState("");
	const index = useRef(0);

	// Get text length
	useEffect(() => {
		if (texts.length > 0) {
			let maxLength = texts.reduce((max, text) => Math.max(max, text.length), 0);
			setTextLength(maxLength);
			setText(texts[0]);
		}
	}, [texts]);

	// Text index increment
	useEffect(() => {
		const interval = setInterval(() => {
			index.current = (index.current + 1) % texts.length;

			setText(texts[index.current]);
		}, 4500);

		return () => clearInterval(interval);
	}, [texts]);

	return (
		<h1 className="grid grid-flow-col">
			{Array.from({ length: textLength }).map((_, i) => (
				<AnimatePresence mode="wait" key={i}>
					<motion.div
						key={i + text}
						initial={{ top: "-40%", opacit: 0, rotateX: 90 }}
						animate={{ top: 0, opacit: 1, rotateX: 0 }}
						exit={{ top: "40%", opacit: 0, rotateX: -90 }}
						transition={{ delay: i * 0.2, duration: 0.5, ease: "easeInOut" }}
						className={textStyle + " relative inline-block"}
					>
						{text[i] || ""}
					</motion.div>
				</AnimatePresence>
			))}
		</h1>
	);
}

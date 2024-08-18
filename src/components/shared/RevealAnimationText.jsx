import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const vars = {
	initial: {
		translateY: "100%"
	},
	animate: {
		translateY: "0%"
	},
	transition: (i) => ({
		delay: i * 0.05,
		duration: 0.8,
		ease: "easeInOut"
	})
};

export default function RevealAnimationText({ children, className }) {
	const texts = children.split(" ");
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.5 });

	return (
		<span ref={ref}>
			{Array.from(texts).map((text, i) => (
				<span key={i} className="inline-block overflow-clip me-4">
					<motion.span
						variants={vars}
						animate={isInView ? "animate" : "initial"}
						transition={vars.transition(i)}
						className={`inline-block ${className}`}
					>
						{text}
					</motion.span>
				</span>
			))}
		</span>
	);
}

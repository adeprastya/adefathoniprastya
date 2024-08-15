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
	const ref = useRef();
	const isInView = useInView(ref, { amount: "all" });

	return (
		<span ref={ref}>
			{Array.from(texts).map((t, i) => (
				<span key={i} className="inline-block overflow-hidden me-3">
					<motion.span
						variants={vars}
						animate={isInView ? "animate" : "initial"}
						transition={vars.transition(i)}
						className={`inline-block ${className}`}
					>
						{t}
					</motion.span>
				</span>
			))}
		</span>
	);
}

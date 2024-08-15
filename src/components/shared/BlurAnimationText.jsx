import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const vars = {
	initial: {
		translateY: "-25%",
		opacity: 0,
		filter: "blur(20px)"
	},
	animate: {
		translateY: 0,
		opacity: 1,
		filter: "blur(0px)"
	},
	transition: (i) => ({
		delay: i * 0.02,
		duration: 0.6,
		ease: "easeInOut"
	})
};

export default function BlurAnimationText({ children, className }) {
	const ref = useRef();
	const isInView = useInView(ref, { amount: "all" });

	return (
		<span ref={ref}>
			{Array.from(children).map((t, i) => (
				<motion.span
					key={i}
					variants={vars}
					animate={isInView ? "animate" : "initial"}
					transition={vars.transition(i)}
					className={className}
				>
					{t}
				</motion.span>
			))}
		</span>
	);
}

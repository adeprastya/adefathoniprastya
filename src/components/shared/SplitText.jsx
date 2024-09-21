import { motion } from "framer-motion";

export function SplitTextChar({ children, className, wrap = false, wrapClassName, ...props }) {
	const texts = children.split("");

	return (
		<span>
			{wrap &&
				texts.map((text, i) => (
					<motion.span key={i} className={"inline-block " + wrapClassName}>
						<motion.span custom={i} className={"inline-block " + className} {...props}>
							{text}
						</motion.span>
					</motion.span>
				))}

			{!wrap &&
				texts.map((text, i) => (
					<motion.span key={i} custom={i} className={"inline-block " + className} {...props}>
						{text}
					</motion.span>
				))}
		</span>
	);
}

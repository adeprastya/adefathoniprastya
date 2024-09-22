import { isValidElement, cloneElement } from "react";
import { motion } from "framer-motion";

export function SplitTextChar({ children, wrapper, ...props }) {
	const texts = children.split("");

	return (
		<span>
			{texts.map((text, i) => {
				const motionElement = (
					<motion.span data-content={text} key={i} custom={i} {...props}>
						{text}
					</motion.span>
				);

				const clonedWrapper = isValidElement(wrapper)
					? cloneElement(wrapper, { key: i, custom: i }, motionElement)
					: motionElement;

				return clonedWrapper;
			})}
		</span>
	);
}

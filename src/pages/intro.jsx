import Cursor from "../components/Cursor";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

alert("Click to next");

const text = [
	// HTML
	"Hello World, I am on a journey to learn web development from scratch", // 0

	"<p>I remember how I started from basic concepts of <code>HTML</code></p>", // 1

	// CSS
	"Then I began learn CSS and started to learn positioning and layouting", // 2

	"Learning how to style elements for better user interface", // 3

	"Transition, animation and many more...", // 4

	"I also started to learn JavaScript, the most popular programming language", // 5

	// JS
	"Try to move cursor and you will see the power of JavaScript", // 6

	// Framer Motion
	"Even you can drag this sentence around the screen, making it more interactive and engaging", // 7

	"I was excited to learn and commit myself to this journey", // 8

	"However, my passion for mastering this skill has motivated me to keep learning", // 9

	"Thank you for taking the time to read this", // 10

	"Oops, I almost forgot, my name is", // 11

	"Ade Fathoni Prastya" // 12
];

const sty = {
	base: "font-serif",
	style1:
		"font-serif p-10 sm:p-20 xl:p-40 bg-green-300 border-2 border-dashed border-black transition-all duration-1000 *:p-4 *:bg-blue-300 *:border-2 *:border-black *:transition-all *:duration-200",
	style2:
		"box-border w-screen h-screen p-10 sm:p-20 xl:p-40 bg-slate-950 text-slate-50 font-sans font-thin text-center text-xl tracking-wider sm:text-2xl xl:text-4xl transition-all duration-500 *:mt-[calc(50vh-10rem)] *:translate-y-[50%] *:border-none *:bg-slate-950 *:transition-all *:duration-1000",
	style3:
		"box-border w-screen h-screen flex justify-center items-center p-10 sm:p-20 xl:p-40 bg-slate-950 text-slate-50 font-sans font-thin text-center text-xl tracking-wider sm:text-2xl xl:text-4xl transition-all duration-500 *:border-none *:transition-all *:duration-1000 *:animate-fade"
};

export default function Intro() {
	const [index, setIndex] = useState(0);
	const [style, setStyle] = useState(sty.base);
	const [waiting, setWaiting] = useState(false);
	const constraintRef = useRef(null);

	const handleClick = () => {
		if (!waiting) {
			setIndex((prevIndex) => prevIndex + 1);
			setWaiting(true);

			setTimeout(() => {
				setWaiting(false);
			}, 1500);
		}
	};

	useEffect(() => {
		if (index == 2) {
			setStyle(sty.style1);
		}
		if (index == 3) {
			setStyle(sty.style2);
		}
		if (index >= 4) {
			setStyle(sty.style3);
		}
	}, [index]);

	return (
		<div onClick={handleClick} className="w-screen h-screen overflow-hidden">
			{index >= 6 && <Cursor />}

			{index < 7 && (
				<main key={index} className={style}>
					<p>{text[index]}</p>
				</main>
			)}

			{index >= 7 && (
				<motion.main key={index} className={style}>
					<motion.div ref={constraintRef} className="w-12/12 h-12/12">
						<motion.p drag dragConstraints={constraintRef}>
							{text[index]}
						</motion.p>
					</motion.div>
				</motion.main>
			)}
		</div>
	);
}

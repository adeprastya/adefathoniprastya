import Cursor from "../components/Cursor";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// alert("Click to next");

const text = [
	"Hello World, I am on a journey to learn web development from scratch",

	"<p>I remember how I started by learning the basic concepts of <code>HTML</code></p>",

	"Then I began learn CSS and started to learn positioning and layouting",

	"Learning how to style elements for better user interface",

	"Transition, animation and many more...",

	"I also started to learn JavaScript to add more interactivity",

	"I was excited to learn and commit myself to this journey",

	"However, my passion for mastering this skill has motivated me to keep learning",

	"Thank you for taking the time to read this",

	"Oops, I almost forgot, my name is",

	"Ade Fathoni Prastya"
];

const sty = {
	base: "font-serif",
	style1:
		"font-serif p-10 sm:p-20 xl:p-40 bg-green-300 border-2 border-dashed border-black transition-all duration-1000 *:bg-blue-300 *:border-2 *:border-black",
	style2:
		"w-screen h-screen flex justify-center items-center p-10 sm:p-20 xl:p-40 bg-slate-950 text-slate-50 font-sans font-thin text-center text-xl tracking-wider sm:text-2xl xl:text-4xl transition-all duration-500 *:border-none *:bg-slate-950 *:transition-all *:duration-1000",
	style3:
		"w-screen h-screen flex justify-center items-center p-10 sm:p-20 xl:p-40 bg-slate-950 text-slate-50 font-sans font-thin text-center text-xl tracking-wider sm:text-2xl xl:text-4xl transition-all duration-500 *:border-none *:transition-all *:duration-1000 *:animate-fade",
	style4:
		"w-screen h-screen flex justify-center items-center p-10 sm:p-20 xl:p-40 bg-slate-950 text-slate-50 font-sans font-thin text-center text-xl tracking-wider sm:text-2xl xl:text-4xl transition-all duration-500 *:border-none *:transition-all *:duration-1000 *:animate-fade",
};

export default function Intro() {
	const [index, setIndex] = useState(0);
	const [style, setStyle] = useState(sty.base);

	const handleClick = () => setIndex((index) => index + 1);

	useEffect(() => {
		if (index == 2) {
			setTimeout(() => setStyle(sty.style1), 250);
		}
		if (index == 3) {
			setTimeout(() => setStyle(sty.style2), 0);
		}
		if (index == 4) {
			setTimeout(() => setStyle(sty.style3), 0);
		}
		if (index >= 5) {
			setTimeout(() => setStyle(sty.style4), 0);
		}
	}, [index]);

	return (
		<div className="w-screen h-screen" onClick={handleClick}>
			<Cursor />
			<motion.main className={style}>
				<p>{text[index]}</p>
			</motion.main>
		</div>
	);
}

import { useEffect, useState } from "react";

const text = [
	"Hello World!",

	"I am on a journey to learn web development from scratch",

	"I was excited to learn and commit myself to this journey",

	"I remember how I started by learning the basic concepts of HTML",

	"Then I began to learn how to add style with CSS",

	"However, my passion for mastering this skill has motivated me to keep learning",

	"I also started to learn JavaScript to add more interactivity",

	"Thank you for taking the time to read this",

	"Oops, I almost forgot, my name is",

	"Ade Fathoni Prastya"
];

const sty = {
	base: "w-screen h-screen font-serif subpixel-antialiased transition-all duration-1000",
	style1: "w-screen h-screen font-serif subpixel-antialiased transition-all duration-1000 p-10 sm:p-20 xl:p-40",
	style2:
		"w-screen h-screen font-serif subpixel-antialiased transition-all duration-1000 p-10 sm:p-20 xl:p-40 flex justify-center items-center text-center",
	style3:
		"w-screen h-screen subpixel-antialiased transition-all duration-1000 p-10 sm:p-20 xl:p-40 flex justify-center items-center font-sans text-center text-xl tracking-wide sm:text-2xl xl:text-4xl",
	style4:
		"w-screen h-screen subpixel-antialiased transition-all duration-1000 p-10 sm:p-20 xl:p-40 flex justify-center items-center font-sans text-center text-xl tracking-wide sm:text-2xl xl:text-4xl font-light text-slate-50 bg-slate-900"
};

export default function Intro() {
	const [index, setIndex] = useState(0);
	const [style, setStyle] = useState(sty.base);

	const handleClick = () => setIndex((index) => index + 1);

	useEffect(() => {
		if (index >= 1) {
			setTimeout(() => setStyle(sty.style1), 500);
		}
		if (index >= 2) {
			setTimeout(() => setStyle(sty.style2), 500);
		}
		if (index >= 3) {
			setTimeout(() => setStyle(sty.style3), 500);
		}
		if (index >= 4) {
			setTimeout(() => setStyle(sty.style4), 500);
		}
	}, [index]);

	return (
		<main onClick={handleClick} className={style}>
			<p>{text[index]}</p>
		</main>
	);
}

import Cursor from "@/components/Cursor";
import IntroToast from "@/components/IntroToast";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { throttle } from "lodash";
import { useNavigate } from "react-router-dom";

const text = [
	// HTML
	"Hello World, My adventure into the world of web development begins now!", // 0

	"<p>Like a fresh coder cracking open a textbook, I devoured the basic building blocks of <code>HTML</code></p>", // 1

	// CSS
	"Then, CSS entered the scene. I wielded it like a magic wand, conjuring layouts and positioning elements with precision", // 2

	"Like a canvas of possibilities, where colors paint emotions and typography shapes the message", // 3

	"Like a scene-shifter in a play, transitions and animations bring it to life", // 4

	"JavaScript, the superhero. Buckle up and prepare to witness its power!", // 5

	// JS
	"See that cursor? That's just a taste of JavaScript's magic in action", // 6

	// Framer Motion
	"You can even drag this sentence around the screen, JavaScript works its magic without limits", // 7

	"My hunger for knowledge is insatiable, and it fuels me to keep pushing forward", // 8

	"Thanks for lending your eyes to this odyssey", // 9

	"Ooopsss, almost forgot to introduce myself! My name's...", // 10

	"Ade Fathoni Prastya" // 11
];

const sty = {
	container: "w-screen h-screen overflow-hidden",

	base: "font-serif",

	// text 2
	style1:
		"font-serif p-10 sm:p-20 xl:p-40 m-4 sm:m-8 xl:m-16 bg-green-300 border-2 border-dashed border-black transition-all duration-1000     *:before:bg-orange-200 *:before:absolute *:before:top-0 *:before:left-0 *:before:w-full *:before:h-full *:before:-z-10 *:before:transition-all *:before:duration-1000     *:p-2 *:sm:p-4 *:xl:p-8 *:bg-blue-300 *:border-2 *:border-black *:transition-all *:duration-200",

	// text 3
	style2:
		"box-border w-screen h-screen p-10 sm:p-20 xl:p-40 bg-slate-950 text-slate-50 font-cormorant text-center text-4xl tracking-wider sm:text-5xl xl:text-6xl transition-all duration-500     *:mt-[calc(50vh-1rem-8.5vw)] *:-translate-y-[50%] *:border-none *:bg-slate-950 *:transition-all *:duration-1000",

	// text 4
	style3:
		"box-border w-screen h-screen flex justify-center items-center p-10 sm:p-20 xl:p-40 bg-slate-950 text-slate-50 font-cormorant text-center text-4xl tracking-wider sm:text-5xl xl:text-6xl transition-all duration-500     *:inline *:border-none *:transition-all *:duration-1000 *:animate-fade     *:after:content-['...'] *:after:absolute *:after:inline *:after:animate-pulse",

	// text 5
	style4:
		"box-border w-screen h-screen flex justify-center items-center p-10 sm:p-20 xl:p-40 bg-slate-950 text-slate-50 font-cormorant text-center text-4xl tracking-wider sm:text-5xl xl:text-6xl transition-all duration-500     *:border-none *:transition-all *:duration-1000 *:animate-fade      *:first-letter:font-extrabold *:first-letter:text-5xl sm:*:first-letter:text-6xl xl:*:first-letter:text-7xl *:first-letter:text-transparent *:first-letter:bg-clip-text *:first-letter:bg-gradient-to-bl from-yellow-200 to-amber-500 cursor-none",

	// text 11
	style5:
		"box-border w-screen h-screen flex justify-center items-center p-10 sm:p-20 xl:p-40 bg-slate-950 text-slate-50 text-center tracking-wider text-6xl sm:text-7xl xl:text-8xl transition-all duration-500     *:p-5 *:leading-relaxed *:border-none *:transition-all *:duration-1000 *:animate-fade *:text-transparent *:bg-clip-text *:bg-gradient-to-tl from-yellow-200 to-amber-400 cursor-none"
};

const fonts = [
	"font-serif",
	"font-sans",
	"font-caesarDressing",
	"font-cormorant",
	"font-greatVibes",
	"font-monsieurLaDoulaise",
	"font-mysteryQuest",
	"font-tiny5",
	"font-vt323"
];

export default function Intro() {
	const [index, setIndex] = useState(0);
	const [waiting, setWaiting] = useState(false);
	const [style, setStyle] = useState(sty.base);
	const [font, setFont] = useState("font-cormorant");
	const constraintRef = useRef(null);
	const textRef = useRef(null);
	const navigate = useNavigate();

	const handleClick = () => {
		if (!waiting) {
			setIndex((prevIndex) => prevIndex + 1);
			setWaiting(true);

			if (index == 10) {
				setTimeout(() => {
					setWaiting(false);
				}, 4000);
			} else {
				setTimeout(() => {
					setWaiting(false);
				}, 2000);
			}
		}
	};

	const randomizeFont = () => setFont(fonts[Math.floor(Math.random() * fonts.length)]);
	const throttledRandomizeFont = useCallback(throttle(randomizeFont, 300), []);

	useEffect(() => {
		if (index == 2) {
			setTimeout(() => {
				setStyle(sty.style1);
			}, 500);
		}
		if (index == 3) {
			setStyle(sty.style2);
		}
		if (index == 4) {
			setStyle(sty.style3);
		}
		if (index >= 5) {
			setStyle(sty.style4);
		}
		if (index >= 11) {
			setStyle(sty.style5);
		}
	}, [index]);

	useEffect(() => {
		if (index === 11) {
			window.addEventListener("mousemove", () => throttledRandomizeFont());
		}

		return window.removeEventListener("mousemove", () => throttledRandomizeFont());
	}, [index]);

	useEffect(() => {
		if (index > 11) {
			navigate("/adefathoniprastya/home");
		}
	}, [index]);

	return (
		<div onClick={handleClick} className={sty.container}>
			{waiting == false && <IntroToast index={index} />}

			{index >= 6 && <Cursor element={textRef} />}

			{index < 7 && (
				<main key={index} className={style}>
					<p ref={(node) => (textRef.current = node)}>{text[index]}</p>
				</main>
			)}

			{index >= 7 && (
				<main key={index} className={style + " " + font}>
					<motion.div ref={constraintRef} className="w-12/12 h-12/12">
						<motion.p ref={(node) => (textRef.current = node)} drag dragConstraints={constraintRef}>
							{text[index]}
						</motion.p>
					</motion.div>
				</main>
			)}
		</div>
	);
}

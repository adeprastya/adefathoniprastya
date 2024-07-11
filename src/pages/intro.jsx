import Cursor from "@/components/molecules/Cursor";
import IntroToast from "@/components/molecules/IntroToast";
import { useEffect, useState, useCallback, useRef } from "react";
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
	"See that cursor? That's just a taste of JavaScript's magic", // 6

	// Framer Motion
	"My hunger for knowledge is insatiable, and it fuels me to keep pushing forward", // 7

	"Thanks for lending your eyes to this odyssey", // 8

	"Ooopsss, almost forgot to introduce myself! My name's...", // 9

	"Ade Fathoni Prastya" // 10
];

const sty = {
	base: "font-serif",

	// text 2
	style1:
		"font-serif p-10 sm:p-20 xl:p-40 m-4 sm:m-8 xl:m-16 bg-green-300 border-2 border-dashed border-black transition-all duration-1000     *:before:bg-orange-200 *:before:absolute *:before:top-0 *:before:left-0 *:before:w-full *:before:h-full *:before:-z-10 *:before:transition-all *:before:duration-1000     *:p-2 *:sm:p-4 *:xl:p-8 *:bg-blue-300 *:border-2 *:border-black *:transition-all *:duration-200",

	// text 3
	style2:
		"overflow-hidden box-border w-screen h-screen p-10 sm:p-20 xl:p-40 bg-slate-950 text-slate-50 font-cormorant text-center text-4xl tracking-wider sm:text-5xl xl:text-6xl transition-all duration-100 flex justify-center items-center     *:border-none *:bg-slate-950 *:transition-all *:duration-300",

	// text 4 - 5
	style3:
		"overflow-hidden box-border w-screen h-screen flex justify-center items-center p-10 sm:p-20 xl:p-40 bg-slate-950 text-slate-50 font-cormorant text-center text-4xl tracking-wider sm:text-5xl xl:text-6xl     *:inline border-none *:transition-all *:duration-500 *:animate-fade",
	text3: "after:content-['...'] after:absolute after:inline after:animate-pulse",

	// text 6 - 9
	style4:
		"cursor-none overflow-hidden box-border w-screen h-screen flex justify-center items-center p-10 sm:p-20 xl:p-40 bg-slate-950 text-slate-50 font-cormorant text-center text-4xl tracking-wider sm:text-5xl xl:text-6xl     *:flex *:flex-wrap *:justify-center *:content-center *:items-center *:gap-2 sm:*:gap-3 *:animate-fade",

	// text 10
	style5:
		"cursor-none overflow-hidden box-border w-screen h-screen flex justify-center items-center p-10 sm:p-20 xl:p-40 bg-slate-950 text-slate-50 text-center tracking-wider text-6xl sm:text-7xl xl:text-8xl     *:flex *:flex-wrap *:justify-center *:content-center *:items-center *:gap-2 sm:*:gap-3     *:*:px-5 *:*:leading-relaxed *:*:text-transparent *:*:bg-clip-text *:*:bg-gradient-to-tl from-yellow-200 to-amber-400"
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

const vars = {
	parent: {
		hidden: {},
		visible: {
			transition: {
				delayChildren: 0,
				staggerChildren: 0.1
			}
		}
	},
	child: {
		hidden: { y: 50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "smooth",
				duration: 0.2
			}
		}
	}
};

export default function Intro() {
	const [index, setIndex] = useState(0);
	const waiting = useRef(false);
	const [style, setStyle] = useState(sty.base);
	const [font, setFont] = useState("font-cormorant");
	const hovers = useRef([]);
	const navigate = useNavigate();

	const randomizeFont = () => setFont(fonts[Math.floor(Math.random() * fonts.length)]);
	const throttledRandomizeFont = useCallback(throttle(randomizeFont, 300), []);

	// event index increment
	useEffect(() => {
		const handleIncrementIndex = (e) => {
			if (e instanceof KeyboardEvent && e.code !== "Enter" && e.code !== "Space") return;

			if (!waiting.current) {
				setIndex((prevIndex) => prevIndex + 1);
				waiting.current = true;

				if (index == 10) {
					setTimeout(() => {
						waiting.current = false;
					}, 4000);
				} else {
					setTimeout(() => {
						waiting.current = false;
					}, 2000);
				}
			}
		};

		document.addEventListener("click", (e) => handleIncrementIndex(e));
		document.addEventListener("keyup", (e) => handleIncrementIndex(e));

		return () => {
			document.removeEventListener("click", handleIncrementIndex);
			document.removeEventListener("keyup", handleIncrementIndex);
		};
	}, []);

	// styles update
	useEffect(() => {
		if (index == 2) {
			setTimeout(() => {
				setStyle(sty.style1);
			}, 500);
		}
		if (index == 3) {
			setStyle(sty.style2);
		}
		if (index >= 4 && index <= 5) {
			setStyle(sty.style3);
		}
		if (index >= 6 && index <= 9) {
			setStyle(sty.style4);
		}
		if (index >= text.length - 1) {
			setStyle(sty.style5);
		}
	}, [index]);

	// randomize font event
	useEffect(() => {
		if (index === text.length - 1) {
			setInterval(() => {
				throttledRandomizeFont();
			}, 3000);

			window.addEventListener("mousemove", () => throttledRandomizeFont());
		}

		return window.removeEventListener("mousemove", () => throttledRandomizeFont());
	}, [index]);

	// navigate to home
	useEffect(() => {
		if (index === 11) {
			navigate("/adefathoniprastya/app");
		}
	}, [index]);

	return (
		<>
			{/* Toast */}
			<IntroToast key={index + "toast"} index={index} />

			{/* Cursor */}
			{index >= 6 && <Cursor key={index + "cursor"} hovers={hovers.current} />}

			{/* Main */}
			{index <= 6 && (
				<main key={index} className={style}>
					<p
						ref={(node) => {
							if (index >= 6) hovers.current.push([node, "OUTLINE"]);
						}}
						className={index == 4 ? sty.text3 : ""}
					>
						{text[index]}
					</p>
				</main>
			)}

			{index >= 7 && index <= 10 && (
				<motion.main
					key={index + font}
					className={`${style} ${index == 10 ? font : ""}`}
					variants={vars.parent}
					initial="hidden"
					animate="visible"
				>
					<div
						ref={(node) => {
							if (index >= 6) hovers.current.push([node, "OUTLINE"]);
						}}
					>
						{text[index].split(" ").map((char, i) => (
							<motion.p key={i} variants={vars.child}>
								{char}
							</motion.p>
						))}
					</div>
				</motion.main>
			)}
		</>
	);
}

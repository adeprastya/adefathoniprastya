import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { debounce } from "@/utils/helper";

const data = [
	{
		content: "Email",
		link: "mailto:adefathoniprastya@gmail.com"
	},
	{
		content: "Telegram",
		link: "https://t.me/adefathoniprastya"
	},
	{
		content: "Discord",
		link: "https://discordapp.com/users/adeprastya"
	},
	{
		content: "Linkedin",
		link: "https://www.linkedin.com/in/adefathoniprastya"
	},
	{
		content: "Github",
		link: "https://github.com/adeprastya"
	}
];

const sty = {
	container: "w-full min-h-screen flex flex-col lg:flex-row",

	textWrapper: "sticky top-0 w-full h-[50vh] lg:h-screen py-10 lg:px-10 flex justify-center items-center",
	heading:
		"font-serif tracking-wide text-[4rem] sm:text-[5rem] md:text-[6rem] xl:text-[6rem] text-center lg:text-start text-zinc-200 flex flex-col w-fit",

	itemWrapper:
		"w-full min-h-screen py-[40vh] lg:py-[70vh] lg:px-10 flex flex-col justify-center items-center gap-[5vh]",
	item: "transform-gpu font-sans font-bold tracking-wide text-[5rem] sm:text-[6rem] md:text-[7rem] xl:text-[8rem] text-transparent bg-clip-text bg-gradient-to-br from-zinc-200 via-yellow-400 to-amber-500"
};

function Item({ data }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: window.innerWidth > 1024 ? ["0 0", "1 1"] : ["0 0.9", "1 0.5"]
	});

	const y = useTransform(
		scrollYProgress,
		[0, 0.25, 0.5, 0.75, 1],
		window.innerWidth > 1024 ? [10, 0.5, 0, -0.5, -10] : [-60, -20, 0, 20, 60]
	);
	const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
	const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, 60]);
	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
	const transform = useMotionTemplate`translateY(${y}%) rotateX(${rotate}deg) scale(${scale})`;

	return (
		<motion.a ref={ref} href={data.link} target="_blank" style={{ opacity, transform }} className={sty.item}>
			{data.content}
		</motion.a>
	);
}

export default function Contact() {
	const [isResized, setIsResized] = useState(window.innerWidth);
	const debouncedSetIsResized = debounce(() => setIsResized(window.innerWidth), 300);

	useEffect(() => {
		window.addEventListener("resize", () => {
			debouncedSetIsResized();
		});
	});

	return (
		<section id="contact" className={sty.container}>
			<div className={sty.textWrapper}>
				<h1 className={sty.heading}>
					<span>Get In Touch</span>
					<span>With Me</span>
				</h1>
			</div>

			<div key={isResized} className={sty.itemWrapper}>
				{data.map((data, i) => (
					<Item key={i} data={{ ...data, i }} />
				))}
			</div>
		</section>
	);
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const data = [
	{
		content: "Email",
		link: "mailto:adefathoniprastya@gmail.com"
	},
	{
		content: "Linkedin",
		link: "https://www.linkedin.com/in/adefathoniprastya"
	},
	{
		content: "Telegram",
		link: "https://t.me/adefathoniprastya"
	}
];

const sty = {
	container: "w-full h-[200vh]",

	contentWrapper: "sticky top-0 flex flex-col lg:flex-row",

	textWrapper: "pt-20 w-full h-[50vh] lg:h-screen flex justify-center items-center",
	heading:
		"font-cormorant font-bold tracking-wide text-[4rem] sm:text-[5rem] md:text-[6rem] xl:text-[6rem] text-transparent bg-clip-text bg-gradient-to-bl from-amber-500 to-yellow-300     flex flex-col w-fit",

	itemWrapper: "pb-20 w-full h-[50vh] lg:h-screen flex flex-col justify-center items-center",
	item: "absolute font-cormorant font-bold tracking-wide text-[5rem] sm:text-[6rem] md:text-[7rem] xl:text-[8rem] text-zinc-300 transform-gpu"
};

export default function Contact() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
	const y = [
		useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-100%", "-200%"]),
		useTransform(scrollYProgress, [0, 0.5, 1], ["100%", "0%", "-100%"]),
		useTransform(scrollYProgress, [0, 0.5, 1], ["-200%", "100%", "0%"])
	];
	const opacity = [
		useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]),
		useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]),
		useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1])
	];
	const rotate = [
		useTransform(scrollYProgress, [0, 0.5, 1], ["0deg", "60deg", "120deg"]),
		useTransform(scrollYProgress, [0, 0.5, 1], ["-60deg", "0deg", "60deg"]),
		useTransform(scrollYProgress, [0, 0.5, 1], ["-120deg", "60deg", "0deg"])
	];

	return (
		<section ref={ref} id="contact" className={sty.container}>
			<div className={sty.contentWrapper}>
				<div className={sty.textWrapper}>
					<h1 className={sty.heading}>
						<span>Get In Touch</span>
						<span>With Me</span>
					</h1>
				</div>

				<div className={sty.itemWrapper}>
					{data.map((data, i) => (
						<motion.a
							key={i}
							href={data.link}
							target="_blank"
							style={{ y: y[i], rotateX: rotate[i], opacity: opacity[i] }}
							className={sty.item}
						>
							{data.content}
						</motion.a>
					))}
				</div>
			</div>
		</section>
	);
}

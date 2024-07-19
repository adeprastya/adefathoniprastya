import LogoIcon from "@/assets/icon/LogoIcon";
import SendIcon from "@/assets/icon/SendIcon";
import ParallaxText from "@/components/molecules/ParallaxText";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const sty = {
	container: "snap-start relative w-full h-screen flex justify-center items-center",
	markText: "font-bebas tracking-wider text-4xl lg:text-5xl text-slate-300",
	formWrap: "z-10 absolute left-0 flex flex-row-reverse",
	formLabel:
		"block h-fit my-auto py-4 px-1 rounded-r bg-gradient-to-b from-yellow-300 to-amber-500 font-cormorant font-black text-sm sm:text-base lg:text-lg",
	formContent:
		"h-[40vh] p-2 box-border rounded-e-xl border-y-2 border-r-2 border-yellow-400 bg-slate-950 flex flex-col gap-2"
};

const data = [
	{
		id: "1",
		content: "Hello, how are you?",
		sender: "anonymousx"
	},
	{
		id: "2",
		content: "Hello, how are you?",
		sender: "anonymous"
	},
	{
		id: "3",
		content: "Hello, how are you?",
		sender: "anonymous"
	},
	{
		id: "4",
		content: "Hello, how are you?",
		sender: "anonymous"
	},
	{
		id: "5",
		content: "Hello, how are you?",
		sender: "anonymous"
	},
	{
		id: "6",
		content: "Hello, how are you?",
		sender: "anonymous"
	},
	{
		id: "7",
		content: "Hello, how are you?",
		sender: "anonymous"
	},
	{
		id: "8",
		content: "Hello, how are you?",
		sender: "anonymous"
	},
	{
		id: "9",
		content: "Hello, how are you?",
		sender: "anonymous"
	},
	{
		id: "10",
		content: "Hello, how are you?",
		sender: "anonymous"
	},
	{
		id: "11",
		content: "Hello, how are you?",
		sender: "anonymous"
	},
	{
		id: "12",
		content: "Hello, how are you?",
		sender: "anonymous"
	},
	{
		id: "13",
		content: "Hello, how are you?",
		sender: "anonymous"
	},
	{
		id: "14",
		content: "Hello, how are you?",
		sender: "anonymous"
	},
	{
		id: "15",
		content: "Hello, how are you?",
		sender: "anonymous"
	},
	{
		id: "16",
		content: "Hello, how are you?",
		sender: "anonymous"
	}
];

export default function Mark() {
	return (
		<section id="mark" className={sty.container}>
			<MarkForm />

			<a
				href="#home"
				onClick={(e) => {
					e.preventDefault();
					window.scrollTo({ top: 0, behavior: "smooth" });
				}}
				className="z-10 relative block h-2/6 aspect-square fill-yellow-400"
			>
				<LogoIcon className="w-full h-full" />
			</a>

			<ParallaxText baseVelocity={10} textStyle={sty.markText} containerStyle="absolute top-16">
				{data.slice(0, 4).reduce((acc, cur) => acc + cur.content + " - ", "")}
			</ParallaxText>

			<ParallaxText baseVelocity={-10} textStyle={sty.markText} containerStyle="absolute top-32">
				{data.slice(4, 8).reduce((acc, cur) => acc + cur.content + " - ", "")}
			</ParallaxText>

			<ParallaxText baseVelocity={10} textStyle={sty.markText} containerStyle="absolute bottom-32">
				{data.slice(8, 12).reduce((acc, cur) => acc + cur.content + " - ", "")}
			</ParallaxText>

			<ParallaxText baseVelocity={-10} textStyle={sty.markText} containerStyle="absolute bottom-16">
				{data.slice(12, 16).reduce((acc, cur) => acc + cur.content + " - ", "")}
			</ParallaxText>
		</section>
	);
}

function MarkForm() {
	const ref = useRef(null);
	const [isOpen, setIsOpen] = useState(true);

	useEffect(() => {
		setIsOpen(false);
	}, []);

	return (
		<motion.div
			className={sty.formWrap}
			animate={isOpen ? { x: 0 } : { x: -ref.current?.offsetWidth }}
			transition={{ ease: "easeInOut" }}
		>
			<button style={{ writingMode: "vertical-lr" }} className={sty.formLabel} onClick={() => setIsOpen((n) => !n)}>
				ADD YOUR MARK
			</button>

			<form ref={ref} action="" className={sty.formContent}>
				<textarea
					placeholder="Your Mark :)"
					type="text"
					name="content"
					className="resize-none w-full h-full p-2 bg-slate-800"
				/>

				<div className="w-full flex items-center gap-2">
					<label htmlFor="sender" className="font-cormorant text-base sm:text-lg lg:text-xl text-slate-300">
						From:
					</label>

					<input placeholder="Anonymous" type="text" name="sender" id="sender" className="h-8 p-2 bg-slate-800" />

					<button type="submit" className="h-10 aspect-square fill-yellow-400">
						<SendIcon className="w-full h-full" />
					</button>
				</div>
			</form>
		</motion.div>
	);
}

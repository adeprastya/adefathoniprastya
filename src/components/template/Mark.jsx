import Logo from "@/assets/icon/Logo";
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
		"aspect-square w-72 p-2 box-border rounded-e-xl border-y-2 border-r-2 border-yellow-400 bg-slate-950 flex flex-col gap-2"
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
			<a href="#home" className="block h-2/6 aspect-square">
				<Logo className="w-full h-full fill-slate-100" />
			</a>

			<MarkForm />

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
			<p style={{ writingMode: "vertical-lr" }} className={sty.formLabel} onClick={() => setIsOpen((n) => !n)}>
				ADD YOUR MARK
			</p>

			<form ref={ref} action="" className={sty.formContent}>
				<textarea type="text" name="content" className="w-full h-full bg-slate-800" />

				<div className="w-full flex items-center gap-2">
					<label htmlFor="sender" className="font-cormorant text-lg sm:text-xl lg:text-2xl text-slate-300">
						From:
					</label>

					<input type="text" name="sender" id="sender" className="h-8 bg-slate-800" />

					<button type="submit" className="w-8 sm:w-10 lg:w-12 text-slate-300 fill-yellow-400">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="send">
							<path d="M96 249.6l116.6 51.3L269.8 416 416 96 96 249.6zm132.1 46.9l155.7-166.2-114.6 248.9-41.1-82.7zm153.7-168.2l-165 157.1L134 249l247.8-120.7z"></path>
						</svg>
					</button>
				</div>
			</form>
		</motion.div>
	);
}

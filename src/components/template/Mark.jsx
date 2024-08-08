import LogoIcon from "@/assets/icon/LogoIcon";
import SendIcon from "@/assets/icon/SendIcon";
import ParallaxText from "@/components/molecules/ParallaxText";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useFetchMark from "@/hook/useFetchMark";

const sty = {
	container: "snap-start relative w-full h-screen flex justify-center items-center",
	markText: "font-bebas tracking-wider text-4xl lg:text-5xl text-slate-300",
	formWrap: "z-20 absolute left-0 flex flex-row-reverse",
	formLabel:
		"block h-fit my-auto py-4 px-1 rounded-r bg-gradient-to-b from-yellow-300 to-amber-500 font-cormorant font-black text-sm sm:text-base lg:text-lg",
	formContent:
		"h-[40vh] p-2 box-border rounded-e-xl border-y-2 border-r-2 border-yellow-400 bg-slate-950 text-slate-200 flex flex-col gap-2"
};

export default function Mark() {
	const { mark } = useFetchMark();

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

			{!mark.loading && Array.isArray(mark.data) && (
				<>
					<ParallaxText baseVelocity={10} textStyle={sty.markText} containerStyle="absolute top-16">
						{mark.data
							.slice(0, Math.ceil((mark.data.length / 4) * 1))
							.reduce((acc, cur) => acc + cur.content + " - ", "")}
					</ParallaxText>

					<ParallaxText baseVelocity={-10} textStyle={sty.markText} containerStyle="absolute top-32">
						{mark.data
							.slice(Math.ceil((mark.data.length / 4) * 1), Math.ceil((mark.data.length / 4) * 2))
							.reduce((acc, cur) => acc + cur.content + " - ", "")}
					</ParallaxText>

					<ParallaxText baseVelocity={10} textStyle={sty.markText} containerStyle="absolute bottom-32">
						{mark.data
							.slice(Math.ceil((mark.data.length / 4) * 2), Math.ceil((mark.data.length / 4) * 3))
							.reduce((acc, cur) => acc + cur.content + " - ", "")}
					</ParallaxText>

					<ParallaxText baseVelocity={-10} textStyle={sty.markText} containerStyle="absolute bottom-16">
						{mark.data
							.slice(Math.ceil((mark.data.length / 4) * 3), Math.ceil((mark.data.length / 4) * 4))
							.reduce((acc, cur) => acc + cur.content + " - ", "")}
					</ParallaxText>
				</>
			)}
		</section>
	);
}

function MarkForm() {
	const ref = useRef(null);
	const [isOpen, setIsOpen] = useState(true);

	useEffect(() => {
		setIsOpen(false);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsOpen(false);

		alert("Sorry, out of service!");
	};

	return (
		<motion.div
			className={sty.formWrap}
			animate={isOpen ? { x: 0 } : { x: -ref.current?.offsetWidth - 2 }}
			transition={{ ease: "easeInOut" }}
		>
			<button style={{ writingMode: "vertical-lr" }} className={sty.formLabel} onClick={() => setIsOpen((n) => !n)}>
				ADD YOUR MARK
			</button>

			<form ref={ref} onSubmit={(e) => handleSubmit(e)} className={sty.formContent}>
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

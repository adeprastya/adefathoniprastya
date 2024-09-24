import LogoIcon from "@/assets/icons/LogoIcon";
import SendIcon from "@/assets/icons/SendIcon";
import ParallaxText from "@/components/shared/ParallaxText";
import { useState } from "react";
import { motion } from "framer-motion";
import useFetchMark from "@/hooks/useFetchMark";
import { slicer } from "@/utils/helper";

const sty = {
	container: "relative w-full h-screen flex justify-center items-center",

	logo: "z-10 relative block h-2/6 aspect-square fill-yellow-400",

	markWrapper: "absolute w-full h-screen",
	markText: "font-decor tracking-wider text-2xl sm:text-3xl lg:text-4xl text-zinc-500",

	formWrap: "z-20 absolute left-0 flex flex-row-reverse",
	formLabel:
		"absolute top-1/2 -translate-y-1/2 translate-x-full h-fit py-4 px-1 rounded-r bg-gradient-to-b from-yellow-300 to-amber-500 whitespace-nowrap font-serif font-bold text-sm sm:text-base lg:text-lg",
	formContent:
		"h-[40vh] p-2 box-border rounded-e-xl border-y-2 border-r-2 border-yellow-400 bg-zinc-950 text-zinc-300 flex flex-col gap-2",
	formTextArea: "resize-none w-full h-full p-2 bg-zinc-800 font-serif",
	formInputLabel: "font-serif text-xs sm:text-base lg:text-lg text-zinc-300",
	formInput: "font-serif h-8 p-2 bg-zinc-800",
	formButton: "h-10 aspect-square fill-yellow-400"
};

const vars = {
	hidden: {
		x: "-100%"
	},
	visible: {
		x: 0
	},
	transition: {
		duration: 0.3,
		ease: "easeInOut"
	}
};

export default function Mark() {
	const { mark, insert } = useFetchMark();
	const marks = slicer(mark.data, 4)?.map((item) => item.reduce((acc, cur) => acc + cur.content + " - ", ""));

	return (
		<section id="mark" className={sty.container}>
			{/* Logo */}
			<a
				href="#home"
				onClick={(e) => {
					e.preventDefault();
					window.scrollTo({ top: 0, behavior: "smooth" });
				}}
				className={sty.logo}
			>
				<LogoIcon className="w-full h-full" />
			</a>

			{/* Mark Form */}
			<MarkForm insert={insert} />

			{/* Mark Text */}
			{!mark.loading && Array.isArray(mark.data) && (
				<div className={sty.markWrapper}>
					<ParallaxText baseVelocity={10} textStyle={sty.markText} containerStyle="absolute top-8">
						{marks[0]}
					</ParallaxText>

					<ParallaxText baseVelocity={-10} textStyle={sty.markText} containerStyle="absolute top-20">
						{marks[1]}
					</ParallaxText>

					<ParallaxText baseVelocity={10} textStyle={sty.markText} containerStyle="absolute bottom-20">
						{marks[2]}
					</ParallaxText>

					<ParallaxText baseVelocity={-10} textStyle={sty.markText} containerStyle="absolute bottom-8">
						{marks[3]}
					</ParallaxText>
				</div>
			)}
		</section>
	);
}

function MarkForm({ insert }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((n) => !n);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		insert.fn(e.target.content.value, e.target.sender.value);

		e.target.content.value = "";
		e.target.sender.value = "";
		setIsOpen(false);
	};

	return (
		<motion.div
			variants={vars}
			initial="hidden"
			animate={isOpen ? "visible" : "hidden"}
			transition={vars.transition}
			className={sty.formWrap}
		>
			<button onClick={handleClick} style={{ writingMode: "vertical-lr" }} className={sty.formLabel}>
				ADD YOUR MARK
			</button>

			<form onSubmit={(e) => handleSubmit(e)} className={sty.formContent}>
				<textarea
					placeholder="Your Mark . . ."
					type="text"
					minLength={1}
					maxLength={20}
					name="content"
					className={sty.formTextArea}
				/>

				<div className="w-full flex items-center gap-2">
					<label htmlFor="sender" className={sty.formInputLabel}>
						From:
					</label>

					<input
						placeholder="Anonymous"
						type="text"
						minLength={1}
						maxLength={10}
						name="sender"
						id="sender"
						className={sty.formInput}
					/>

					<button type="submit" className={sty.formButton}>
						<SendIcon className="size-full" />
					</button>
				</div>
			</form>
		</motion.div>
	);
}

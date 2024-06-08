import { useEffect, useState } from "react";

const introStr = [
	"Hello World!",
	"I am someone who is embarking on a journey to learn web development from scratch",
	"I vividly remember how I started by learning the basic concepts of HTML",
	"Initially, I did not have a strong technical background",
	"Then I began to learn how to add style with CSS",
	"However, my passion for mastering this skill has motivated me to keep learning",
	"I also started to learn JavaScript to add more interactivity",
	"Thank you for taking the time to read this",
	"Oops, I almost forgot, my name is",
	"Ade Fathoni Prastya"
];

const sty = {
	container:
		"w-screen h-screen p-10 flex justify-center items-center text-center text-xl tracking-wide sm:p-20 sm:text-2xl xl:p-40 xl:text-4xl transition-all duration-1000 ease-in ",
	css: "bg-gradient-to-br from-cyan-900 to-violet-900 text-white"
};

export default function App() {
	const [introIndex, setIntroIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIntroIndex((prevIndex) => {
				if (prevIndex > introStr.length - 3) {
					clearInterval(interval);
					return setIntroIndex(introStr.length - 1);
				}
				return prevIndex + 1;
			});
		}, 4000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		console.log(introIndex);
	}, [introIndex]);

	return (
		<main className={sty.container + (introIndex > 3 ? sty.css : "")}>
			<p>{introStr[introIndex]}</p>
		</main>
	);
}

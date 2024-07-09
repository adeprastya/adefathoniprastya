import ParallaxText from "@/components/ParallaxText";
import AnimatedText from "@/components/AnimatedText";

export default function Home({}) {
	const arr = ["DEVELOPER", "FRONTEND", "STUDENT"];

	return (
		<div className="relative overflow-hidden w-full min-h-screen flex justify-center items-center">
			<div className="z-10">
				<p className="font-sans font-light text-xl sm:text-2xl lg:text-3xl text-slate-400">Someone to be</p>
				<AnimatedText
					arr={arr}
					textStyle="font-cormorant font-bold text-5xl sm:text-7xl lg:text-9xl bg-gradient-to-b from-amber-500 to-yellow-300 bg-clip-text text-transparent w-9 sm:w-16 lg:w-24 text-center"
				/>
			</div>

			<ParallaxText
				baseVelocity={-10}
				containerStyle="absolute translate-y-[-90%]"
				textStyle="font-aveinatortia text-[9rem] bg-gradient-to-t from-black to-slate-700 bg-clip-text text-transparent"
			>
				ade fathoni prastya
			</ParallaxText>
			<ParallaxText
				baseVelocity={10}
				containerStyle="absolute translate-y-[-65%]"
				textStyle="font-aveinatortia text-[8rem] bg-gradient-to-t from-black to-slate-700 bg-clip-text text-transparent"
			>
				ade fathoni prastya
			</ParallaxText>
			<ParallaxText
				baseVelocity={-10}
				containerStyle="absolute translate-y-[-30%]"
				textStyle="font-aveinatortia text-[7rem] bg-gradient-to-t from-black to-slate-700 bg-clip-text text-transparent"
			>
				ade fathoni prastya
			</ParallaxText>

			<ParallaxText
				baseVelocity={10}
				containerStyle="absolute translate-y-[90%]"
				textStyle="font-aveinatortia text-[9rem] bg-gradient-to-b from-black to-slate-700 bg-clip-text text-transparent"
			>
				ade fathoni prastya
			</ParallaxText>
			<ParallaxText
				baseVelocity={-10}
				containerStyle="absolute translate-y-[65%]"
				textStyle="font-aveinatortia text-[8rem] bg-gradient-to-b from-black to-slate-700 bg-clip-text text-transparent"
			>
				ade fathoni prastya
			</ParallaxText>
			<ParallaxText
				baseVelocity={10}
				containerStyle="absolute translate-y-[30%]"
				textStyle="font-aveinatortia text-[7rem] bg-gradient-to-b from-black to-slate-700 bg-clip-text text-transparent"
			>
				ade fathoni prastya
			</ParallaxText>
		</div>
	);
}

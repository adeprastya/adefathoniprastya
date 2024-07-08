import ParallaxText from "@/components/ParallaxText";

export default function Home({}) {
	return (
		<div className="w-screen min-h-screen">
			<ParallaxText
				baseVelocity={300}
				textStyle="font-cormorant font-bold text-[30rem] text-slate-950 text-shadow-border text-shadow-yellow-300"
			>
				ADE FATHONI PRASTYA
			</ParallaxText>
		</div>
	);
}

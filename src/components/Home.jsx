import ParallaxText from "@/components/ParallaxText";

export default function Home({}) {
	return (
		<div className="w-screen min-h-screen">
			<ParallaxText
				baseVelocity={-100}
				containerStyle="absolute top-[-0%]"
				textStyle="font-cormorant font-bold text-[10rem] text-slate-950 text-shadow-border text-shadow-yellow-300"
			>
				A
			</ParallaxText>
		</div>
	);
}

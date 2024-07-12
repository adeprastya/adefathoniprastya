import ParallaxText from "@/components/molecules/ParallaxText";
import AnimatedText from "@/components/molecules/AnimatedText";

const texts = ["DEVELOPER", "DESIGNER", "ARTIST", "STUDENT", "FRIENDS"];

const sty = {
	container: "relative overflow-hidden w-full min-h-screen flex justify-center items-center",
	paragraph: "font-sans font-light text-gl sm:text-2xl lg:text-3xl text-slate-400",
	name: "font-cormorant font-semibold text-slate-400 bg-gradient-to-b from-amber-500 to-yellow-300 bg-clip-text text-transparent w-9 sm:w-16 lg:w-24 text-center",
	animatedText:
		"font-cormorant font-bold text-5xl sm:text-7xl lg:text-9xl bg-gradient-to-b from-amber-500 to-yellow-300 bg-clip-text text-transparent w-9 sm:w-16 lg:w-24 text-center",
	parallaxText: "font-aveinatortia from-black to-slate-800 bg-clip-text text-transparent"
};

export default function Home() {
	return (
		<section className={sty.container}>
			<div className="z-10 translate-y-[-10%]">
				<p className={sty.paragraph}>
					Im <span className={sty.name}>Ade</span>, Someone to be
				</p>
				<AnimatedText textArray={texts} textStyle={sty.animatedText} />
			</div>

			<ParallaxText
				baseVelocity={-10}
				containerStyle="absolute translate-y-[-90%]"
				textStyle={`${sty.parallaxText} text-[9rem] bg-gradient-to-t`}
			>
				Hello - Namaste -
			</ParallaxText>
			<ParallaxText
				baseVelocity={10}
				containerStyle="absolute translate-y-[-65%]"
				textStyle={`${sty.parallaxText} text-[8rem] bg-gradient-to-t`}
			>
				Ciao Olá - Zdravstvuyte -
			</ParallaxText>
			<ParallaxText
				baseVelocity={-10}
				containerStyle="absolute translate-y-[-30%]"
				textStyle={`${sty.parallaxText} text-[7rem] bg-gradient-to-t`}
			>
				Konnichiwa - Merhaba -
			</ParallaxText>

			<ParallaxText
				baseVelocity={10}
				containerStyle="absolute translate-y-[90%]"
				textStyle={`${sty.parallaxText} text-[9rem] bg-gradient-to-b`}
			>
				Annyeonghaseyo - Hallo -
			</ParallaxText>
			<ParallaxText
				baseVelocity={-10}
				containerStyle="absolute translate-y-[65%]"
				textStyle={`${sty.parallaxText} text-[8rem] bg-gradient-to-b`}
			>
				Konnichiwa - Bonjour -
			</ParallaxText>
			<ParallaxText
				baseVelocity={10}
				containerStyle="absolute translate-y-[30%]"
				textStyle={`${sty.parallaxText} text-[7rem] bg-gradient-to-b`}
			>
				Nǐ hǎo - Marhaba -
			</ParallaxText>
		</section>
	);
}

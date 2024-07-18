import ParallaxText from "@/components/molecules/ParallaxText";
import AnimatedText from "@/components/molecules/AnimatedText";

const texts = ["DEVELOPER", "DESIGNER", "ARTIST", "STUDENT", "FRIENDS"];

const sty = {
	container: "relative w-full h-screen flex justify-center items-center",
	paragraph: "font-cormorant font-bold italic text-3xl sm:text-4xl lg:text-5xl text-slate-400 translate-y-[15%]",
	name: "bg-gradient-to-b from-amber-500 to-yellow-300 bg-clip-text text-transparent text-center",
	animatedText:
		"font-cormorant font-bold text-5xl sm:text-7xl lg:text-9xl bg-gradient-to-b from-amber-500 to-yellow-300 bg-clip-text text-transparent w-9 sm:w-16 lg:w-24 text-center",
	parallaxText: "font-bebas from-black to-slate-700 bg-clip-text text-transparent"
};

export default function Home() {
	return (
		<section id="home" className={sty.container}>
			<div className="z-10 translate-y-[-10%]">
				<p className={sty.paragraph}>
					Im <span className={sty.name}>Ade</span>, Someone to be
				</p>
				<AnimatedText textArray={texts} textStyle={sty.animatedText} />
			</div>

			<ParallaxText
				baseVelocity={-10}
				containerStyle="absolute translate-y-[-100%]"
				textStyle={`${sty.parallaxText} text-[9rem] bg-gradient-to-t`}
			>
				Hello - Namaste -
			</ParallaxText>
			<ParallaxText
				baseVelocity={10}
				containerStyle="absolute translate-y-[-70%]"
				textStyle={`${sty.parallaxText} text-[8rem] bg-gradient-to-t`}
			>
				Ciao Ola - Zdravstvuyte -
			</ParallaxText>
			<ParallaxText
				baseVelocity={-10}
				containerStyle="absolute translate-y-[-35%]"
				textStyle={`${sty.parallaxText} text-[7rem] bg-gradient-to-t`}
			>
				Konnichiwa - Hola -
			</ParallaxText>

			<ParallaxText
				baseVelocity={10}
				containerStyle="absolute translate-y-[100%]"
				textStyle={`${sty.parallaxText} text-[9rem] bg-gradient-to-b`}
			>
				Annyeonghaseyo - Halo -
			</ParallaxText>
			<ParallaxText
				baseVelocity={-10}
				containerStyle="absolute translate-y-[70%]"
				textStyle={`${sty.parallaxText} text-[8rem] bg-gradient-to-b`}
			>
				Konnichiwa - Bonjour -
			</ParallaxText>
			<ParallaxText
				baseVelocity={10}
				containerStyle="absolute translate-y-[35%]"
				textStyle={`${sty.parallaxText} text-[7rem] bg-gradient-to-b`}
			>
				Ni hao - Marhaba -
			</ParallaxText>
		</section>
	);
}

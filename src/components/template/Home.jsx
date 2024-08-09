import ParallaxText from "@/components/molecules/ParallaxText";
import AnimatedText from "@/components/molecules/AnimatedText";

const texts = ["CODE", "ART", "MUSIC", "GAME"];

const sty = {
	container: "snap-start relative w-full h-screen flex justify-center items-center",
	paragraph: "font-spectral font-extralight text-2xl sm:text-3xl lg:text-4xl text-zinc-300 translate-y-[-15%]",
	paragraph2:
		"w-[70vw] sm:w-[55vw] lg:w-[40vw] font-fira font-light text-base tracking-wider sm:text-lg lg:text-xl text-zinc-400 translate-y-[15%]",
	name: "font-light bg-gradient-to-b from-amber-400 to-yellow-100 bg-clip-text text-transparent text-center",
	animatedText:
		"font-cinzel font-light text-6xl sm:text-8xl lg:text-9xl bg-gradient-to-bl from-amber-400 to-yellow-300 bg-clip-text text-transparent w-14 sm:w-24 lg:w-32 text-center",
	parallaxText: "font-cinzel font-light tracking-tight from-black to-gray-700 bg-clip-text text-transparent"
};

export default function Home() {
	return (
		<section id="home" className={sty.container}>
			<div className="z-10 translate-y-[10%]">
				<p className={sty.paragraph}>
					Im <span className={sty.name}>Ade</span>, Someone who love
				</p>

				<h1>
					<AnimatedText textArr={texts} textStyle={sty.animatedText} />
				</h1>

				<p className={sty.paragraph2}>
					Building the digital world with a fusion of code and art is not just a profession, it is my calling, my
					passion, and the way I express creativity.
				</p>
			</div>

			<ParallaxText
				baseVelocity={-15}
				containerStyle="absolute translate-y-[-100%]"
				textStyle={`${sty.parallaxText} text-[9rem] bg-gradient-to-t`}
			>
				Hello - Namaste -
			</ParallaxText>
			<ParallaxText
				baseVelocity={12}
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
				baseVelocity={15}
				containerStyle="absolute translate-y-[100%]"
				textStyle={`${sty.parallaxText} text-[9rem] bg-gradient-to-b`}
			>
				Annyeonghaseyo - Halo -
			</ParallaxText>
			<ParallaxText
				baseVelocity={-12}
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

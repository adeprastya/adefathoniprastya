import ParallaxText from "@/components/molecules/ParallaxText";
import AnimatedText from "@/components/molecules/AnimatedText";

const texts = ["CODE", "ART", "MUSIC", "GAME"];

const sty = {
	container: "snap-start relative w-full h-screen flex justify-center items-center",
	shortText:
		"font-spectral font-light text-2xl sm:text-3xl lg:text-4xl text-transparent bg-gradient-to-b from-yellow-200 to-zinc-400 bg-clip-text",
	animatedText:
		"font-cinzel font-light text-7xl sm:text-8xl lg:text-9xl text-transparent bg-gradient-to-bl from-amber-500 to-yellow-300 bg-clip-text sm:tracking-widest",
	longText:
		"w-9/12 sm:w-7/12 lg:w-5/12 font-spectral text-center tracking-wider text-base sm:text-lg lg:text-xl text-zinc-400",
	parallaxText: "font-cinzel font-light tracking-tight from-black to-gray-700 bg-clip-text text-transparent"
};

export default function Home() {
	return (
		<section id="home" className={sty.container}>
			<div className="z-10 w-full flex flex-col justify-center items-center">
				<p className={sty.shortText}>Im Ade, and i love</p>

				<h1>
					<AnimatedText textArr={texts} textStyle={sty.animatedText} />
				</h1>

				<p className={sty.longText}>
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

const sty = {
	container: "overflow-hidden w-full min-h-screen bg-slate-950 grid grid-flow-row lg:grid-flow-col gap-6",
	heading:
		"font-cormorant font-bold tracking-wide text-[3.5rem] sm:text-[5rem] md:text-[6rem] xl:text-[6rem] text-transparent bg-clip-text bg-gradient-to-bl from-amber-500 to-yellow-300 flex flex-col lg:px-10",
	item: "font-cormorant font-bold tracking-wide text-[5rem] sm:text-[6rem] md:text-[7rem] xl:text-[8rem] text-slate-200"
};

export default function Contact() {
	return (
		<section className={sty.container}>
			<div className="flex justify-center items-center">
				<h1 className={sty.heading}>
					<span>Get In Touch</span>
					<span>With Me</span>
				</h1>
			</div>

			<div className="flex flex-col justify-center items-center lg:px-10">
				<a href="mailto:KwCZs@example.com" className={sty.item}>
					Email
				</a>
				<a href="mailto:KwCZs@example.com" className={sty.item}>
					Linkedin
				</a>
				<a href="mailto:KwCZs@example.com" className={sty.item}>
					Telegram
				</a>
			</div>
		</section>
	);
}

import LogoIcon from "@/assets/icon/LogoIcon";
import MenuIcon from "@/assets/icon/MenuIcon";
import StarIcon from "@/assets/icon/StarIcon";
import SendIcon from "@/assets/icon/SendIcon";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const list = [
	{
		title: "Home",
		link: "#home"
	},
	{
		title: "About",
		link: "#about"
	},
	{
		title: "Works",
		link: "#portfolio"
	},
	{
		title: "Contact",
		link: "#contact"
	},
	{
		title: "Marks",
		link: "#mark"
	}
];

const sty = {
	container: "pointer-events-none z-50 fixed w-screen h-screen",

	headerWrap: "pointer-events-auto absolute top-0 w-full p-2 pe-8 flex justify-between items-center",
	logo: "z-50 w-10 sm:w-12 lg:w-14 aspect-square fill-slate-200 *:w-full *:h-full",

	navWrap: "pointer-events-none absolute right-0",
	listWrap:
		"pointer-events-auto w-screen min-h-screen p-12 bg-slate-950/60 backdrop-blur-sm flex flex-col justify-between gap-8",
	list: "relative font-cormorant font-bold tracking-widest leading-none text-slate-950 text-shadow-border text-shadow-slate-200     before:absolute before:top-1/2 before:-translate-y-1/2 before:-translate-x-24 before:w-4 before:aspect-square before:rounded-full before:border-2 before:border-slate-200     hover:text-shadow-yellow-400 hover:before:border-yellow-400",

	chatWrap:
		"pointer-events-auto z-20 absolute right-0 w-screen sm:max-w-[48rem] h-screen p-8 pe-12 pt-14 backdrop-blur-sm bg-slate-950/60 flex flex-col",
	chatBox: "overflow-y-auto h-full p-4 rounded-t-xl border-2 border-b-0 border-slate-700 flex flex-col gap-4",
	chatText: "w-fit p-2 rounded-lg bg-slate-300 font-fira tracking-wide text-base text-slate-950",
	chatForm: "overflow-hidden h-16 rounded-b-xl border-2 border-slate-700 flex",
	chatInput: "size-full px-4 bg-transparent font-fira text-lg text-slate-300 placeholder:text-slate-500",
	chatButton: "h-full aspect-square fill-slate-950 bg-gradient-to-br from-yellow-300 to-amber-500 *:size-full"
};

export default function Navigation() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isChatOpen, setIsChatOpen] = useState(false);
	const [activeNav, setActiveNav] = useState(0);

	const handleMenu = () => {
		setIsNavOpen((n) => !n);
	};
	const handleChat = () => {
		setIsChatOpen((n) => !n);
	};

	useEffect(() => {
		const handleScroll = () => {
			document.querySelectorAll("section").forEach((section, index) => {
				const rect = section.getBoundingClientRect();
				if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
					setActiveNav(index);
				}
			});
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={sty.container}>
			<div className={sty.headerWrap}>
				<button
					onClick={(e) => {
						e.preventDefault();
						window.location.reload();
					}}
					className={sty.logo}
				>
					<LogoIcon />
				</button>

				<div className="flex gap-4">
					<motion.button
						onClick={handleChat}
						className={sty.logo}
						animate={isChatOpen ? { rotate: 135 } : { rotate: 0 }}
					>
						<StarIcon />
					</motion.button>
					<motion.button
						onClick={handleMenu}
						className={sty.logo}
						animate={isNavOpen ? { rotate: 180 } : { rotate: 0 }}
					>
						<MenuIcon />
					</motion.button>
				</div>
			</div>

			<nav className={sty.navWrap}>
				<motion.ul
					className={sty.listWrap}
					animate={isNavOpen ? { x: 0 } : { x: "100%", paddingTop: "30vh", paddingBottom: "30vh" }}
				>
					{list.map((list, i) => (
						<a
							key={i}
							onClick={(e) => {
								e.preventDefault();
								document.querySelector(list.link).scrollIntoView({ behavior: "smooth" });
							}}
							href={list.link}
						>
							<motion.li
								className={`${sty.list} ${activeNav === i ? " before:border-yellow-400 text-shadow-yellow-400" : ""}`}
								animate={isNavOpen ? { fontSize: "5rem" } : { fontSize: "1rem" }}
							>
								{list.title}
							</motion.li>
						</a>
					))}
				</motion.ul>
			</nav>

			<ChatBox open={isChatOpen} />
		</header>
	);
}

function ChatBox({ open }) {
	const [chat, setChat] = useState(["Ask about me!"]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const prompt = e.target[0].value;
		e.target[0].value = "";

		setChat((prev) => [...prev, prompt]);

		// TODO: fetching to model, add response to chat, disabable button until response is received
		setChat((prev) => [...prev, "Sorry, out of service!"]);
	};

	return (
		<motion.div className={sty.chatWrap} animate={open ? { x: 0 } : { x: "100%" }} onSubmit={(e) => handleSubmit(e)}>
			<div className={sty.chatBox}>
				{chat.map((c, i) => (
					<p
						key={i}
						className={`${sty.chatText} ${
							i % 2 === 1
								? "rounded-tr-none self-end"
								: "rounded-tl-none bg-gradient-to-br from-yellow-300 to-amber-500"
						}`}
					>
						{c}
					</p>
				))}
			</div>

			<form action="" className={sty.chatForm}>
				<input type="text" name="prompt" placeholder="What is Ade full name?" className={sty.chatInput} />

				<button type="submit" className={sty.chatButton}>
					<SendIcon />
				</button>
			</form>
		</motion.div>
	);
}

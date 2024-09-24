import LogoIcon from "@/assets/icons/LogoIcon";
import MenuIcon from "@/assets/icons/MenuIcon";
import StarIcon from "@/assets/icons/StarIcon";
import SendIcon from "@/assets/icons/SendIcon";
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
	container: "pointer-events-none z-50 fixed w-full h-screen",

	headerWrap: "pointer-events-auto absolute top-0 w-full p-4 flex justify-between items-center",
	logo: "z-50 w-10 sm:w-12 lg:w-14 aspect-square fill-zinc-300 *:w-full *:h-full",

	navWrap: "pointer-events-none absolute right-0",
	listWrap: "pointer-events-auto w-screen min-h-screen bg-zinc-950/70 backdrop-blur-sm flex flex-col justify-between",
	list: "ps-8 sm:ps-20 lg:ps-32 relative font-decor tracking-widest leading-none text-zinc-950 text-shadow-border hover:bg-yellow-400/40 hover:text-shadow-yellow-400      before:absolute before:top-1/2 before:-left-6 sm:before:-left-6 lg:before:-left-8 before:-translate-y-1/2 before:-translate-x-1/2 before:w-4 before:aspect-square before:rounded-full before:border-2",

	chatWrap:
		"pointer-events-auto z-20 absolute right-0 w-full sm:max-w-[48rem] h-screen p-8 pe-12 pt-14 backdrop-blur-sm bg-zinc-950/70 flex flex-col",
	chatBox: "overflow-y-auto h-full p-4 rounded-t-xl border-2 border-b-0 border-zinc-700 flex flex-col gap-4",
	chatText: "w-fit p-2 rounded-lg bg-zinc-300 font-sans font-semibold tracking-wide text-lg text-zinc-950",
	chatForm: "overflow-hidden h-16 rounded-b-xl border-2 border-zinc-700 flex",
	chatInput: "size-full px-4 bg-transparent font-sans font-bold text-lg text-zinc-300 placeholder:text-zinc-500",
	chatButton: "h-full aspect-square fill-zinc-950 bg-gradient-to-br from-yellow-300 to-amber-500 *:size-full"
};

const vars = {
	ul: {
		hidden: {
			x: "100%",
			paddingTop: "30vh",
			paddingBottom: "30vh"
		},
		visible: {
			x: 0,
			paddingTop: "10vh",
			paddingBottom: "10vh"
		}
	},
	li: {
		hidden: {
			fontSize: "1rem"
		},
		visible: {
			fontSize: "5rem"
		}
	},
	chat: {
		hidden: {
			x: "100%"
		},
		visible: {
			x: 0
		}
	},
	transition: {
		duration: 0.3,
		ease: "easeInOut"
	}
};

export default function Navigation({ hovers }) {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isChatOpen, setIsChatOpen] = useState(false);
	const [activeNav, setActiveNav] = useState(0);

	const handleMenu = () => {
		setIsNavOpen((n) => !n);
	};
	const handleChat = () => {
		setIsChatOpen((n) => !n);
	};

	// Scroll Effect & Active Navigation
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
			{/* Header */}
			<div className={sty.headerWrap}>
				<button
					type="button"
					aria-label="Home"
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
						type="button"
						aria-label="AI Chat"
						onClick={handleChat}
						className={sty.logo}
						animate={isChatOpen ? { rotate: 135 } : { rotate: 0 }}
					>
						<StarIcon />
					</motion.button>

					<motion.button
						type="button"
						aria-label="Menu"
						onClick={handleMenu}
						className={sty.logo}
						animate={isNavOpen ? { rotate: 180 } : { rotate: 0 }}
					>
						<MenuIcon />
					</motion.button>
				</div>
			</div>

			{/* Navigation Menu */}
			<nav ref={(node) => hovers.current.push([node, "OUTLINE"])} className={sty.navWrap}>
				<motion.ul
					className={sty.listWrap}
					variants={vars.ul}
					initial="hidden"
					animate={isNavOpen ? "visible" : "hidden"}
					transition={vars.transition}
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
								className={`${sty.list} ${
									activeNav == i
										? "before:border-yellow-400 text-shadow-yellow-400"
										: "before:border-zinc-300 text-shadow-zinc-300"
								}`}
								variants={vars.li}
								initial="hidden"
								animate={isNavOpen ? "visible" : "hidden"}
								transition={vars.transition}
							>
								{list.title}
							</motion.li>
						</a>
					))}
				</motion.ul>
			</nav>

			{/* AI Chat Box */}
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
		<motion.div
			className={sty.chatWrap}
			variants={vars.chat}
			initial="hidden"
			animate={open ? "visible" : "hidden"}
			transition={vars.transition}
			onSubmit={(e) => handleSubmit(e)}
		>
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

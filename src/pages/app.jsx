import Cursor from "@/components/molecules/Cursor";
import Home from "@/components/template/Home";
import About from "@/components/template/About";
import Portfolio from "@/components/template/Portfolio";
import Contact from "@/components/template/Contact";
import Mark from "@/components/template/Mark";
import Navigation from "@/components/template/Navigation";
import { useRef } from "react";
import { isMobile } from "@/helper/commonHelper";

export default function App() {
	const hovers = useRef([]);

	return (
		<main className="cursor-none relative -z-0 bg-slate-950">
			<Navigation />

			<Home />

			<About hovers={hovers} />

			<Portfolio hovers={hovers} />

			<Contact />

			<Mark />

			{!isMobile() && <Cursor hovers={hovers.current} />}
		</main>
	);
}

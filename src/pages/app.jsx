import Cursor from "@/components/molecules/Cursor";
import Home from "@/components/template/Home";
import About from "@/components/template/About";
import Portfolio from "@/components/template/Portfolio";
import Contact from "@/components/template/Contact";
import Mark from "@/components/template/Mark";
import { useRef } from "react";

export default function App() {
	const hovers = useRef([]);

	return (
		<main className="cursor-none relative -z-0 bg-slate-950">
			<Home />

			<About hovers={hovers} />

			<Portfolio hovers={hovers} />

			<Contact />

			<Mark />

			<Cursor hovers={hovers.current} />
		</main>
	);
}

import Cursor from "@/components/molecules/Cursor";
import Home from "@/components/organisms/Home";
import About from "@/components/organisms/About";

export default function App() {
	return (
		<main className="cursor-none bg-slate-950">
			<Cursor hovers={[]} />

			<Home />

			<About />
		</main>
	);
}

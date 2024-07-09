import Cursor from "@/components/Cursor";
import Home from "@/components/Home";

export default function App() {
	return (
		<div className="cursor-none bg-slate-950">
			<Cursor hovers={[]} />

			<Home />
			<Home />
		</div>
	);
}

import { useRef, useEffect, useState } from "react";
import Cursor from "@/components/Cursor";

export default function Home() {
	const hovers = useRef([]);
	const [isCursorSetup, setIsCursorSetup] = useState(false);

	useEffect(() => {
		const elements = [
			[document.getElementById("hover1"), "HOVER"],
			[document.getElementById("hover2"), "HIDDEN"],
			[document.getElementById("hover3"), <Test />]
		];
		hovers.current = elements;
		setIsCursorSetup(true);
	}, []);

	return (
		<div className="w-screen h-screen bg-slate-600 flex justify-center items-center gap-8">
			<h1 id="hover1">Home</h1>
			<h1 id="hover2">Home</h1>
			<h1 id="hover3">Home</h1>
			{isCursorSetup && <Cursor hovers={hovers.current} />}
		</div>
	);
}

function Test() {
	return (
		<div className="w-10 h-10 bg-blue-500/20">
			<h1>abcdefg</h1>
		</div>
	);
}

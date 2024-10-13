import { useEffect } from "react";

export default function useHashRouting() {
	useEffect(() => {
		const hash = window.location.hash;

		if (hash) {
			const element = document.querySelector(hash);

			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, []);

	return null;
}

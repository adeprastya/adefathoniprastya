import { useEffect, useState } from "react";

export default function useFetchMark() {
	const [mark, setMark] = useState({ data: null, error: null, loading: true });

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://localhost:5173/adefathoniprastya/mark.json", { method: "GET" });

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const data = await response.json();

				setMark((prev) => ({ ...prev, data: data }));
			} catch (error) {
				setMark((prev) => ({ ...prev, error: error.message }));
			} finally {
				setMark((prev) => ({ ...prev, loading: false }));
			}
		};

		fetchData();
	}, []);

	return { mark };
}

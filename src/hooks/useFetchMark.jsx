import { useEffect, useState } from "react";

const marks = [
	{
		id: 1,
		content: "Hello",
		sender: "anonymous",
		timestamp: "2022-01-01T00:00:00.000Z"
	},
	{
		id: 2,
		content: "Hai",
		sender: "anonymous",
		timestamp: "2022-01-01T00:00:00.000Z"
	},
	{
		id: 3,
		content: "Holla",
		sender: "anonymous",
		timestamp: "2022-01-01T00:00:00.000Z"
	},
	{
		id: 4,
		content: "Ola",
		sender: "anonymous",
		timestamp: "2022-01-01T00:00:00.000Z"
	},
	{
		id: 5,
		content: "Bonjour",
		sender: "anonymous",
		timestamp: "2022-01-01T00:00:00.000Z"
	},
	{
		id: 6,
		content: "Good Luck",
		sender: "anonymous",
		timestamp: "2022-01-01T00:00:00.000Z"
	},
	{
		id: 7,
		content: "Good Morning",
		sender: "anonymous",
		timestamp: "2022-01-01T00:00:00.000Z"
	},
	{
		id: 8,
		content: "Good Night",
		sender: "anonymous",
		timestamp: "2022-01-01T00:00:00.000Z"
	},
	{
		id: 9,
		content: "Good Afternoon",
		sender: "anonymous",
		timestamp: "2022-01-01T00:00:00.000Z"
	},
	{
		id: 10,
		content: "Good Evening",
		sender: "anonymous",
		timestamp: "2022-01-01T00:00:00.000Z"
	},
	{
		id: 11,
		content: "Happy Birthday",
		sender: "anonymous",
		timestamp: "2022-01-01T00:00:00.000Z"
	},
	{
		id: 12,
		content: "Happy New Year",
		sender: "anonymous",
		timestamp: "2022-01-01T00:00:00.000Z"
	}
];

export default function useFetchMark() {
	const [mark, setMark] = useState({ data: null, error: null, loading: true });

	useEffect(() => {
		const fetchData = async () => {
			// try {
			// 	const response = await fetch("/mark", { method: "GET" });

			// 	if (!response.ok) {
			// 		throw new Error(`HTTP error! Status: ${response.status}`);
			// 	}

			// 	const data = await response.json();

			// 	setMark((prev) => ({ ...prev, data: data }));
			// } catch (error) {
			// 	setMark((prev) => ({ ...prev, error: error.message }));
			// } finally {
			// 	setMark((prev) => ({ ...prev, loading: false }));
			// }
			setMark((prev) => ({ ...prev, data: marks, loading: false }));
		};

		fetchData();
	}, []);

	return { mark };
}

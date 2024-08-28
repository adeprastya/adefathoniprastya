import { useEffect, useState } from "react";

const URL = "api/app/data-glstzff/endpoint/data/v1/action";
const API_KEY = "UCuYPrndwQD4muLlJZZXzctkWyLMtteAwdFCRQnGAiXrEFchkWoKyMfg28YiQLZw";

async function fetchFromAPI(endpoint, method, body = null) {
	const response = await fetch(endpoint, {
		method,
		headers: {
			apiKey: API_KEY,
			"Content-Type": "application/json",
			Accept: "application/json"
		},
		body: body ? JSON.stringify(body) : null
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	return response.json();
}

export default function useFetchMark() {
	const [mark, setMark] = useState({ data: null, error: null, loading: true });
	const [insert, setInsert] = useState({ fn: insertFn, response: null, loading: false });

	async function findFn() {
		setMark((prev) => ({ ...prev, loading: true }));

		try {
			const data = await fetchFromAPI(URL + "/find", "POST", {
				dataSource: "Cluster0",
				database: "personal-web",
				collection: "mark",
				sort: { date_created: -1 },
				limit: 20
			});

			setMark((prev) => ({ ...prev, data: data.documents }));
		} catch (error) {
			setMark((prev) => ({ ...prev, error: error.message }));
		} finally {
			setMark((prev) => ({ ...prev, loading: false }));
		}
	}

	async function insertFn(content, sender) {
		setInsert((prev) => ({ ...prev, loading: true }));

		try {
			const data = await fetchFromAPI(URL + "/insertMany", "POST", {
				dataSource: "Cluster0",
				database: "personal-web",
				collection: "mark",
				documents: [
					{
						date_created: new Date(),
						content,
						sender
					}
				]
			});

			setInsert((prev) => ({ ...prev, response: data }));
		} catch (error) {
			setInsert((prev) => ({ ...prev, response: error.message }));
		} finally {
			setInsert((prev) => ({ ...prev, loading: false }));

			findFn();
		}
	}

	useEffect(() => {
		findFn();
	}, []);

	return { mark, insert };
}

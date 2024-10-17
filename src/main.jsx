import React from "react";
import ReactDOM from "react-dom/client";
import "@/assets/css/index.css";
import ContextProvider from "@/contexts/ContextProvider";
import App from "@/App";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Analytics />

		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>
);

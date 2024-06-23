import React from "react";
import ReactDOM from "react-dom/client";
import "@/assets/css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "@/context/ContextProvider";
import Intro from "@/pages/intro";
import Home from "@/pages/home";

const router = createBrowserRouter([
	{
		path: "/adefathoniprastya",
		element: <Intro />
	},
	{
		path: "/adefathoniprastya/home",
		element: <Home />
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider>
			<RouterProvider router={router} />
		</ContextProvider>
	</React.StrictMode>
);

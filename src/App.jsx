import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuoteGenerator from "./pages/QuoteGenerator";


const App = () => {
	return (
		<div className="dark:bg-zinc-900 bg-white transition duration-300">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/quoteGenerator/:id" element={<QuoteGenerator />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;

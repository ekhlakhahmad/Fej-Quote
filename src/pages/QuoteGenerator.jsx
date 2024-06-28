import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import swami from "../assets/Swami_Vivekananda";
import apj from "../assets/DrAPJAbdulKalam";
import albert from "../assets/Albert";
import chanakya from "../assets/Chanakya_Niti";
import Mahatma_Gandhi from "../assets/Mahatma_Gandhi";
import Education from "../assets/Education";
import Martin_Luther from "../assets/Martin_Luther";

const QuoteGenerator = () => {
	const navigate = useNavigate();
	const [currentIndex, setCurrentIndex] = useState(0);
	const data = [
		swami,
		apj,
		albert,
		chanakya,
		Mahatma_Gandhi,
		Education,
		Martin_Luther,
	];
	const params = useParams();

	if (params.id >= data.length) {
		return <h1>Data is not available</h1>;
	}

	const nextQuote = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % data[params.id].length);
	};

	const { Hiquote, Enquote } = data[params.id][currentIndex];

	return (
		<div className="h-screen flex flex-col justify-center items-center">
			<div className="w-[90%] max-w-screen-md flex flex-col p-8 gap-5 border-2 border-black rounded-lg dark:text-white dark:border-white">
				<div className="inline-block text-center">
					<ImQuotesLeft className="inline relative -top-2 text-[#dd0201] mx-1" />
					<span>{Hiquote}</span>
					<ImQuotesRight className="inline relative -top-2 text-[#dd0201] mx-1" />
				</div>
				<div className="inline-block text-center">
					<ImQuotesLeft className="inline relative -top-2 text-[#dd0201] mx-1" />
					<span>{Enquote}</span>
					<ImQuotesRight className="inline relative -top-2 text-[#dd0201] mx-1" />
				</div>
				<div className="flex justify-between items-center mt-10">
					<button
						onClick={() => navigate("/")}
						className="px-4 py-2 text-sm md:text-base rounded-md hover:bg-[#e75917] bg-[#ff5001] text-white">
						Back to Home
					</button>
					<button
						onClick={nextQuote}
						className="px-4 py-2 text-sm md:text-base rounded-md hover:bg-[#d5323d] bg-[#f7414c] text-white">
						Next Quote
					</button>
				</div>
			</div>
		</div>
	);
};

export default QuoteGenerator;

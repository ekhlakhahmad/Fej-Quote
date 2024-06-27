import React, { useState } from "react";
import { data } from "../assets/Dataset";
import Card from "../components/Card";
import { Link } from "react-router-dom";


const Home = () => {
	return (
		<div className="flex justify-center py-1">
			<div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-2">
				{data?.map((d, index) => (
					<div key={index}>
						<Link to={`/quoteGenerator/${index}`}>
							<Card data={d} />
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;

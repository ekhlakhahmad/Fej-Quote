import React from "react";

const Card = ({ data }) => {
	return (
		<div className="w-[246px]  mx-auto aspect-square flex flex-col items-center p-1 bg-black dark:bg-white dark:text-black rounded-md">
			<div className="w-[238px] aspect-square">
				<img
					className="w-full h-full object-cover rounded-t-md"
					src={`./Images/${data?.url}`}
					alt={data.name}
				/>
			</div>
			<p className="text-xl text-white dark:text-black">{data.name}</p>
		</div>
	);
};

export default Card;

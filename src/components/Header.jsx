import React from "react";
import logo from "../../public/FejComputer.png";
import Switcher from "./Switcher";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="flex items-center justify-between px-8 py-1 shadow-md dark:bg-black bg-white sticky top-0 z-10">
			<Link to="/">
				<img src={logo} alt="" className="w-14" />
			</Link>
			<h2 className="text-2xl dark:text-white text-black">Fej Random Quote</h2>
			<button>
				<Switcher />
			</button>
		</div>
	);
};

export default Header;

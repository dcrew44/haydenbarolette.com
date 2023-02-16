import React from "react";
import { headshot } from "../assets";
const Headshot = () => {
	return (
		<div className="absolute bottom-0 right-0">
			<img src={headshot} className="scale-[25%] " alt="headshot" />
		</div>
	);
};

export default Headshot;

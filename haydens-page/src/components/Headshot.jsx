import React from "react";
import { headshot } from "../assets";
function Headshot() {
	return (
		<div className="absolute bottom-0 right-0 h-[75%] w-auto">
			<img src={headshot} className="h-full w-full" alt="headshot" />
		</div>
	);
}

export default Headshot;

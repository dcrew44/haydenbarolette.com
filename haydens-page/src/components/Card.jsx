import React from "react";
import { leftarrow, rightarrow } from "../assets";

const Card = () => {
	const [isHoveringLeft, setIsHoveringLeft] = React.useState(false);
	const [isHoveringRight, setIsHoveringRight] = React.useState(false);

	const handleMouseEnterLeft = () => {
		setIsHoveringLeft(true);
	};

	const handleMouseLeveLeft = () => {
		setIsHoveringLeft(false);
	};
	const handleMouseEnterRight = () => {
		setIsHoveringRight(true);
	};
	const handleMouseLeveRight = () => {
		setIsHoveringRight(false);
	};
	return (
		<div
			className={`w-[375px] h-[525px] bg-background p-3 rounded-xl cursor-pointer ${
				isHoveringLeft ? "bg-blend-darken" : ""
			} ${isHoveringRight ? "bg-blend-darken" : ""}`}
		>
			<div className="flex float-left  h-full w-[64px] items-center m-0">
				<img
					src={leftarrow}
					className="scale-[70%] hover:animate-bounce opacity-90"
					alt="left arrow"
					onMouseEnter={handleMouseEnterLeft}
					onMouseLeave={handleMouseLeveLeft}
				/>
			</div>

			<div className="flex float-right h-full items-center">
				<img
					src={rightarrow}
					className="scale-[70%] hover:animate-bounce-reverse opacity-90"
					alt="right arrow"
					onMouseEnter={handleMouseEnterRight}
					onMouseLeave={handleMouseLeveRight}
				/>
			</div>
		</div>
	);
};

export default Card;

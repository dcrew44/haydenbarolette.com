import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
	return (
		<div className="flex p-5">
			<span className="block text-[35px] tracking-[5px] text-[#3d535f] font-bold leading-[1] ">
				<span className="block">Hello</span>
				<h1 className=" inline-block text-[70px] font-bold  text-[#3d535f] ">
					I'm&nbsp;
					<span className="inline-block text-[#7f00ff] capitalize">
						<Typewriter
							options={{
								strings: [" Hayden", " a Coder", " a Student"],
								autoStart: true,
								loop: true,
							}}
						/>{" "}
					</span>
					<span className="inline-block text-[#7f00ff] capitalize">...</span>
				</h1>
				<p className="block w-[1280px]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
					voluptatibus eum accusantium distinctio ullam. Magni eligendi
					consequuntur sunt odit repellat iure at voluptate repellendus eaque
					consectetur, dicta harum molestias ipsa.
				</p>
			</span>
		</div>
	);
};

export default Hero;

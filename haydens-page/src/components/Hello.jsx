import React from "react";
import Typewriter from "typewriter-effect";

const Hello = () => {
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
						/>
					</span>
				</h1>
			</span>
		</div>
	);
};

export default Hello;

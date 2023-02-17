import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
	return (
		<nav className="p-2 flex w-full  items-end">
			<ul className="ml-auto w-auto list-none sm:flex hidden justify-end items-end flex-col  ">
				{footerLinks.map((link, index) => (
					<li
						key={link.id}
						className={` w-max mr-auto items-start social-links cursor-pointer text-[16px] mt-1 mb-1 
					`}
					>
						<img
							src={link.icon}
							alt={link.id}
							className="inline-block h-[25px] w-[25px]"
						/>

						<a href={`${link.url}`}>{`  ${link.id}`}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Footer;

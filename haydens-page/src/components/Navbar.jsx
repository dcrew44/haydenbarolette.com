import React from 'react';
import { logo } from '../assets';
import { navLinks } from '../constants/index';
function Navbar() {
	return (
		<nav className="w-full flex py-4 justify-between items-center navbar">
			<img src={logo} alt="logo" className="h-28 w-39" />

			<ul className="list-none sm:flex hidden justify-end items-center flex-1 drop-shadow-sm">
				{navLinks.map((link, index) => (
					<li
						key={link.id}
						className={`font-hyperion font-normal cursor-pointer text-[16px] ${
							index == navLinks.length - 1 ? 'mr-0' : 'mr-10'
						} text-white`}
					>
						<a href={`#${link.id}`}>{link.title}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navbar;

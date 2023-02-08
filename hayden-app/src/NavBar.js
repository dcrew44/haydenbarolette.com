const NavBar = () => {
	return (
		<div
			className="p-50 fixed top-0 z-10 
            m-0 flex h-16
             w-screen flex-row bg-gray-900 text-white shadow-lg"
		>
			<NavBarButton button="Home" />
			<NavBarButton button="About" />
			<NavBarButton button="Contact" />
		</div>
	);
};

const NavBarButton = ({ button }) => (
	<div className="navbar-button">{button}</div>
);

export default NavBar;

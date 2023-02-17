import styles from "./style";
import { Navbar, Hero, Footer, Headshot } from "./components";

const App = () => {
	return (
		<div className="bg-background w-full overflow-hidden">
			<div className={`${styles.paddingX}  ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>

			<div className={`gradient-bg h-screen  relative`}>
				<div className={`w-auto`}>
					<Hero />
				</div>
				<div className={`flex`}>
					<Headshot />
				</div>
			</div>
			<div className={`${styles.paddingX}  `}>
				<div className={`w-full}`}>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default App;

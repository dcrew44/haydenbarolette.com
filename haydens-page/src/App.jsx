import styles from "./style";
import { Navbar, Hero, Footer, Hello, Headshot } from "./components";
import { headshot } from "./assets";
const App = () => {
	return (
		<div className="bg-background w-full overflow-hidden">
			<div className={`${styles.paddingX}  ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>

			<div className={`gradient-bg h-screen relative`}>
				<div className="float-right">
					<Headshot />
				</div>
				<div className={`${styles.boxWidth}`}>
					<Hello />
				</div>

				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>
			<div className={`${styles.paddingX}  ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default App;

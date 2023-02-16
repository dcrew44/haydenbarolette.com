import styles from "./style";
import { Navbar, Hero, Footer, Hello } from "./components";
import { headshot } from "./assets";
const App = () => {
	return (
		<div className="bg-background w-full overflow-hidden">
			<div className={`${styles.paddingX}  ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>

			<div className={`gradient-bg h-screen ${styles.flexStart} relative`}>
				<div className={`${styles.boxWidth}`}>
					<Hello />
				</div>
				<div className="absolute bottom-0 right-0">
					<img src={headshot} className="scale-[25%] " alt="headshot" />
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

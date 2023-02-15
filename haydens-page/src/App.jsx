import styles from './style';
import { Navbar, Hero } from './components';
const App = () => {
	return (
		<div className="bg-background w-full overflow-hidden">
			<div className={`${styles.paddingX}  ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>

			<div className={`gradient-bg h-screen ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>
		</div>
	);
};

export default App;

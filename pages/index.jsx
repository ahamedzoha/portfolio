import styles from "../styles/Home.module.scss";
import hero from "../assets/svg/hero.svg";
import circle from "../assets/circle.png";

const Home = () => {
    return (
        <div className={styles.container}>
            <main>
                <div className={styles.text__container}>
                    <img src={circle} alt="circle" />
                    <h3>Hi there! 👋</h3>
                    <h1>I am Azaz</h1>
                    <p>
                        I develop beautiful web applications and websites using
                        React/Next.
                    </p>
                </div>
                <div className={styles.illustration__container}>
                    <img src={hero} alt="illustration" />
                </div>
            </main>
        </div>
    );
};

export default Home;

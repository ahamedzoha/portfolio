import styles from "../styles/Home.module.scss";
import hero from "../assets/svg/hero.svg";
import circle from "../assets/circle.png";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div className={styles.container}>
            <main className={styles.container__hero}>
                <div className={styles.text__container}>
                    <motion.img
                        src={circle}
                        alt="circle"
                        animate={{ x: 5 }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                    />
                    <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            type: "spring",

                            // delay: 0.5,
                        }}
                    >
                        Hi there! 👋
                    </motion.h3>
                    <motion.h1
                        initial={{ scale: 2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            duration: 1.2,
                            delay: 1.8,
                        }}
                    >
                        I am Azaz
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1.2,
                            delay: 3.2,
                        }}
                    >
                        I develop beautiful web applications and websites using
                        React/Next.
                    </motion.p>
                </div>
                <div className={styles.illustration__container}>
                    <img src={hero} alt="illustration" />
                </div>
            </main>
        </div>
    );
};

export default Home;

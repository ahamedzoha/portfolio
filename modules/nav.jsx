import styles from "./styles/nav.module.scss";
import Status from "../components/status";

const Nav = () => {
    return (
        <div className={styles.nav__container}>
            <div className={styles.nav__status}>
                <Status />
            </div>
            <div className={styles.nav__links}>
                <span>
                    <a href="https://github.com/ahamedzoha" target="_blank">
                        github
                    </a>
                </span>
                <span>
                    <a
                        href="https://www.linkedin.com/in/azazahamed/"
                        target="_blank"
                    >
                        linkedIn
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Nav;

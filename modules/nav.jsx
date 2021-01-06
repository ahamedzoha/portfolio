import styles from "./styles/nav.module.scss";
import Status from "../components/status";

const Nav = () => {
    return (
        <div className={styles.nav__container}>
            <div className={styles.nav__status}>
                <Status />
            </div>
            <div className={styles.nav__links}>
                <span>github</span>
                <span>linkedIn</span>
            </div>
        </div>
    );
};

export default Nav;

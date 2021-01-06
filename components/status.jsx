import styles from "./styles/status.module.scss";
import statusLightGreen from "../assets/svg/status-light-good.svg";
import statusLightAmber from "../assets/svg/status-light-progress.svg";
import statusLightRed from "../assets/svg/status-light-urgent.svg";

const Status = () => {
    return (
        <div className={styles.status__container}>
            {/* <div className="led"></div> */}
            <img src={statusLightGreen} alt="status" />
            <span>status: currently working at intelligent machines ...</span>
        </div>
    );
};

export default Status;

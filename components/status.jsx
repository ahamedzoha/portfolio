import styles from "./styles/status.module.scss";

const Status = () => {
    return (
        <div className={styles.status__container}>
            <div className="led"></div>
            <span>status: currently working at intelligent machines ...</span>
        </div>
    );
};

export default Status;

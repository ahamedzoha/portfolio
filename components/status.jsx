import styles from "./styles/status.module.scss";
import statusLightGreen from "../assets/svg/status-light-good.svg";
import statusLightAmber from "../assets/svg/status-light-progress.svg";
import statusLightRed from "../assets/svg/status-light-urgent.svg";
import { motion } from "framer-motion";

const Status = () => {
    return (
        <div className={styles.status__container}>
            {/* <div className="led"></div> */}
            <motion.img
                // initial={{}}
                whileHover={{
                    scale: 1.1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 0 }}
                src={statusLightRed}
                alt="status"
            />
            <span>status: currently working at intelligent machines ...</span>
        </div>
    );
};

export default Status;

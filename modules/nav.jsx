import styles from "./styles/nav.module.scss"
import Status from "../components/status"
import Link from "next/link"
import { motion } from "framer-motion"

const NavLinks = [
  {
    label: "github",
    link: "https://github.com/ahamedzoha",
    target: "_blank",
  },
  {
    label: "linkedIn",
    link: "https://www.linkedin.com/in/azazahamed/",
    target: "_blank",
  },
  {
    label: "projects",
    link: "/projects",
    target: "",
  },
]

const Nav = () => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_container__wrapper}>
        <Status />
        <div className={styles.nav__links}>
          <ul>
            {NavLinks.map((navItem) => (
              <motion.li
                whileHover={{
                  scale: 1.2,
                  color: "#ffa014",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                key={navItem.label}
              >
                <Link href={navItem.link}>
                  <a target={navItem.target}>{navItem.label}</a>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav

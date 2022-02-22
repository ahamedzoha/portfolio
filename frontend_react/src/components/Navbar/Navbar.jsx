import { useState } from "react"
import "./Navbar.scss"
import { images } from "../../constants"
import { HiMenuAlt4, HiX } from "react-icons/hi"
import { motion } from "framer-motion"

const navLinks = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "About",
    link: "about",
  },

  {
    name: "Work",
    link: "work",
  },
  {
    name: "Skills",
    link: "skills",
  },
  {
    name: "Contact",
    link: "contact",
  },
]

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {navLinks.map((link, index) => (
          <li key={`${link}${index}`} className="app__flex p-text">
            <div className="app__navbar-dots" />
            <a href={`#${link.link}`}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(!toggle)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(!toggle)} />
            <ul className="app__navbar-links-mobile">
              {navLinks.map((link, index) => (
                <li key={`${link}${index}`}>
                  <a onClick={() => setToggle(!toggle)} href={`#${link.link}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

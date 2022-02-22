import React from "react"
import "./Navbar.scss"
import { images } from "../../constants"

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
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {navLinks.map((link, index) => (
          <li key={`${link}${index}`} className="app__flex p-text">
            <div />
            <a href={`#${link.link}`}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar

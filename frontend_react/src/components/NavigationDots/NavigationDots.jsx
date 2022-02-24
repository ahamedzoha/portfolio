import React from "react"
import "./NavigationDots.scss"
import navigationLinks from "../../constants/navigationLinks"

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {navigationLinks.map((link, index) => (
        <a
          key={`${link}${index}`}
          href={`#${link.link}`}
          className="app__navigation-dot"
          style={active === link.link ? { backgroundColor: "#313bac" } : {}}
        />
      ))}
    </div>
  )
}

export default NavigationDots

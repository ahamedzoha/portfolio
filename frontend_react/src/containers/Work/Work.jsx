import { useState, useEffect } from "react"
import "./Work.scss"
import { AiFillEye, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import { AppWrap } from "../../wrapper"
import { urlFor, client } from "../../client"

const filterList = [
  "All",
  "React Web App",
  "Blockchain App",
  "Gatsby Web App",
  "Next.js Web App",
]

const Work = () => {
  const [filter, setFilter] = useState("All")
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [portfolios, setPortfolios] = useState([])

  useEffect(() => {
    const query = `*[_type == "works"]`
    client
      .fetch(query)
      .then((res) => {
        setPortfolios(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <h2 className="head-text" style={{ marginTop: "1.8rem" }}>
        My Creative <span>Portfolio</span> <span>Section</span>
      </h2>
      <div className="app__work-filter">
        {filterList.map((item, index) => (
          <div
            key={item + index}
            onClick={() => setFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              filter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      ></motion.div>
    </>
  )
}

export default AppWrap(Work, "portfolio")

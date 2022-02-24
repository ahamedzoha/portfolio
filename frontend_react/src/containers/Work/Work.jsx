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
  const [filterPortfolio, setFilterPortfolio] = useState([])

  useEffect(() => {
    const query = `*[_type == "works"]`
    client
      .fetch(query)
      .then((res) => {
        setPortfolios(res)
        setFilterPortfolio(res)
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
      >
        {filterPortfolio.map((portfolio, index) => (
          <div className="app__work-item app__flex" key={portfolio + index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(portfolio.imgUrl)} alt={portfolio.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a
                  href={portfolio.projectLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={portfolio.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(Work, "portfolio")

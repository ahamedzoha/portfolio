import { useState, useEffect } from "react"
import "./Work.scss"
import { AiFillEye, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import { AppWrap, MotionWrap } from "../../wrapper"
import { urlFor, client } from "../../client"

const queryAllTags = `*[_type == 'works' && count(tags) > 0].tags[]`
const query = `*[_type == "works"]`

const Work = () => {
  const [filter, setFilter] = useState("All")
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [tags, setTags] = useState([])
  const [portfolios, setPortfolios] = useState([])
  const [filterPortfolio, setFilterPortfolio] = useState([])

  const handleFilter = (item) => {
    setFilter(item)

    //Animations
    setAnimateCard({ y: 100, opacity: 0 })
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 })

      //filter portfolios accroding to filter
      if (item === "All") {
        setFilterPortfolio(portfolios)
      } else {
        const filteredPortfolios = portfolios.filter((portfolio) =>
          portfolio.tags[0].value.includes(item)
        )
        setFilterPortfolio(filteredPortfolios)
      }
    }, 500)
  }

  const fetchTags = async () => {
    const tags = await client.fetch(queryAllTags)
    const uniqueTags = tags.filter((value, index) => {
      const _value = JSON.stringify(value)
      return (
        index ===
        tags.findIndex((obj) => {
          return JSON.stringify(obj) === _value
        })
      )
    })
    setTags([{ label: "All", value: "All" }, ...uniqueTags])
  }

  const fetchPortfolios = async () => {
    await client
      .fetch(query)
      .then((res) => {
        setPortfolios(res)
        setFilterPortfolio(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchTags()
    fetchPortfolios()
  }, [])

  return (
    <>
      <h2 className="head-text" style={{ marginTop: "1.8rem" }}>
        My Creative <span>Portfolio</span> <span>Section</span>
      </h2>
      <div className="app__work-filter">
        {tags.map((item, index) => (
          <div
            key={item.value + index}
            onClick={() => handleFilter(item.value)}
            className={`app__work-filter-item app__flex p-text ${
              filter === item.value ? "item-active" : ""
            }`}
          >
            {item.value}
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
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{portfolio.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {portfolio.description}
              </p>

              <div className="app__work-tag app__flex">
                {portfolio.tags.map((tag, index) => (
                  <p key={tag + index} className="p-text">
                    {tag.label}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

// export default AppWrap(Work, "portfolio")

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "portfolio",
  "app__primarybg"
)

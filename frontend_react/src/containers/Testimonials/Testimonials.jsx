import { useState, useEffect } from "react"
import "./Testimonials.scss"
import { motion } from "framer-motion"
import { AppWrap, MotionWrap } from "../../wrapper"
import { urlFor, client } from "../../client"
import { HiChevronRight, HiChevronLeft } from "react-icons/hi"

const Testimonials = () => {
  const [companies, setCompanies] = useState([])
  const [recommendations, setRecommendations] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  const fetchCompanies = async () => {
    const query = `*[_type == "companies"]`

    await client
      .fetch(query)
      .then((res) => {
        setCompanies(res)
      })
      .catch((err) => console.log(err))
  }
  const fetchRecommendations = async () => {
    const query = `*[_type == "recommendations"]`

    await client
      .fetch(query)
      .then((res) => {
        setRecommendations(res)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchCompanies()
    fetchRecommendations()
  }, [])

  const recc = recommendations[currentIndex]

  return (
    <>
      {recommendations.length && (
        <>
          <div className="app__testimonials-item app__flex">
            <img src={urlFor(recc.imageurl)} alt="recommendation" />
            <div className="app__testimonials-content">
              <p className="p-text">{recc.feedback}</p>

              <div className="">
                <h4 className="bold-text">{recc.name}</h4>
                <h5 className="p-text">{recc.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonials-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? recommendations.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === recommendations.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonials-companies app__flex">
        {companies?.map((company, index) => (
          <motion.div
            key={company + index}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <img src={urlFor(company.imgUrl)} alt={company.name} srcset="" />
          </motion.div>
        ))}
      </div>
    </>
  )
}

// export default Testimonials
export default AppWrap(
  MotionWrap(Testimonials, "app__testimonials"),
  "testimonials",
  "app__primarybg"
)

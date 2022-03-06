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

  return <div>Testimonials</div>
}

// export default Testimonials
export default AppWrap(
  MotionWrap(Testimonials, "app__testimonials"),
  "testimonials",
  "app__whitebg"
)

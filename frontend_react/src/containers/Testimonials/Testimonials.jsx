import { useState, useEffect } from "react"
import "./Testimonials.scss"
import { motion } from "framer-motion"
import { AppWrap, MotionWrap } from "../../wrapper"
import { urlFor, client } from "../../client"
import { HiChevronRight, HiChevronLeft } from "react-icons/hi"

const Testimonials = () => {
  return <div>Testimonials</div>
}

// export default Testimonials
export default AppWrap(
  MotionWrap(Testimonials, "app__testimonials"),
  "testimonials",
  "app__whitebg"
)

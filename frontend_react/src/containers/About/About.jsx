import "./About.scss"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { images } from "../../constants"
import { urlFor, client } from "../../client"
import { AppWrap, MotionWrap } from "../../wrapper"

const about = [
  {
    title: "Frontend Development",
    description:
      "I have experience in building websites and web applications using React, Redux, and Sass. I have also worked on a number of other projects using React, Redux, and Sass.",
    imgUrl: images.about01,
  },
  {
    title: "Blockchain Development",
    description:
      "I am a blockchain developer with a passion for building decentralized applications.",
    imgUrl: images.about02,
  },
  {
    title: "JAMstack Development",
    description:
      "I have experience in building websites and web applications using React, Redux, and Sass.",
    imgUrl: images.about03,
  },
  {
    title: "Test-Driven Development",
    description:
      "I am a UX and Web Animations developer with a passion for designing and animating web applications.",
    imgUrl: images.about04,
  },
]

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = `*[_type == "abouts"]`

    client
      .fetch(query)
      .then((res) => {
        setAbouts(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <h2 className="head-text" style={{ marginTop: "1.8rem" }}>
        I Know that <span>Good Development</span> <br /> Means{" "}
        <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts &&
          abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg")

import { useState, useEffect } from "react"
import "./Skills.scss"
import { AppWrap } from "../../wrapper"
import { motion } from "framer-motion"
import { urlFor, client } from "../../client"
import ReactTooltip from "react-tooltip"

const Skills = () => {
  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])

  const fetchSkills = async () => {
    const query_skill = '*[_type == "experiences"]'
    const query_exp = '*[_type == "skills"]'
    await client
      .fetch(query_skill)
      .then((res) => setSkills(res))
      .catch((err) => console.log(err))

    await client
      .fetch(query_exp)
      .then((res) => setExperiences(res))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchSkills()
  }, [])

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name + index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(Skills, "skills")

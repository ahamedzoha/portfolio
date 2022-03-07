import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { AppWrap, MotionWrap } from "../../wrapper"
import { urlFor, client } from "../../client"
import { images } from "../../constants"

import "./Footer.scss"

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const { name, email, message } = formData

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    }

    client.create(contact).then(() => {
      setLoading(false)
      setIsFormSubmitted(true)
    })
  }

  return (
    <>
      <h2 className="head text">Grab a coffee with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:ahamed.zoha@gmail.com" className="p-text">
            ahamed.zoha@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a href="tel:+8801878348713" className="p-text">
            +880 1787 348 713
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              id="name"
              value={name}
              onChange={handleInputChange}
              className="p-text"
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              id="name"
              value={email}
              onChange={handleInputChange}
              className="p-text"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              id="message"
              value={message}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="button"
            className="p-text"
            onclick={() => handleSubmit()}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
)

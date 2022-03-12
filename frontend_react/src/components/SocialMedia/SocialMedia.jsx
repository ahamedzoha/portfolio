import React from "react"
import "./SocialMedia.scss"

import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs"
import { SiUpwork } from "react-icons/si"

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://twitter.com/azaz_zoha"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsTwitter />
        </div>
      </a>
      <a
        href="https://www.upwork.com/freelancers/~01eec73a18df2acdd7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <SiUpwork />
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/azazahamed/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>

      <a
        href="https://github.com/ahamedzoha"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsGithub />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia

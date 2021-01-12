import styles from "../styles/Home.module.scss"
import hero from "../assets/svg/hero.svg"
import circle from "../assets/circle.png"
import pinkCircle from "../assets/svg/Pattern-pink-circle.svg"
import yellowCircle from "../assets/svg/Pattern-yellow-circle.svg"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <body>
      <div className={styles.container}>
        <main className={styles.container__hero}>
          <motion.img
            className={styles.pattern__circle}
            src={circle}
            alt="circle"
            animate={{ x: 5 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          />
          <div className={styles.text__container}>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                type: "spring",

                // delay: 0.5,
              }}
            >
              Hi there! 👋
            </motion.h3>
            <motion.h1
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 1.8,
              }}
            >
              I am Azaz
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 3.2,
              }}
            >
              I develop beautiful web applications and websites using
              React/Next.
            </motion.p>
          </div>
          <div className={styles.illustration__container}>
            <img src={hero} alt="illustration" />
          </div>
        </main>

        <section className={styles.container__contact}>
          <img
            className={styles.pattern__circle__pink}
            src={pinkCircle}
            alt="pattern"
          />
          <img
            className={styles.pattern__circle__yellow}
            src={yellowCircle}
            alt="pattern"
          />
          <div className={styles.form_container}>
            <h3>Got questions?</h3>
            <div className={styles.contact_form}>
              <form>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="e.g. smith@example.com"
                  required
                />
                <label htmlFor="message">Your Message</label>
                {/* <input
                  type="text"
                  name="message"
                  id="text"
                  placeholder="e.g. smith@example.com"
                /> */}
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="2"
                  placeholder="e.g. smith@example.com"
                  required
                ></textarea>
                <button type="submit">Send</button>
              </form>
              <div className={styles.contact_form__bg_blur}></div>
            </div>
          </div>
        </section>
        <section className={styles.container__portfolio}>
          <span>Portfolios coming soon ...</span>
        </section>
      </div>
    </body>
  )
}

export default Home

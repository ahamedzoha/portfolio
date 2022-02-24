// import logo from "./logo.svg"
import "./App.scss"
import { About, Header, Footer, Skills, Testimonials, Work } from "./containers"
import { Navbar } from "./components"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      {/* <Skills /> */}
      {/* <Testimonials /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App

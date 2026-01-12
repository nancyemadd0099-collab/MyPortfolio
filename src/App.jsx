
import './App.css'
import Aboutme from './components/Aboutme'
import Contact from './components/Contact'
import Home from './components/Home'
import LetsProject from './components/LetsProject'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Aboutme />
      <Projects />
      <LetsProject />
      <Skills />
      <Contact/>
    </>
  )
}

export default App

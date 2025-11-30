import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import data from './data/data.json'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="app">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero profile={data.profile} />
        <About about={data.about} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Contact profile={data.profile} />
      </main>
      <Footer />
    </div>
  )
}

export default App

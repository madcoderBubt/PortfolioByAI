import { useState, useEffect } from 'react'
import './App.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const API_BASE_URL = 'http://localhost:5000/api/portfolio'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_BASE_URL)
        if (!response.ok) {
          throw new Error('Failed to fetch portfolio data')
        }
        const portfolioData = await response.json()
        setData(portfolioData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  if (loading) {
    return (
      <div className="app">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <p>Loading portfolio...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="app">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column' }}>
          <p>Error: {error}</p>
          <p>Make sure the API server is running on port 5000</p>
        </div>
      </div>
    )
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

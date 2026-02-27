import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Ministry from './components/Ministry'
import Contact from './components/Contact'
import Chatbot from './components/Chatbot'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Ministry />
      <Contact />
      <Chatbot />
    </div>
  )
}

export default App

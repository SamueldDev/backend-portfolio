
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
// import ProjectList from './components/ProjectList'
import MoodMate from './pages/projects/MoodMate'
import Projects from './pages/projects/Projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'


function App() {
  
 return ( 
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/projects/moodmate" element={<MoodMate />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

    
    </>
  )
  

}

export default App












import './App.css'
// import ProjectList from './components/ProjectList'
import MoodMate from './pages/projects/MoodMate'
import Projects from './pages/projects/Projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return ( 
    <>
    {/* <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <h1 className="text-3xl font-bold">Backenddd Portfolio</h1>
      <p className="mt-2 text-lg">Showcasing my backend development projects.</p>

      <main>
      <ProjectList />   
     </main>

    </div> */}

     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/projects/moodmate" element={<MoodMate />} />
      </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App

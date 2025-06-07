
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
   <nav className=" justify-between flex items-center space-x-4 sm:space-x-6 md:space-x-8 p-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold text-blue-600">Samuel.</h1>
      <div className="space-x-8">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
        <Link to="/skills" className="hover:underline">Skills</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  )
}





import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Menu, X } from "lucide-react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600 dark:text-white">Samuel.</h1>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/skills" className="hover:underline">Skills</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-700 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 text-gray-700 dark:text-gray-200">
          <Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:underline" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" className="hover:underline" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/skills" className="hover:underline" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};



//   return (
//    <nav className=" justify-between flex items-center space-x-4 sm:space-x-6 md:space-x-8 p-4 bg-white shadow-md sticky top-0 z-50">
//       <h1 className="text-xl font-bold text-blue-600">Samuel.</h1>
//       <div className="space-x-8">
//         <Link to="/" className="hover:underline">Home</Link>
//         <Link to="/about" className="hover:underline">About</Link>
//         <Link to="/projects" className="hover:underline">Projects</Link>
//         <Link to="/skills" className="hover:underline">Skills</Link>
//         <Link to="/contact" className="hover:underline">Contact</Link>
//       </div>
//     </nav>
//   )
// }




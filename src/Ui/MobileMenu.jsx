import React from 'react'
import { GiCrossedSabres } from 'react-icons/gi'

function MobileMenu({ menuOpen, setMenuOpen }) {
    return (
        <div className={`fixed w-full top-0 left-0 bg-[rgba(26,10,10,0.95)] backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-300 gap-6 sm:gap-8 lg:gap-15 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>
            <button onClick={() => setMenuOpen(false)}
                className="absolute top-3 sm:top-4 lg:top-5 right-2 sm:right-4 lg:right-7 text-lg sm:text-xl lg:text-2xl focus:outline-none cursor-pointer text-red-400 hover:text-red-300 transition-colors"
                aria-label="Close Menu">
                <GiCrossedSabres />
            </button>
            <a  onClick={() => setMenuOpen(false)} href="#home" className={`text-lg sm:text-xl lg:text-2xl font-semibold text-white my-2 sm:my-3 lg:my-4 transform transition-all duration-300 hover:text-red-300 hover:scale-105 ${menuOpen ?"opacity-100 translate-y-0": "opacity-0 translate-y-5"}`}>
                Home
            </a>
            <a onClick={() => setMenuOpen(false)} href="#about" className={`text-lg sm:text-xl lg:text-2xl font-semibold text-white my-2 sm:my-3 lg:my-4 transform transition-all duration-300 hover:text-red-300 hover:scale-105 ${menuOpen ?"opacity-100 translate-y-0": "opacity-0 translate-y-5"}`}>
                About
            </a>
            <a onClick={() => setMenuOpen(false)} href="#project" className={`text-lg sm:text-xl lg:text-2xl font-semibold text-white my-2 sm:my-3 lg:my-4 transform transition-all duration-300 hover:text-red-300 hover:scale-105 ${menuOpen ?"opacity-100 translate-y-0": "opacity-0 translate-y-5"}`}>
                Project
            </a>
            <a onClick={() => setMenuOpen(false)} href="#contact" className={`text-lg sm:text-xl lg:text-2xl font-semibold text-white my-2 sm:my-3 lg:my-4 transform transition-all duration-300 hover:text-red-300 hover:scale-105 ${menuOpen ?"opacity-100 translate-y-0": "opacity-0 translate-y-5"}`}>
                Contact
            </a>
        </div>
    )
}

export default MobileMenu
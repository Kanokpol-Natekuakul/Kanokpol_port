import React, { useEffect } from 'react'
import Logo from './Logo'
import { BsFillMenuButtonWideFill } from 'react-icons/bs'

function Navbar({ menuOpen, setMenuOpen }) {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : "";
    }, [menuOpen])
    return (
        <nav className='fixed top-0 w-full z-40 bg-[rgba(26,10,10,0.9)] backdrop-blur-lg px-1 border-b border-red-500/20 shadow-lg'>
            <div className='max-w-full lg:max-w-5xl mx-auto px-2 sm:px-4 lg:px-8'>
                <div className='flex justify-between items-center font-mono h-12 sm:h-14 lg:h-16'>
                    <Logo />
                   {!menuOpen && <div onClick={() => setMenuOpen(prev => !prev)} className='text-lg sm:text-xl lg:text-2xl absolute right-2 sm:right-4 lg:right-7 z-40 md:hidden cursor-pointer font-mono text-red-400 hover:text-red-300 transition-colors'><BsFillMenuButtonWideFill /></div>}
                    <div className='flex md:flex items-center space-x-4 sm:space-x-6 lg:space-x-8'>
                        <div className='hidden md:flex items-center space-x-4 sm:space-x-6 lg:space-x-8'>
                            <a href="#home" className='text-gray-300 text-sm sm:text-base lg:text-lg hover:text-red-300 hover:scale-105 transition-all duration-200'>
                                Home
                            </a>
                            <a href="#about" className='text-gray-300 text-sm sm:text-base lg:text-lg hover:text-red-300 hover:scale-105 transition-all duration-200'>
                                About
                            </a>
                            <a href="#project" className='text-gray-300 text-sm sm:text-base lg:text-lg hover:text-red-300 hover:scale-105 transition-all duration-200'>
                                Project
                            </a>
                            <a href="#contact" className='text-gray-300 text-sm sm:text-base lg:text-lg hover:text-red-300 hover:scale-105 transition-all duration-200'>
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
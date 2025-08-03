import React from 'react'
import { FaFacebook, FaGithubSquare, FaInstagram, FaLine } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="w-full max-w-full overflow-hidden">
        <div className='min-h-[80px] sm:min-h-[100px] flex flex-col justify-center gap-3 sm:gap-4 lg:gap-6 text-center text-sm sm:text-base lg:text-lg text-gray-300 font-mono mb-4 sm:mb-6 lg:mb-10 px-2 sm:px-4 lg:px-6'>
            <div className='flex gap-4 sm:gap-6 lg:gap-10 p-3 sm:p-4 justify-center text-white'>
                <a href="https://github.com/Kanokpol-Natekuakul" className='border border-red-500/30 p-1.5 sm:p-2 lg:p-3 text-lg sm:text-xl lg:text-2xl rounded-lg hover:-translate-y-2 hover:shadow-red-orange transition-all duration-300 bg-black text-white hover:border-red-500/60' target='_blank'><FaGithubSquare />
                </a>
                <a href="https://line.me/R/ti/p/~kanokpolpol" className='border border-red-500/30 p-1.5 sm:p-2 lg:p-3 text-lg sm:text-xl lg:text-2xl rounded-lg hover:-translate-y-2 hover:shadow-red-orange transition-all duration-300 bg-emerald-700 text-white hover:border-red-500/60' target='_blank'><FaLine />
                </a>
                <a href="https://www.facebook.com/kanokpolpol" className='border border-red-500/30 p-1.5 sm:p-2 lg:p-3 text-lg sm:text-xl lg:text-2xl rounded-lg hover:-translate-y-2 hover:shadow-red-orange transition-all duration-300 bg-blue-600 text-white hover:border-red-500/60' target='_blank'><FaFacebook />
                </a>
                <a href="https://www.instagram.com/pol_knp_/" className='border border-red-500/30 p-1.5 sm:p-2 lg:p-3 text-lg sm:text-xl lg:text-2xl rounded-lg hover:-translate-y-2 hover:shadow-red-orange transition-all duration-300 bg-pink-900 text-white hover:border-red-500/60' target='_blank'><FaInstagram />
                </a>
            </div>
            <p className="text-xs sm:text-sm lg:text-base">@ 2025 Pol ... All rights reserved...</p>
        </div>
    </footer>
  )
}

export default Footer
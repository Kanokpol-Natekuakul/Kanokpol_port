import React from 'react'
import { FaFacebook, FaGithubSquare, FaInstagram, FaLine } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
        <div className='min-h-[100px] flec flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10'>
            <div className='flex gap-10 p-4 justify-center text-white'>
                <a href="https://github.com/Kanokpol-Natekuakul" className='border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white' target='_blank'><FaGithubSquare />
                </a>
                <a href="https://line.me/R/ti/p/~kanokpolpol" className='border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-emerald-700 text-white' target='_blank'><FaLine />
                </a>
                <a href="https://www.facebook.com/kanokpolpol" className='border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-blue-600 text-white' target='_blank'><FaFacebook />
                </a>
                <a href="https://www.instagram.com/pol_knp_/" className='border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-pink-900 text-white' target='_blank'><FaInstagram />
                </a>
            </div>
            <p>@ 2025 Pol ... All rights reserved...</p>
        </div>
    </footer>
  )
}

export default Footer
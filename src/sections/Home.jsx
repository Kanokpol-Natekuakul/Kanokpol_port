import React from 'react'
import profileimg from "../assets/profile.jpg"
import { FaDownload } from 'react-icons/fa';
import resume from '../assets/resume.pdf';

function Home() {
return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-6 lg:gap-15 px-4 sm:px-6 lg:px-8">
        <div className="text-center z-10 px-2 sm:px-4">
            <img className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] xl:w-[500px] border-0 mt-16 sm:mt-20 rounded-full shadow-lg shadow-red-500/30 lg:m-0 object-cover object-bottom hover:translate-y-1 transition-all duration-300 hover:shadow-red-orange" src={profileimg} alt="Profile Image" />
        </div>
        <div className='text-center font-mono z-10 px-2 sm:px-4 max-w-2xl mx-auto'>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 sm:mb-6 px-1 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent leading-tight">I am Kanokpol Natekuakul</h1>
            <p className='text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed'>
            I just graduated. Now I am practicing and studying about 
            frontend and backend programming.
            </p>
            <div className='flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4'>
                <a className='bg-gradient-to-r from-red-500 to-orange-500 flex flex-row items-center justify-center py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:-translate-y-1 hover-shadow-red-orange font-medium transition-all duration-300 relative overflow-hidden w-full sm:w-auto text-sm sm:text-base' href="#contact">Contact Me</a>
                <a className='bg-gradient-to-r from-red-500 to-orange-500 flex flex-row items-center justify-center py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:-translate-y-1 hover-shadow-red-orange font-medium transition-all duration-300 relative overflow-hidden w-full sm:w-auto text-sm sm:text-base' href={resume} download >
                    <p>Resume</p>  
                    <span className='h-4 sm:h-5 ml-2 sm:ml-3 text-lg sm:text-2xl text-white'>
                        <FaDownload />
                    </span>
                </a>
                {/* <a className='bg-gradient-to-r from-red-500 to-orange-500 flex flex-row items-center justify-center py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:-translate-y-1 hover-shadow-red-orange font-medium transition-all duration-300 relative overflow-hidden w-full sm:w-auto text-sm sm:text-base' href={resumeeng} download >
                    <p>Resume Eng</p>  
                    <span className='h-4 sm:h-5 ml-2 sm:ml-3 text-lg sm:text-2xl text-white'>
                        <FaDownload />
                    </span>
                </a> */}
            </div>
        </div>
        
    </section>
  );
}

export default Home
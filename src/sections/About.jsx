import React from 'react'
import RevealOnScroll from '../Ui/RevealOnScroll'

function About() {
  const skills=[
    "Html","Css","Javascript","React","Node Js","PHP","MySql","Bootstrap", "Vite", 
  ]
  return (
    <section id='about' className='min-h-screen font-mono flex items-center justify-center py-12 sm:py-16 lg:py-20 px-2 sm:px-4 lg:px-8 w-full max-w-full overflow-hidden'>
      <RevealOnScroll>
      <div className='max-w-full lg:max-w-4xl mx-auto w-full'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 lg:mb-12 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent text-center'>About Me</h2>
        <div className='p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 rounded-xl border-red-500/20 border-2 hover:-translate-y-1 transition-all duration-300 hover:shadow-red-orange'>
          <p className='text-gray-300 mb-4 sm:mb-5 text-sm sm:text-base lg:text-xl leading-relaxed'>Junior web developers in both frontend and backend development are passionate about creating functional systems using PHP, JavaScript, and modern frameworks, and they strive to learn new things and advance in this field.</p>
        </div>
      
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8'>
        <div className='rounded-xl p-3 sm:p-4 lg:p-6 hover:translate-y-1 transition-all duration-300'>
          <h3 className='text-lg sm:text-xl lg:text-2xl text-center font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent'>Skills</h3>
          <div className='flex justify-center flex-wrap gap-1 sm:gap-2'>
            {skills.map((skill,index)=> (
            <span className='bg-red-500/10 text-red-400 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm lg:text-base hover:bg-red-500/20 hover:shadow-red-orange transition-all duration-200' key={index}>{skill}</span>))}</div>
        </div>
        <div className='p-3 sm:p-4 lg:p-6 hover:-translate-y-1 transition-all duration-300'>
          <h3 className='text-lg sm:text-xl lg:text-2xl text-center font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent'>Education</h3>
          <ul className='pl-3 sm:pl-5 list-disc list-inside text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed'>
            <li>
              <strong><em>B.S. in Computer Technology</em><br /></strong>
              Nakhon Pathom Rajabhat University (2022-2025)
            </li>
          </ul>
        </div>
      </div>
        <div className='p-3 sm:p-4 lg:p-6 hover:-translate-y-1 transition-all duration-300'>
          <h3 className='text-lg sm:text-xl lg:text-2xl text-center font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent'>Work Experience</h3>
          <ul className='pl-3 sm:pl-5 list-disc list-inside text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed'>
            <li>
              <strong className='text-red-400'><em>Data Prepare (Internship)</em><br /></strong>
             * Onsite | March 2025 - Oct 2025<br />
              - Check the parameters and add the campaign to the EDC (Electronic Data Capture) <br />
              - Confirm the parameters in Automate and amend the information in Estate to align with the data on the MIS system. <br />
              - Complete the project 20250513_Reprog_PJ2505012_APPLESHEEP_59_E_L0_SC. <br />
              - Project 20250508_ReprogSW_PI2505004_PT_Pilot_60_e_L0_SC. <br />
              - App campaigns project 20250605_ReprogSW_PI2506008_PT_7100_e_L1_SC.
            </li>
          </ul>
        </div>
    </div></RevealOnScroll>
    </section>
  )
}

export default About
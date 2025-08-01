import React from 'react'
import RevealOnScroll from '../Ui/RevealOnScroll'

function About() {
  const skills=[
    "Html","Css","Javascript","React","Node Js","PHP","MySql","Bootstrap", "Vite", 
  ]
  return (
    <section id='about' className='min-h-screen font-mono flex items-center justify-center py-20'>
      <RevealOnScroll>
      <div className='max-w-3xl mx-auto px-4'>
        <h2 className='max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center'>About Me</h2>
        <div className='p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all'>
          <p className='text-gray-300 mb-5 text-xl'>Junior web developers in both frontend and backend development are passionate about creating functional systems using PHP, JavaScript, and modern frameworks, and they strive to learn new things and advance in this field.</p>
        </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='rounded-xl p-6 hover:translate-y-1 transition-all'>
          <h3 className='text-2xl text-center font-bold mb-8'>Skills</h3>
          <div className='flex justify-center flex-wrap gap-2'>
            {skills.map((skill,index)=> (
            <span className='bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22,46,0.2)] transition' key={index}>{skill}</span>))}</div>
        </div>
        <div className='p-6 hover:-translate-y-1 transition-all'>
          <h3 className='text-2xl text-center font-bold mb-8'>Education</h3>
          <ul className='pl-5 list-disc list-inside text-lg text-gray-300'>
            <li>
              <strong><em>B.S. in Computer Technology</em><br /></strong>
              Nakhon Pathom Rajabhat University (2022-2025)
            </li>
          </ul>
        </div>
      </div>
        <div className='p-6 hover:-translate-y-1 transition-all'>
          <h3 className='text-2xl text-center font-bold mb-8'>Work Experience</h3>
          <ul className='pl-5 list-disc list-inside text-lg text-gray-300'>
            <li>
              <strong className='text-blue-400'><em>Data Prepare (Internship)</em><br /></strong>
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
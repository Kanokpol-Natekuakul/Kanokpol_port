import React, { useState } from 'react'
import RevealOnScroll from '../Ui/RevealOnScroll'
import futureshop from '../assets/futureshop.png'
import gamesite from '../assets/gamesite.png'
import pokemonapi from '../assets/pokemonapi.png'
import reactport from '../assets/reactport.png'
import webport from '../assets/webport.png'
import internship from '../assets/internship.png'
import ecom from '../assets/ecom.png'
import netflix from '../assets/netflix.png'


function Project() {
    const [projects]=useState([
      {image: internship, name:"Internship",brief:"A personal Portfolio website built with React and Tailwind CSS with an automated deployment system.",tech: ["JavaScript", "React", "Tailwind CSS","Vite"],
        github: "https://github.com/Kanokpol-Natekuakul/Kanokpol_port"},
      {image: ecom, name:"E-commerce",brief:"E-commerce Frontend application developed with React + Vite with complete features supporting buying and selling, product management, payment, and admin system.",tech: ["React", "Vite", "Tailwind CSS","Stripe"],
        github: "https://github.com/Kanokpol-Natekuakul/ecom-web"},
      {image: netflix, name:"NetflixClone",brief:"Netflix Clone web application developed with React and Vite featuring an authentication system and retrieving movie data from the TMDB API.",tech: ["JavaScript", "React", "Tailwind CSS","Firebase"],
        github: "https://github.com/Kanokpol-Natekuakul/netflix_clone"},
      {image: futureshop, name:"FutureShop",brief:"An online store web application built with Vanilla HTML, CSS, and JavaScript, complete with a fully functional shopping cart system, and experiences from the futureskill workshop courses.",tech: ["HTML", "CSS", "JavaScript","DummyJSON API"],
        github: "https://github.com/Kanokpol-Natekuakul/Future-Shop_fs"},
      {image: gamesite, name:"GameHub",brief:"A modern gaming platform built with React, TypeScript, and responsive Tailwind CSS to discover, browse, and explore all types of games and platforms.",tech: ["React", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/Kanokpol-Natekuakul/game_website_demo"},
      {image: pokemonapi, name:"PokemonApi",brief:"A React application for finding and storing favorite Pokemon using data from PokeAPI.",tech: ["React", "PokeAPI", "Axios ","Tailwind CSS"],
        github: "https://github.com/Kanokpol-Natekuakul/pokemonapi"},
      {image: reactport, name:"Portfolio Website - React Demo",brief:"A modern and beautiful personal portfolio website built with React and Vite, featuring impressive animation effects and interactivity, suitable for showcasing work, skills, and experiences from the futureskill workshop courses.",tech: ["React", "Vite", "Animation"],github: "https://github.com/Kanokpol-Natekuakul/vite-react_fs"},
      {image: webport, name:"Old Portfolio Website ",brief:"The personal portfolio website of Kanokpol Natekuakul (Pol) that collects projects, skills, experience, and various certificates.", tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Kanokpol-Natekuakul/Kanokpol-Natekuakul.github.io"},
    ])
  return (
    <section id='project' className='min-h-screen flex items-center font-mono justify-center py-12 sm:py-16 lg:py-20 px-2 sm:px-4 lg:px-8 w-full max-w-full overflow-hidden'>
        <RevealOnScroll>
        <div className='max-w-full lg:max-w-6xl mx-auto w-full'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 lg:mb-12 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent text-center'>
                Features Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-3 sm:p-4 lg:p-6 rounded-xl flex flex-col items-center text-center border-2 border-red-500/20 hover:border-red-500/40 hover:shadow-red-orange hover:-translate-y-1 transition-all duration-300 hover:bg-red-900/10"
              >
                <h3 className="font-semibold text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 lg:mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">{project.name}</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base leading-relaxed">{project.brief} </p>
                  <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-red-500/10 text-red-400 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-red-500/20 hover:shadow-red-orange transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                  <div className="flex flex-col text-center my-2 sm:my-3 lg:my-5 py-2 sm:py-3 justify-center gap-2 sm:gap-3 border-2 border-red-500/20 hover:border-red-500/40 hover:shadow-red-orange cursor-pointer rounded-xl transition-all duration-300">
                    <p className="text-gray-200 text-xs sm:text-sm lg:text-base">View Project</p>
                    <a
                      href={project.github} target='_blank'
                      className="flex justify-between items-center font-bold text-red-400 transition-colors hover:text-red-300"
                    >
                      {" "}
                      <img src={project.image} alt={`${project.name}Image `} className="max-w-full h-auto w-full" />
                    </a>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Project

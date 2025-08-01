import React, { useState } from 'react'
import RevealOnScroll from '../Ui/RevealOnScroll'
import futureshop from '../assets/futureshop.png'
import gamesite from '../assets/gamesite.png'
import pokemonapi from '../assets/pokemonapi.png'
import reactport from '../assets/reactport.png'
import webport from '../assets/webport.png'

function Project() {
    const [projects]=useState([
      {image: futureshop, name:"FutureShop",brief:"An online store web application built with Vanilla HTML, CSS, and JavaScript, complete with a fully functional shopping cart system, and experiences from the futureskill workshop courses.",tech: ["HTML", "CSS", "JavaScript","DummyJSON API"],
        github: "https://github.com/Kanokpol-Natekuakul/Future-Shop_fs"},
      {image: gamesite, name:"GameHub",brief:"A modern gaming platform built with React, TypeScript, and responsive Tailwind CSS to discover, browse, and explore all types of games and platforms.",tech: ["React", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/Kanokpol-Natekuakul/game_website_demo"},
      {image: pokemonapi, name:"PokemonApi",brief:"A React application for finding and storing favorite Pokemon using data from PokeAPI.",tech: ["React", "PokeAPI", "Axios ","Tailwind CSS"],
        github: "https://github.com/Kanokpol-Natekuakul/pokemonapi"},
      {image: reactport, name:"Portfolio Website - React Demo",brief:"A modern and beautiful personal portfolio website built with React and Vite, featuring impressive animation effects and interactivity, suitable for showcasing work, skills, and experiences from the futureskill workshop courses.",tech: ["React", "Vite", "Animation"],github: "https://github.com/Kanokpol-Natekuakul/vite-react_fs"},
      {image: webport, name:"Portfolio Website ",brief:"The personal portfolio website of Kanokpol Natekuakul (Pol) that collects projects, skills, experience, and various certificates.", tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Kanokpol-Natekuakul/Kanokpol-Natekuakul.github.io"},
    ])
  return (
    <section id='project' className='min-h-screen flex items-center font-mono justify-center py-20'>
        <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
            <h2 className='max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center'>
                Features Projects
            </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900 "
              >
                <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.brief} </p>
                   <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                  <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)]  cursor-pointer rounded-xl ">
                    <p className="text-gray-200">View Project</p>
                    <a
                      href={project.github} target='_blank'
                      className="flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white"
                    >
                      {" "}
                      <img src={project.image} alt={`${project.name}Image `} />
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
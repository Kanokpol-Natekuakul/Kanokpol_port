import React, { useState } from 'react'
import Navbar from './Ui/Navbar'
import MobileMenu from './Ui/MobileMenu';
import LoadingScreenAnimation from './Ui/LoadingScreenAnimation';
import Home from './sections/Home';
import AnimationWaves from './Ui/AnimationWaves';
import About from './sections/About';
import Project from './sections/Project';
import Contact from './sections/Contact';
import RevealOnScroll from './Ui/RevealOnScroll';
import Footer from './sections/Footer';

function App() {
  const [loading,setLoading]=useState(false);
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <>
    {!loading && <LoadingScreenAnimation onComplete={() => setLoading(true)} />}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <RevealOnScroll>
      <Home/>
      <AnimationWaves />
      </RevealOnScroll>
      <About/>
      <Project/>
      <Contact />
      <Footer/>
    </>
  )
}

export default App
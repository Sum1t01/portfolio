import React from 'react'

import Hero from './sections/Hero';
import NavBar from './layout/NavBar';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <NavBar />

      <main>
        <Hero />
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
      </main>

    </div>
  )
};

export default App
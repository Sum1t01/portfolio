import React from 'react'

import Hero from './sections/Hero';
import NavBar from './layout/NavBar';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import CursorDot from './components/CursorDot';

const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <CursorDot />
      <NavBar />

      <main>
        <Hero />
        <About/>
        <Projects/>
        <Experience/>
        <Achievements/>
        <Contact/>
      </main>

    </div>
  )
};

export default App
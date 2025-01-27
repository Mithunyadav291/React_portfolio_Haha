import React, { useEffect } from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Aos from 'aos';
import "aos/dist/aos.css";




const App = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);
  
  return (
 <>
    <Navbar/>
    <Home/>
    <Experience/>
    <Skills/>
    <Contact/>
    
  
   
 </>
  )
}

export default App

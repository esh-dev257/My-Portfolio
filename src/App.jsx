// App.jsx
import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./Components/Navs/Navbar.jsx";
import Home from "./Pages/Home";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Skills from "./Pages/Skills.jsx";
import Projects from "./Pages/Projects.jsx";

export const Context = React.createContext();

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [dark, setdark] = useState(0);

  return (
    <Context.Provider value={[dark, setdark]}>
      <div className={`${dark ? "bg-black" : "bg-white"} transition-colors`}>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <motion.div
          className="progress-bar fixed bottom-0 left-0 right-0 h-1 bg-blue-500" // Changed 'top-0' to 'bottom-0'
          style={{ scaleX }}
        />
      </div>
    </Context.Provider>
  );
}

export default App;

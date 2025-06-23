import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import './index.css';
import Navbar from './components/Navbar';
import Mobilemenu from './components/Mobilemenu';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Mobilemenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <footer className="text-center text-gray-400 py-6 text-sm border-t border-white/10 mt-10">
          © 2025 <span className="text-white font-semibold">Santhosh Palem</span>. All rights reserved.
        </footer>

      </div>
    </>
  );
};

export default App;

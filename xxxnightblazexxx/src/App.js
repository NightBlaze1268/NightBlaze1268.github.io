import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Career from "./routes/Career";
import Education from "./routes/Education";
import Projects from "./routes/Projects";
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let savedMode = localStorage.getItem("displayMode");
    if (!savedMode) {
      savedMode = "light";
      setDarkMode(false);
      localStorage.setItem("displayMode", savedMode);
    }
    setDarkMode(savedMode === 'dark');
  }, []);

  const toggleDisplayMode = () => {
    const newMode = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    localStorage.setItem("displayMode", newMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} flex flex-col h-screen`}>
      <Navbar darkMode={darkMode} toggleDisplayMode={toggleDisplayMode}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Career from "./routes/Career";
import Education from "./routes/Education";
import Projects from "./routes/Projects";
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Apply the current theme as a class to the html element
    document.documentElement.className = theme; // This applies the theme class to the <html> element
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex flex-col h-screen">
      <Navbar currentTheme={theme} setTheme={setTheme} />
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

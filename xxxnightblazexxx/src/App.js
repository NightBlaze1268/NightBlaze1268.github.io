import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { flushSync } from "react-dom";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import Career from "./routes/Career";
import Education from "./routes/Education";
import Projects from "./routes/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import { applyTheme, getInitialTheme, prefersReducedMotion } from "./theme";

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const location = useLocation();

  // Layout effect so the class is on <html> before children read CSS variables
  useLayoutEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable (private mode) — theme just won't persist */
    }
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Theme switch that expands as a circle from the toggle button where the
  // View Transitions API is supported, and falls back to a color fade elsewhere.
  const toggleTheme = useCallback(
    (event) => {
      const next = theme === "dark" ? "light" : "dark";
      const root = document.documentElement;

      if (!document.startViewTransition || prefersReducedMotion()) {
        applyTheme(next);
        setTheme(next);
        return;
      }

      const rect = event.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

      root.classList.add("theme-switching");
      const transition = document.startViewTransition(() => {
        applyTheme(next);
        flushSync(() => setTheme(next));
      });

      transition.ready
        .then(() => {
          root.animate(
            { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
            { duration: 700, easing: "cubic-bezier(0.16, 1, 0.3, 1)", pseudoElement: "::view-transition-new(root)" }
          );
        })
        .catch(() => {});
      const cleanup = () => root.classList.remove("theme-switching");
      transition.finished.then(cleanup, cleanup);
    },
    [theme]
  );

  return (
    <div className="relative flex min-h-screen flex-col">
      <AnimatedBackground theme={theme} />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main key={location.pathname} className="relative z-10 flex-1 animate-fade-up">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

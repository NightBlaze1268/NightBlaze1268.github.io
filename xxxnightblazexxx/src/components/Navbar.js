import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import darkLogo from "../icons/rick-studios-logo-removebg-preview.png";
import lightLogo from "../icons/light-rick-studios-removebg-preview.png";
import ThemeToggle from "./ThemeToggle";
import { CloseIcon, MenuIcon } from "./Icons";

const links = [
  { to: "/", label: "Home" },
  { to: "/career", label: "Career" },
  { to: "/education", label: "Education" },
  { to: "/projects", label: "Projects" },
];

const Navbar = ({ theme, onToggleTheme }) => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState(null);
  const linkRefs = useRef({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  // Slide the highlight pill under the active link
  useLayoutEffect(() => {
    const measure = () => {
      const el = linkRefs.current[pathname];
      setIndicator(el && el.offsetWidth ? { left: el.offsetLeft, width: el.offsetWidth } : null);
    };
    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex items-center justify-between gap-3 rounded-2xl border px-3 py-2 backdrop-blur-xl transition-all duration-700 ease-out-expo ${
          scrolled
            ? "max-w-3xl border-line/10 bg-surface/75 shadow-lg shadow-black/5 dark:shadow-black/40"
            : "max-w-6xl border-line/5 bg-surface/40"
        }`}
      >
        <Link to="/" className="group flex items-center gap-2.5 rounded-xl pr-2" aria-label="Kyle Akridge — home">
          <img
            src={theme === "dark" ? darkLogo : lightLogo}
            alt=""
            className="h-9 w-9 transition-transform duration-700 ease-out-expo group-hover:rotate-[120deg]"
          />
          <span className="hidden font-display text-sm font-semibold tracking-tight md:block">Kyle Akridge</span>
        </Link>

        <div className="relative hidden items-center sm:flex">
          {indicator && (
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 rounded-xl bg-gradient-to-r from-accent/15 via-accent-2/10 to-accent-3/15 ring-1 ring-inset ring-accent/25 transition-all duration-500 ease-out-expo"
              style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width }}
            />
          )}
          {links.map(({ to, label }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                ref={(el) => (linkRefs.current[to] = el)}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="icon-btn relative sm:hidden"
          >
            <MenuIcon className={`absolute h-5 w-5 transition-all duration-300 ${menuOpen ? "rotate-90 opacity-0" : "opacity-100"}`} />
            <CloseIcon className={`absolute h-5 w-5 transition-all duration-300 ${menuOpen ? "opacity-100" : "-rotate-90 opacity-0"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`mx-auto mt-2 max-w-6xl origin-top rounded-2xl border border-line/10 bg-surface/90 p-2 shadow-xl backdrop-blur-xl transition-all duration-300 ease-out-expo sm:hidden ${
          menuOpen ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-95 opacity-0"
        }`}
      >
        {links.map(({ to, label }, i) => {
          const active = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              aria-current={active ? "page" : undefined}
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                menuOpen ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
              } ${active ? "bg-accent/10 text-ink" : "text-muted hover:bg-line/5 hover:text-ink"}`}
            >
              {label}
              {active && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;

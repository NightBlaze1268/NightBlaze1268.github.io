import { MoonIcon, SunIcon } from "./Icons";

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  const label = `Switch to ${isDark ? "light" : "dark"} mode`;

  return (
    <button type="button" onClick={onToggle} aria-label={label} title={label} className="icon-btn relative overflow-hidden">
      <SunIcon
        className={`absolute h-5 w-5 transition-all duration-500 ease-out-expo ${
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <MoonIcon
        className={`absolute h-5 w-5 transition-all duration-500 ease-out-expo ${
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
      />
    </button>
  );
}

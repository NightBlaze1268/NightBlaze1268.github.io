const defaultTheme = require("tailwindcss/defaultTheme");

// Theme colors are RGB triplets defined as CSS variables in src/index.css,
// so every utility (bg-accent/20, text-muted, border-line/10...) follows the
// active light/dark theme and still supports opacity modifiers.
const themeColor = (name) => `rgb(var(${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        page: themeColor("--page"),
        surface: themeColor("--surface"),
        ink: themeColor("--ink"),
        muted: themeColor("--muted"),
        line: themeColor("--line"),
        accent: {
          DEFAULT: themeColor("--accent"),
          2: themeColor("--accent-2"),
          3: themeColor("--accent-3"),
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ['"Space Grotesk"', "Inter", ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        card: "0 1px 0 0 rgb(255 255 255 / 0.05) inset, 0 24px 48px -28px rgb(0 0 0 / 0.35)",
        glow: "0 0 0 1px rgb(var(--accent) / 0.2), 0 24px 64px -24px rgb(var(--accent) / 0.5)",
      },
      keyframes: {
        "aurora-a": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(12vw, 8vh, 0) scale(1.15)" },
          "66%": { transform: "translate3d(-6vw, 14vh, 0) scale(0.9)" },
        },
        "aurora-b": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(-14vw, 10vh, 0) scale(1.2)" },
        },
        "aurora-c": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1.1)" },
          "40%": { transform: "translate3d(10vw, -12vh, 0) scale(0.9)" },
          "75%": { transform: "translate3d(-8vw, -4vh, 0) scale(1.2)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translate3d(0, 16px, 0)", filter: "blur(6px)" },
          // End on `none` so the filled-forward state doesn't break backdrop-blur on children
          to: { opacity: "1", transform: "none", filter: "none" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.94)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(-100%, 0, 0)" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        "aurora-a": "aurora-a 26s ease-in-out infinite",
        "aurora-b": "aurora-b 32s ease-in-out infinite",
        "aurora-c": "aurora-c 38s ease-in-out infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.3s ease-out both",
        "scale-in": "scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both",
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee 40s linear infinite reverse",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 10s linear infinite",
        "glow-pulse": "glow-pulse 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

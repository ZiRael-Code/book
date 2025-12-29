/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // CORRECT paths from ROOT folder
    "./packages/book1-portfolio/reader/index.html",  // Your main file
    "./packages/book1-portfolio/reader/chapter.html", // Your other HTML
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0f172a",
        muted: "#475569",
        border: "#e2e8f0",
        primary: "#2563eb",
        primaryForeground: "#ffffff",
        accent: "#0ea5e9",
        danger: "#dc2626"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Roboto Mono", "ui-monospace", "monospace"]
      }
    }
  },
  plugins: []
}
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./web/**/*.html", "./web/**/*.js", "./chapters/**/*.md"],
    theme: {
        extend: {
            colors: {
                bg: "#ffffff",
                text: "#0f172a",

                primary: "#2563eb",
                success: "#16a34a",
                danger: "#dc2626",
                warn: "#f59e0b",

                muted: "#475569",
                border: "#e2e8f0"
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                mono: ["Roboto Mono", "ui-monospace", "monospace"]
            },
            spacing: {
                xs: "4px",
                sm: "8px",
                md: "16px",
                lg: "24px",
                xl: "32px"
            },
            borderRadius: {
                sm: "4px",
                md: "8px",
                lg: "12px"
            }
        }
    },
    plugins: []
};
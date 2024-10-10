/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        base: "var(--base-color)",
        text: "var(--text-color)",
        "text-secondary": "var(--text-color-secondary)",
        secondary: "var(--secondary-color)",
        disabled: "var(--disabled-color)",
        divider: "var(--divider-color)",
        error: "var(--error-color)",
        primary: "var(--primary-color)",
        "light-primary": "var(--light-primary-color)",
        "dark-primary": "var(--dark-primary-color)",
        accent: "var(--accent-color)",
        "light-accent": "var(--light-accent-color)",
        "dark-accent": "var(--dark-accent-color)",
        "card-background": "var(--card-background-color)",
        "primary-btn-background": "var(--primary-btn-color)",
        "primary-btn-text": "var(--primary-btn-text-color)",
        "secondary-btn-background": "var(--secondary-btn-color)",
        "card-btn-background": "var(--card-btn-color)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "lightgrey-color": "var(--lightgrey-color)",
        "dark-color": "var(--dark-color)",
        "transparent-color": "var(--transparent-color)",
        "accent-color": "var(--accent-color)",
        "red-color": "var(--red-color)",
        "gray-color": "var(--gray-color)",
        "grey-text": "var(--gray-text)",
        "blue-color": "var(--blue-color)",
        "base-background-color": "var(--base-background-color)",
        "content-background-color": "var(--content-background-color)",
        "text-primary-color": "var(--text-primary-color)",
      },
      width: {
        "subcategory-width": "calc(300% + 32px)",
        "sidebar-width": "calc(100% - 54px)",
      },
      backgroundImage: {
        "deal-of-the-day": "url(/images/DealOfTheDay.jpg)",
      },
    },
    screens: {
      mobile: "400px",
      // => @media (min-width: 400px) { ... }

      tablet: "768px",
      // => @media (min-width: 768px) { ... }

      laptop: "992px",
      // => @media (min-width: 990px) { ... }

      desktop: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
};

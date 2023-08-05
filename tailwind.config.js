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
        "spacing-base": "var(--spacing-base)",
        "spacing-0x": "var(spacing-0x)",
        "spacing-1x": "var(spacing-1x)",
        "spacing-2x": "var(spacing-2x)",
        "spacing-3x": "var(spacing-3x)",
        "spacing-4x": "var(spacing-4x)",
        "spacing-5x": "var(spacing-5x)",
        "spacing-6x": "var(spacing-6x)",
        "spacing-7x": "var(spacing-7x)",
        "spacing-8x": "var(spacing-8x)",
        "spacing-9x": "var(spacing-9x)",
        "spacing-10x": "var(spacing-10x)",
        "spacing-11x": "var(spacing-11x)",
        "spacing-12x": "var(spacing-12x)",
      },
    },
    screens: {
      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '992px',
      // => @media (min-width: 990px) { ... }

      'desktop': '1024px',
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
};

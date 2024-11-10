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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    // colors: {
    //   color: {
    //     accent: '#ffc639',
    //     primary: '#eeeeee',
    //     secondary: '#393e46',
    //     dark: '#222831'
    //   }
    // }
  },
  plugins: [],
};

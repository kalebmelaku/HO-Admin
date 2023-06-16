/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      lg: '750px',
      md: '500px',
      sm: '0px'
    },
    boxShadow: {
      shadow1: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 1) 0px 0px 1px 0px;',
      shadow2: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;',
      shadow3: 'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;',
      shadow4: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
      shadow5: 'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;',
      shadow6: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;'
    }
  },
  plugins: [],
}

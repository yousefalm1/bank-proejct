/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        background: '#F9FAFB', // Very light gray background
        foreground: '#2D3748', // Dark gray for text
        primary: '#4C566A', // Soft slate gray for primary accents
        secondary: '#B6C2CF', // Muted gray for secondary accents
        border: '#E0E7ED', // Light gray for borders and dividers
        highlight: '#CBD5E0', // Very light grayish-blue for highlights

        // Dark mode colors
        'dark-background': '#1A202C', // Dark slate for background
        'dark-foreground': '#E2E8F0', // Light gray for text
        'dark-primary': '#718096', // Muted slate gray for primary accents
        'dark-secondary': '#4A5568', // Darker gray for secondary accents
        'dark-border': '#4C566A', // Darker gray for borders and dividers
        'dark-highlight': '#2D3748', // Darker highlight for interactive elements
      },
      fontFamily: {
        sans: ['Poppins', 'Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable dark mode based on a class (like 'dark')
};

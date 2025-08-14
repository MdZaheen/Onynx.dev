/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        marti: ['MARTI', 'sans-serif'],
      },
      colors: {
        primary: '#A10000',
      },
    },
  },
  plugins: [
    // Custom plugin for mask utilities
    function ({ addUtilities }) {
      addUtilities({
        '.mask-no-repeat': {
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        },
        '.mask-repeat': {
          maskRepeat: 'repeat',
          WebkitMaskRepeat: 'repeat',
        },
        '.mask-center': {
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        },
        
      })
    }
  ],
};

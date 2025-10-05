/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefdf8',
          100: '#fef9e7',
          200: '#fdf2c5',
          300: '#fbe68a',
          400: '#f8d44f',
          500: '#f5c21a',
          600: '#e6a80d',
          700: '#bf850a',
          800: '#99680e',
          900: '#7d5612',
        },
        dark: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#0a0f1a',
        },
        accent: {
          gold: '#B48A36',
          light: '#EDEDED',
          gray: '#2B2F3A',
          medium: '#7A7F8A',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#EDEDED',
            h1: {
              color: '#EDEDED',
            },
            h2: {
              color: '#EDEDED',
            },
            h3: {
              color: '#EDEDED',
            },
            h4: {
              color: '#EDEDED',
            },
            strong: {
              color: '#EDEDED',
            },
            a: {
              color: '#B48A36',
              '&:hover': {
                color: '#f5c21a',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

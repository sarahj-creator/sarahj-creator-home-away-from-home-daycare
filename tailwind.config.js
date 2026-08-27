/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6EF',
          200: '#F4EDE1',
          300: '#EDE2D0',
        },
        sage: {
          50: '#F4F7F3',
          100: '#E6EEE3',
          200: '#CDDCC8',
          300: '#A9C3A1',
          400: '#84A878',
          500: '#5F8A52',
          600: '#4A6F40',
          700: '#3A5832',
          800: '#2E4628',
          900: '#243620',
        },
        clay: {
          50: '#FBF5F2',
          100: '#F6EAE3',
          200: '#EDD5C8',
          300: '#E0BBA8',
          400: '#CE9B82',
          500: '#B87E62',
          600: '#9C6650',
          700: '#7E5240',
          800: '#624133',
          900: '#4D3329',
        },
        sunshine: {
          50: '#FEFAEB',
          100: '#FDF5D6',
          200: '#FAEBAE',
          300: '#F5DC7A',
          400: '#EFC546',
          500: '#E5A81F',
          600: '#C5851A',
        },
        charcoal: {
          700: '#3D362F',
          800: '#2A2520',
          900: '#1C1814',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

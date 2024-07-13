/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '.4rem',
      DEFAULT: '.8rem',
      'md': '1.2rem',
      'lg': '1.6rem',
      'full': '9999px',
      'large': '2rem',
      'xlarge': '3.2rem',
    },
    fontSize: {
      xs: '1rem',
      sm: '1.2rem',
      base: '1.6rem',
      lg: '1.8rem',
      xl: '2rem',
      '14': '1.4rem',
      '18': '1.8rem',
      '20': '2rem',
      '24': '2.4rem',
      '28': '2.8rem',
      '32': '3.2rem',
      '40': '4rem',
    },
    extend: {
      colors: {
        cyan: {
          10: '#599DB0',
          20: '#599DB0',
          30: '#599DB0',
          40: '#599DB0',
          50: '#599DB0',
        },
        'white': '#ffffff',
      }
    },
    spacing: {
      0.5: '0.05rem',
      1: '0.1rem',
      1.5: '0.15rem',
      2: '0.2rem',
      2.5: '0.25rem',
      3: '0.3rem',
      3.5: '.35rem',
      4: '.4rem',
      5: '.5rem',
      6: '.6rem',
      7: '.7rem',
      8: '.8rem',
      9: '.9rem',
      10: '1rem',
      11: '1.1rem',
      12: '1.2rem',
      14: '1.4rem',
      16: '1.6rem',
      18: '1.8rem',
      20: '2.0rem',
      24: '2.4rem',
      28: '2.8rem',
      32: '3.2rem',
      36: '3.6rem',
      40: '4rem',
      44: '4.4rem',
      48: '4.8rem',
      52: '5.2rem',
      56: '5.6rem',
      60: '6rem',
      64: '6.4rem',
      72: '7.2rem',
      80: '8.8rem',
      96: '9.6rem',
    },
  },
  plugins: [],
}

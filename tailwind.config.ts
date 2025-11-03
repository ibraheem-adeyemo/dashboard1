import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '3xl': '1920px', // Full HD
        '4xl': '2560px', // 2K / WQHD
        '5xl': '3840px', // 4K / UHD
      },
      boxShadow: {
        'shadow-m':
          '0px 0px 0px 1px rgba(152, 161, 178, 0.10), 0px 15px 35px -5px rgba(17, 24, 38, 0.15), 0px 5px 15px 0px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        averta: 'var(--averta)',
      },
      colors: {
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        icon: {
          DEFAULT: 'var(--icon-color)',
        },
        surface: {
          primary: 'var(--surface-primary)',
          secondary: 'var(--surface-secondary)',
          modal: 'var(--surface-modal)',
        },
        skeleton: {
          primary: 'var(--skeleton-primary)',
        },
        input: {
          fill: {
            enabled: 'var(--input-fill-enabled)',
            disabled: 'var(--input-fill-disabled)',
          },
        },
        button: {
          primary: {
            fill: {
              enabled: 'var(--button-primary-fill-enabled)',
              active: 'var(--button-primary-fill-active)',
            },
            label: {
              all: 'var(--button-primary-label-all)',
            },
          },
          outline: {
            stroke: {
              enabled: 'var(--button-outline-stroke-enabled)',
              disabled: 'var(--button-outline-stroke-disabled)',
              active: 'var(--button-outline-stroke-active)',
            },
            label: {
              enabled: 'var(--button-outline-label-enabled)',
            },
          },
          tertiary: {
            fill: {
              pressed: 'var(--button-tertiary-fill-pressed)',
            },
          },
        },
        brand: {
          blue: 'var(--interswitch-blue)',
          red: 'var(--interswitch-red)',
          highlight: 'var(--highlight)',
        },
        neutral: {
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          900: 'var(--neutral-900)',
        },
        'active-blue': {
          100: 'var(--active-blue-100)',
          200: 'var(--active-blue-200)',
          300: 'var(--active-blue-300)',
          400: 'var(--active-blue-400)',
          500: 'var(--active-blue-500)',
        },
        'active-yellow': {
          100: 'var(--active-yellow-100)',
          200: 'var(--active-yellow-200)',
          300: 'var(--active-yellow-300)',
          400: 'var(--active-yellow-400)',
          500: 'var(--active-yellow-500)',
          600: 'var(--active-yellow-600)',
        },
        'active-red': {
          100: 'var(--active-red-100)',
          200: 'var(--active-red-200)',
          300: 'var(--active-red-300)',
          400: 'var(--active-red-400)',
        },
        'active-green': {
          100: 'var(--active-green-100)',
          200: 'var(--active-green-200)',
          300: 'var(--active-green-300)',
          400: 'var(--active-green-400)',
          500: 'var(--active-green-500)',
          600: 'var(--active-green-600)',
        },
        'primary-blue': {
          100: 'var(--primary-blue-100)',
          200: 'var(--primary-blue-200)',
          300: 'var(--primary-blue-300)',
          400: 'var(--primary-blue-400)',
          500: 'var(--primary-blue-500)',
          600: 'var(--primary-blue-600)',
        },
        'primary-red': {
          100: 'var(--primary-red-100)',
          200: 'var(--primary-red-200)',
          300: 'var(--primary-red-300)',
          400: 'var(--primary-red-400)',
          500: 'var(--primary-red-500)',
        },
        pop: {
          blue: 'var(--pop-blue)',
        },
        selection: {
          DEFAULT: 'var(--selection-color)',
        },
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-0.5%)', opacity: '0' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-in-out forwards',
        slideOut: 'slideOut 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;

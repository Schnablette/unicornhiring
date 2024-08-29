import headlessuiPlugin from '@headlessui/tailwindcss'
import formsPlugin from '@tailwindcss/forms'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-lexend)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
      colors: {
        wildberry: {
          DEFAULT: '#591849',
          50: '#F4D7ED',
          100: '#F0C7E6',
          200: '#E8A7D8',
          300: '#DF87CA',
          400: '#D667BB',
          500: '#CE46AD',
          600: '#BA3199',
          700: '#9A297E',
          800: '#7A2064',
          900: '#591849',
          950: '#431237',
        },
        blueberry: {
          DEFAULT: '#C3D2EC',
          50: '#D2DEF1',
          100: '#C3D2EC',
          200: '#9FB8E2',
          300: '#7C9ED7',
          400: '#5984CC',
          500: '#3A6BBD',
          600: '#2F579A',
          700: '#254377',
          800: '#1A2F54',
          900: '#0F1C31',
          950: '#0A121F',
        },
        lemon: {
          DEFAULT: '#FFE011',
          50: '#FFF8C9',
          100: '#FFF5B4',
          200: '#FFF08B',
          300: '#FFEB63',
          400: '#FFE53A',
          500: '#FFE011',
          600: '#DDC000',
          700: '#AA9400',
          800: '#776800',
          900: '#443B00',
          950: '#2B2500',
        },
      },
    },
  },
  plugins: [formsPlugin, headlessuiPlugin],
} satisfies Config

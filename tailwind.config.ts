import type { Config } from 'tailwindcss';

/**
 * Site-shell base Tailwind config.
 * The agent-runner overrides the `colors` and `fontFamily` keys per
 * customer based on the industry reference pack's palette and fonts.
 *
 * Default tokens mirror Eclean v2 (moss + lime + ink + cream).
 */

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1rem', screens: { '2xl': '1280px' } },
    extend: {
      colors: {
        ink: {
          50: '#F5F6F8', 100: '#E6E9EE', 200: '#C9CFD9', 300: '#9CA5B4',
          400: '#6F7A8C', 500: '#4A5468', 600: '#2E3645', 700: '#1B2333',
          800: '#0F1B2D', 900: '#08111E',
        },
        moss: {
          50: '#EEF3EF', 100: '#D8E4DB', 200: '#B4C9BA', 300: '#88A891',
          400: '#5E8569', 500: '#3F6448', 600: '#2D4D35', 700: '#223C29',
          800: '#16271B', 900: '#0B1610',
        },
        lime: { 500: '#D4F063', 400: '#DEF57A', 300: '#E9F99C' },
        cream: { 50: '#FDFDFB', 100: '#FAFAF7', 200: '#F2F1EB' },
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.25rem, 5.2vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(1.875rem, 3.8vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.5rem, 2.6vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      borderRadius: { '2xl': '1.25rem' },
      boxShadow: {
        soft: '0 1px 3px rgba(15,27,45,0.04), 0 8px 24px rgba(15,27,45,0.06)',
        lifted: '0 2px 4px rgba(15,27,45,0.05), 0 16px 40px rgba(15,27,45,0.10)',
      },
    },
  },
  plugins: [],
} satisfies Config;

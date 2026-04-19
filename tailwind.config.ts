import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1.5rem', screens: { '2xl': '1280px' } },
    extend: {
      colors: {
        ink: {
          50: '#F5F6F8', 100: '#E8EBF0', 200: '#C8D0DC', 300: '#96A3B5',
          400: '#64748B', 500: '#4A5468', 600: '#2E3645', 700: '#1B2333',
          800: '#0F1B2D', 900: '#08111E',
        },
        brand: {
          50:  '#F9FEE8', 100: '#F0FCC5', 200: '#E3F899', 300: '#D4F063',
          400: '#C5E640', 500: '#AECF1A', 600: '#8AA813', 700: '#677F0E',
          800: '#445508', 900: '#222B04',
        },
        bg: { DEFAULT: '#FAFAF7', soft: '#F2F1EB', dark: '#0F1B2D' },
        muted: '#4A5468',
      },
      fontFamily: {
        sans:    ['"Inter Tight"', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        mono:    ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 5.5vw, 4.75rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 4vw, 3.5rem)',     { lineHeight: '1.07', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.5rem, 2.8vw, 2.375rem)',{ lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'label':      ['0.6875rem',                    { lineHeight: '1.4',  letterSpacing: '0.12em'   }],
      },
      borderRadius: { '2xl': '1.25rem', '3xl': '1.75rem' },
      boxShadow: {
        soft:   '0 1px 3px rgba(15,27,45,0.04), 0 8px 24px rgba(15,27,45,0.06)',
        lifted: '0 2px 4px rgba(15,27,45,0.05), 0 16px 40px rgba(15,27,45,0.10)',
        glow:   '0 0 40px rgba(212,240,99,0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;

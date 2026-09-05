/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark green to dark blue gradient palette with lighter accents
        background: {
          DEFAULT: '#f8fafb',
          secondary: '#f1f5f9',
        },
        foreground: {
          DEFAULT: '#1e293b',
          secondary: '#475569',
        },
        primary: {
          DEFAULT: '#0f6f68', // Accessible teal-green for text and white-label controls
          hover: '#115e59',
          light: '#5eead4',
          dark: '#134e4a',
        },
        secondary: {
          DEFAULT: '#1d4ed8', // Accessible blue for text on pale backgrounds
          hover: '#1e40af', // Darker blue
          light: '#60a5fa', // Light blue
          dark: '#1e40af', // Dark blue
        },
        accent: {
          DEFAULT: '#60a5fa', // Light blue accent
          hover: '#3b82f6',
          light: '#93c5fd', // Lighter blue
        },
        border: {
          DEFAULT: '#e2e8f0',
          hover: '#cbd5e1',
        },
        muted: '#475569',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 20px rgba(13, 148, 136, 0.3)',
      },
    },
  },
  plugins: [],
}
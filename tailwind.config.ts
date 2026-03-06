import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#60A5FA',
        secondary: '#A78BFA',
        background: '#0B1220',
        foreground: '#E5E7EB',
        muted: '#111827',
        accent: '#22C55E',
        destructive: '#F87171',
        border: '#1F2937',
        ring: '#93C5FD',
        mutedForeground: '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        xl: '12px',
        lg: '8px',
        md: '6px',
      },
    },
  },
  plugins: [],
};

export default config;

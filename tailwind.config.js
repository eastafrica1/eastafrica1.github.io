/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        brand: {
          sky: 'var(--brand-sky)',
          green: 'var(--brand-green)',
          royal: 'var(--brand-royal)',
          amber: 'var(--brand-amber)',
          rose: 'var(--brand-rose)',
          violet: 'var(--brand-violet)',
        },
        sidebar: {
          DEFAULT: 'var(--sidebar)',
          foreground: 'var(--sidebar-foreground)',
          primary: 'var(--sidebar-primary)',
          'primary-foreground': 'var(--sidebar-primary-foreground)',
          accent: 'var(--sidebar-accent)',
          'accent-foreground': 'var(--sidebar-accent-foreground)',
          border: 'var(--sidebar-border)',
          ring: 'var(--sidebar-ring)',
        },
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
        '3xl': 'calc(var(--radius) + 12px)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(120deg, var(--brand-royal), var(--brand-sky) 55%, var(--brand-green))',
        'gradient-soft': 'linear-gradient(160deg, color-mix(in oklab, var(--brand-sky) 12%, transparent), color-mix(in oklab, var(--brand-green) 10%, transparent))',
      },
      boxShadow: {
        soft: '0 1px 2px color-mix(in oklab, var(--brand-royal) 8%, transparent), 0 18px 40px -22px color-mix(in oklab, var(--brand-royal) 28%, transparent)',
        lift: '0 24px 60px -28px color-mix(in oklab, var(--brand-royal) 40%, transparent)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(0, -26px, 0) scale(1.08)' },
        },
        'glow-pulse': {
          '0%, 100%': {
            'box-shadow': '0 0 0 0 color-mix(in oklab, var(--brand-sky) 45%, transparent), 0 18px 45px -18px color-mix(in oklab, var(--brand-royal) 55%, transparent)',
          },
          '50%': {
            'box-shadow': '0 0 0 12px color-mix(in oklab, var(--brand-sky) 0%, transparent), 0 22px 60px -16px color-mix(in oklab, var(--brand-sky) 70%, transparent)',
          },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'float-slow': 'float-slow 14s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

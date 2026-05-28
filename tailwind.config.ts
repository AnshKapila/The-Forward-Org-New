import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primitive Brand Colors
        brand: {
          green: {
            900: 'var(--primitive-green-900)',
            800: 'var(--primitive-green-800)',
            700: 'var(--primitive-green-700)',
            100: 'var(--primitive-green-100)',
            50: 'var(--primitive-green-50)',
          },
          gold: {
            800: 'var(--primitive-gold-800)',
            700: 'var(--primitive-gold-700)',
            600: 'var(--primitive-gold-600)',
            200: 'var(--primitive-gold-200)',
            100: 'var(--primitive-gold-100)',
          },
          ink: {
            900: 'var(--primitive-ink-900)',
            700: 'var(--primitive-ink-700)',
            500: 'var(--primitive-ink-500)',
            300: 'var(--primitive-ink-300)',
            100: 'var(--primitive-ink-100)',
          },
          sand: {
            300: 'var(--primitive-sand-300)',
            100: 'var(--primitive-sand-100)',
            50: 'var(--primitive-sand-50)',
          },
          white: 'var(--primitive-white)',
        },
        // Semantic Surfaces
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          white: 'var(--color-bg-white)',
          dark: 'var(--color-bg-dark)',
          brand: 'var(--color-bg-brand)',
          'brand-deep': 'var(--color-bg-brand-deep)',
          accent: 'var(--color-bg-accent)',
          subtle: 'var(--color-bg-subtle)',
        },
        // Semantic Text
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
          'on-dark': 'var(--color-text-on-dark)',
          'on-dark-dim': 'var(--color-text-on-dark-dim)',
          brand: 'var(--color-text-brand)',
          accent: 'var(--color-text-accent)',
          link: 'var(--color-text-link)',
          'link-hover': 'var(--color-text-link-hover)',
        },
        // Semantic Component and Interactions
        border: {
          default: 'var(--color-border-default)',
          strong: 'var(--color-border-strong)',
          accent: 'var(--color-border-accent)',
          subtle: 'var(--color-border-subtle)',
        },
        btn: {
          primary: {
            bg: 'var(--color-btn-primary-bg)',
            'bg-hover': 'var(--color-btn-primary-bg-hover)',
            text: 'var(--color-btn-primary-text)',
          },
          ghost: {
            border: 'var(--color-btn-ghost-border)',
            text: 'var(--color-btn-ghost-text)',
            'bg-hover': 'var(--color-btn-ghost-bg-hover)',
            'text-hover': 'var(--color-btn-ghost-text-hover)',
          },
        },
        icon: {
          default: 'var(--color-icon-default)',
          brand: 'var(--color-icon-brand)',
          accent: 'var(--color-icon-accent)',
          'on-dark': 'var(--color-icon-on-dark)',
        },
        stat: {
          number: 'var(--color-stat-number)',
          'on-dark': 'var(--color-stat-on-dark)',
        },
        overlay: {
          image: 'var(--color-overlay-image)',
          hover: 'var(--color-overlay-hover)',
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      fontSize: {
        display: 'var(--text-display)',
        h1: 'var(--text-h1)',
        h2: 'var(--text-h2)',
        h3: 'var(--text-h3)',
        h4: 'var(--text-h4)',
        lead: 'var(--text-lead)',
        body: 'var(--text-body)',
        'body-lg': 'var(--text-body-lg)',
        small: 'var(--text-small)',
        label: 'var(--text-label)',
        ui: 'var(--text-ui)',
      },
      lineHeight: {
        tight: 'var(--leading-tight)',
        snug: 'var(--leading-snug)',
        normal: 'var(--leading-normal)',
        relaxed: 'var(--leading-relaxed)',
      },
      letterSpacing: {
        tight: 'var(--tracking-tight)',
        normal: 'var(--tracking-normal)',
        wide: 'var(--tracking-wide)',
        wider: 'var(--tracking-wider)',
      },
      spacing: {
        'space-4': 'var(--space-4)',
        'space-8': 'var(--space-8)',
        'space-16': 'var(--space-16)',
        'space-24': 'var(--space-24)',
        'space-32': 'var(--space-32)',
        'space-40': 'var(--space-40)',
        'space-48': 'var(--space-48)',
        'space-56': 'var(--space-56)',
        'space-64': 'var(--space-64)',
        'space-80': 'var(--space-80)',
        'space-96': 'var(--space-96)',
        'space-128': 'var(--space-128)',
      },
      gap: {
        sm: 'var(--gap-sm)',
        md: 'var(--gap-md)',
        lg: 'var(--gap-lg)',
        xl: 'var(--gap-xl)',
      },
      borderWidth: {
        thin: 'var(--border-thin)',
        medium: 'var(--border-medium)',
        thick: 'var(--border-thick)',
        rule: 'var(--border-rule)',
      },
      borderRadius: {
        none: 'var(--radius-none)',
        sm: 'var(--radius-sm)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        none: 'var(--shadow-none)',
        'offset-gold': 'var(--shadow-offset-gold)',
        'offset-green': 'var(--shadow-offset-green)',
        'btn-hover': 'var(--shadow-btn-hover)',
        nav: 'var(--shadow-nav)',
      },
      transitionDuration: {
        instant: 'var(--duration-instant)',
        fast: 'var(--duration-fast)',
        normal: 'var(--duration-normal)',
        slow: 'var(--duration-slow)',
        crawl: 'var(--duration-crawl)',
      },
      transitionTimingFunction: {
        'out-standard': 'var(--ease-out-standard)',
        'in-standard': 'var(--ease-in-standard)',
        'in-out': 'var(--ease-in-out)',
        linear: 'var(--ease-linear)',
      }
    },
  },
  plugins: [],
};

export default config;

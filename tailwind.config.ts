import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Samos Music Platform Colors
        'samos': {
          primary: "hsl(var(--samos-primary))",
          'primary-light': "hsl(var(--samos-primary-light))",
          'primary-dark': "hsl(var(--samos-primary-dark))",
        },
        
        // Core Theme
        background: "hsl(var(--background))",
        'background-subtle': "hsl(var(--background-subtle))",
        'background-card': "hsl(var(--background-card))",
        foreground: "hsl(var(--foreground))",
        
        // Interactive Elements
        surface: "hsl(var(--surface))",
        'surface-hover': "hsl(var(--surface-hover))",
        border: "hsl(var(--border))",
        
        // Player
        'player-bg': "hsl(var(--player-bg))",
        'player-surface': "hsl(var(--player-surface))",
        
        // Text
        'text-primary': "hsl(var(--text-primary))",
        'text-secondary': "hsl(var(--text-secondary))",
        'text-muted': "hsl(var(--text-muted))",
        
        // Status
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        error: "hsl(var(--error))",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        'sm': "var(--radius-sm)",
      },
      boxShadow: {
        'sm': "var(--shadow-sm)",
        'md': "var(--shadow-md)",
        'lg': "var(--shadow-lg)",
        'glow': "var(--shadow-glow)",
      },
      transitionTimingFunction: {
        'smooth': "cubic-bezier(0.4, 0, 0.2, 1)",
        'bounce': "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "music-wave": {
          "0%, 100%": { height: "4px" },
          "50%": { height: "20px" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.4s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "music-wave": "music-wave 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        ink: "#0B1418",
        cloud: "#F5F7F8",
        "teal-deep": "#003F46",
        "teal-shadow": "#003C43",
        "teal-muted": "#0A6B70",
        border: "rgba(11,20,24,0.08)",
        ring: "#003F46",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-grotesk)", "var(--font-inter)", "ui-sans-serif", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        wider2: "0.14em",
      },
      maxWidth: {
        prose2: "65ch",
      },
      boxShadow: {
        card: "0 1px 0 rgba(11,20,24,0.04), 0 8px 24px -12px rgba(11,20,24,0.12)",
        cardHover: "0 1px 0 rgba(11,20,24,0.04), 0 24px 48px -20px rgba(0,63,70,0.25)",
        cardDark: "0 1px 0 rgba(255,255,255,0.04), 0 24px 48px -20px rgba(0,0,0,0.5)",
        ringTeal: "0 0 0 4px rgba(0,63,70,0.12)",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.7" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        twinkle: "twinkle 4s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out both",
        "scroll-bounce": "scroll-bounce 2s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

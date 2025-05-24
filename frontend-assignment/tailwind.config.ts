import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dropbox: {
          blue: '#0061FF',
          dark: '#0052CC',
          gray: '#666666',
          black: '#000000',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui/package.json" assert { type: "json" };

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Inter Display", "ui-sans-serif"],
        body: ['""'],
      },
    },
  },
  plugins: [daisyui],
};

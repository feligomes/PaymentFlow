import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#65657B",
        "custom-blue": "#13126C",
      },
      fontFamily: {
        arial: ["Arial", "sans-serif"],
        georgia: ["Georgia", "serif"],
      },
    },
  },

  plugins: [],
};
export default config;

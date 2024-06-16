import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import type { Config } from "tailwindcss";

const addVariablesForColors = ({ addBase, theme }: any) => {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'emilys-candy': ['var(--font-emilys-candy)'], 
        'amatic-sc': ['var(--font-amatic-sc)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        apple: "#34D399", // Green
        banana: "#FBBF24", // Yellow
        cherry: "#F87171", // Red
        date: "#A16207", // Brown
        elderberry: "#4B5563", // Grayish
        fig: "#A78BFA", // Purple
        grape: "#8B5CF6", // Violet
        honeydew: "#D1FAE5", // Light Green
        icedberry: "#60A5FA", // Light Blue
        jackfruit: "#FCD34D", // Golden Yellow
        kiwi: "#10B981", // Emerald Green
        lemon: "#FDE047", // Lemon Yellow
      },
    },
  },
  plugins: [addVariablesForColors],
};

export default config;

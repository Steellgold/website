import { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {}
  },
  plugins: [
    // eslint-disable-next-line
    require("@tailwindcss/typography")
  ]
} satisfies Config;
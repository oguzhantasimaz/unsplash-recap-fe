/** @type {import("tailwindcss").Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      tiny: ["0.625rem", { lineHeight: "0.75rem" }],
      xs: ["0.8rem", { lineHeight: "1.3rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "2rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2.5rem" }],
      "3xl": ["2rem", { lineHeight: "2.5rem" }],
      "4xl": ["2.5rem", { lineHeight: "3rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["4rem", { lineHeight: "1" }],
      "7xl": ["5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    extend: {
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      maxWidth: {
        "2xl": "40rem",
      },
      colors: {
        brandRed: "#E8003C",
        brandBlue: "#35A1DA",
        brandGreen: "#A4CA38",
        brandOrange: "#F38329",
        brandGray: "#CCCCCB",
        brandPurple: "#89398C",
      },
    },
  },
};
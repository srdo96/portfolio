module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b1ebef",
          secondary: "#21afa6",
          accent: "#bdef92",
          neutral: "#252731",
          "base-100": "#EEF2F7",
          info: "#5DBCF4",
          success: "#1B935B",
          warning: "#F9C639",
          error: "#F6746F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

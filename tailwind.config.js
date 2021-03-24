module.exports = {
  tailwindcss: {
    jit: true,
    cssPath: "~/assets/css/tailwind.css"
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      sans:['"Open Sans", "sans-serif"'],
      theme:['"Poppins"'],
      'reemKufi':[' "Reem Kufi" '],
      'heading':['"Righteous"'],
      'Arial' : ["Arial"],
      'Roboto' : ["Roboto"]
    },
    colors:{
      searchBarGrey : "#F9F9F9",
      red : "#FF4B1E",
      w : "#FFF",
      "theme": "var(--theme)",
      black:"#000",
      NavbarBg : "#213232",
      lightgreen : "#08AC44",
      searchBarGrey : "#F9F9F9",
      SkinBg : "#F9F5F2",
      red: "#059EC0",
      lightblack: "#213232",
      lightgray: "#DCDCDC",
      "AdminGrey" : "#EFEFEF",
      darkGrey : "#4E4E53",
      white: "#FFF",
      WbgGrey: "#EBEBEB",
      Removebg : "#C70B0B",
      "themeColor" : "var(--themeColor)",
      "demo" : "var(--demo)",
    },
    textColor: {
      navBartext : "#CDCDCD",
      white: "#FFF", 
      black: "#000",
      LogoText : "#08AC44",
      GrayText :"#7B7878",
      "themeColor" : "var(--themeColor)",
      "theme" : "var(--theme)"
    },
  },
  variants: {
    extend: {
      themeColor : "--var(themeColor)",
      "theme" : "var(--theme)"
    },
  },
  purge: false,
  plugins: [],
}

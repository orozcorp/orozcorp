/* eslint-disable import/no-anonymous-default-export */
export default {
  space: [0, 4, 12, 24, 48, 96, 192, 384, 768],
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#385a7c",
    secondary: "#008080",
    pink: "#f26363",
    muted: "#EAE9EA",
    yellow: "#797A79",
  },

  fonts: {
    body: '"Roboto", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  badges: {
    primary: {
      bg: "primary",
      color: "white",
    },
    secondary: {
      bg: "secondary",
      color: "white",
    },
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 1px",
      "&:hover": {
        bg: "secondary",
        color: "white",
      },
    },
  },
  messages: {
    messageTest: {
      bg: "rgba(241, 51, 113, 0.3)",
    },
  },
  alerts: {
    secondary: {
      backgroundColor: "secondary",
    },
    orange: {
      backgroundColor: "pink",
      position: "absolute",
      top: "80px",
      boxShadow: "0px 6px 15px 0px rgba(0, 0, 0, 0.25)",
      right: "10px",
    },
    blue: {
      backgroundColor: "primary",
      position: "absolute",
      top: "80px",
      boxShadow: "0px 6px 15px 0px rgba(0, 0, 0, 0.25)",
      right: "10px",
    },
  },
  images: {
    productosDisp: {
      width: ["150px", "250px"],
      height: ["225px", "375px"],
      objectFit: "cover",
      border: "0.5px solid rgba(0,0,0, 0.1)",
    },
    logo: {
      height: "40px",
      width: "auto",
    },
    productosDispLG: {
      width: "400px",
      height: "600px",
      objectFit: "cover",
    },
    productosDispSmall: {
      width: "100px",
      height: "200px",
      objectFit: "cover",
    },
    colorSelectSmall: {
      width: "60px",
      height: "60px",
      boxShadow: "3px 6px rgba(180,180,180, .2)",
      borderRadius: "9999999px",
      marginLeft: "4px",
      marginRight: "4px",
    },
    colorSelectedSmall: {
      width: "120px",
      height: "120px",
      boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25)",
      borderRadius: "9999999px",
      border: "4px solid #ffffff;",
    },
    firma: {
      width: "200px",
      height: "100px",
    },
    instagramSmall: {
      width: "300px",
      height: "300px",
      boxShadow: "3px 6px rgba(180,180,180, .2)",
      margin: "10px",
    },
    tarjeta: {
      width: "50px",
      height: "50px",
    },
    fichaT: {
      width: "900px",
      height: "1200px",
    },
    smallColor: {
      width: "40px",
      height: "40px",
      boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25)",
      borderRadius: "9999999px",
      border: "1px solid #ffffff;",
    },
    smallColorSelected: {
      width: "45px",
      height: "45px",
      boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25)",
      borderRadius: "9999999px",
      border: "1px solid #8f0000",
    },
    tarjetaSM: {
      width: "40px",
      height: "50px",
    },
    tarjetaOxxo: {
      width: "90px",
      height: "50px",
    },
    stripe: {
      width: "50px",
      height: "50px",
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  text: {
    small: {
      fontSize: 1,
    },
  },
  buttons: {
    small: {
      padding: "10px",
      fontSize: "10px",
    },
    primary: {
      color: "white",
      bg: "primary",
      "&:hover": {
        bg: "text",
      },
      "&:disabled": {
        bg: "#797A79",
      },
    },
    danger: {
      color: "background",
      bg: "secondary",
      "&:hover": {
        bg: "text",
      },
      "&:disabled": {
        bg: "#797A79",
      },
    },
    yellow: {
      color: "white",
      bg: "#797A79",
      "&:disabled": {
        bg: "#EAE9EA",
        color: "#fff",
      },
    },
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 1px",
      "&:hover": {
        bg: "secondary",
        color: "white",
      },
      "&:disabled": {
        bg: "#000",
        color: "#fff",
      },
    },
    white: {
      color: "primary",
      bg: "#fff",
      border: "1px solid black",
      padding: "4px",
      "&:disabled": {
        bg: "#EAE9EA",
        color: "#fff",
      },
      "&:hover": {
        bg: "primary",
        color: "white",
      },
    },
    pink: {
      color: "white",
      bg: "#000000",
      "&:disabled": {
        bg: "rgba(121, 122, 121, 0.3)",
        color: "white",
      },
    },

    black: {
      color: "white",
      bg: "black",
    },
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1,
    heading: 1.5,
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    spinnerWhite: {
      color: "#ffffff",
    },
    kpiVentas: {
      backgroundColor: "secondary",
      color: "white",
      textAlign: "center",
      flex: "1 1 200px",
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      alignContent: "center",
    },
    kpiFinanzas: {
      backgroundColor: "yellow",
      color: "white",
      textAlign: "center",
      flex: "1 1 200px",
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      alignContent: "center",
    },
    kpiFinanzasBlack: {
      backgroundColor: "primary",
      color: "white",
      textAlign: "center",
      flex: "1 1 200px",
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      alignContent: "center",
    },
    kpiProduccion: {
      backgroundColor: "#0948ad",
      color: "white",
      textAlign: "center",
      flex: "1 1 200px",
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      alignContent: "center",
    },
    donut: {
      color: "#000",
    },
    boxMenus: {
      padding: "14px",
      fontSize: "18px",
      backgroundColor: "pink",
      color: "white",
      textDecoration: "none",
    },
    boxGlass: {
      background: "rgba( 255, 255, 255, 0.55 )",
      boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 13.5px )",
      borderRadius: "10px",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 7,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      borderColor: "gray",
      boxShadow: "0 0 0 ",
      "&:focus": {
        borderColor: "primary",
        outline: "none",
      },
      marginTop: "6px",
    },
    select: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        outline: "none",
      },
    },
    textarea: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        outline: "none",
      },
    },
    slider: {
      bg: "muted",
    },
  },
  text: {
    small: {
      fontSize: "9px",
    },
    default: {
      color: "text",
      fontSize: 1,
    },

    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
  },
};

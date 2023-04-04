/* eslint-disable import/no-anonymous-default-export */
export default {
  space: [0, 4, 12, 24, 48, 96, 192, 384, 768],
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#000",
    secondary: "#008080",
    danger: "#b30018",
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
        color: "white",
      },
      "&:disabled": {
        bg: "#797A79",
      },
    },
    danger: {
      color: "white",
      bg: "danger",
      "&:hover": {
        bg: "transparent",
        border: "1px solid #b30018",
        color: "danger",
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
    boxGlassBlackBG: {
      background: "rgba( 255, 255, 255, 0.3 )",
      boxShadow: " 0 8px 32px 0 rgba( 255, 255, 255, 0.1 )",
      backdropFilter: "blur( 5px )",
      borderRadius: "5px",
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

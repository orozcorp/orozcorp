import { Box } from "@theme-ui/components";
import { FaTimes } from "react-icons/fa";
export default function Modal({ children, display, setDisplay }) {
  return (
    <Box
      sx={{
        display: display,
        position: "fixed",
        zIndex: "999",
        paddingTop: "50px",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        overflow: "auto",
        backgroundColor: "rgb(0,0,0)",
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fefefe",
          margin: "auto",
          padding: "20px",
          border: "1px solid #888",
          width: "90%",
          borderRadius: "2%",
        }}
      >
        <span
          onClick={() => setDisplay("none")}
          style={{
            color: "#aaa",
            float: "right",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <FaTimes />
        </span>
        <Box mt={2}>{children}</Box>
      </Box>
    </Box>
  );
}

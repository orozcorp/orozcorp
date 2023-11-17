import { FaTimes } from "react-icons/fa";
export default function Modal({ children, display, setDisplay }) {
  return (
    <div
      style={{
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
      <div
        style={{
          backgroundColor: "#fefefe",
          margin: "auto",
          padding: "20px",
          border: "1px solid #888",
          width: "90%",
          maxWidth: "800px",
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
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

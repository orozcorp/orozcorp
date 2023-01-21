import { AiOutlineMenu } from "react-icons/ai";
export default function Menu({ toggled, setToggled }) {
  return (
    <div
      style={{
        marginRight: "20px",
        marginLeft: "20px",
      }}
    >
      <AiOutlineMenu
        style={{ fontSize: "30px", color: "#fff" }}
        onClick={() => setToggled(!toggled)}
      />
    </div>
  );
}

import { Text, Flex } from "theme-ui";
import { FaTimes } from "react-icons/fa";
import { signOut } from "next-auth/react";
import LinksNotSession from "./LinksNotSession";
import LateralMenuAdmin from "./LateralMenuAdmin";
function LateralMenu({ toggled, setToggled, session }) {
  const userAdmin = session?.roles.includes("admin");
  return (
    <Flex
      className={toggled ? "sideNavMoved" : "sidenav"}
      id="mySidenav"
      sx={{
        flexFlow: "column nowrap",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "#48A9A6",
        height: "100%",
      }}
      onClick={() => setToggled(!toggled)}
    >
      <FaTimes
        style={{ alignSelf: "left", marginBottom: "30px", color: "#fff" }}
      />
      {!session && <LinksNotSession />}
      {session && userAdmin && <LateralMenuAdmin />}
      {session && (
        <Text
          mt={3}
          onClick={signOut}
          sx={{ textAlign: "center", alignSelf: "center", color: "white" }}
        >
          Log Out
        </Text>
      )}
    </Flex>
  );
}

export default LateralMenu;

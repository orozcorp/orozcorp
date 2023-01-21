import { Box, Text, Flex } from "theme-ui";
import { FaTimes } from "react-icons/fa";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import LinksNotSession from "./LinksNotSession";
function LateralMenu({ toggled, setToggled, session }) {
  return (
    <Box
      className={toggled ? "sideNavMoved" : "sidenav"}
      id="mySidenav"
      sx={{
        display: "flex",
        flexFlow: "column nowrap",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "#008080",
        height: "100%",
      }}
      onClick={() => setToggled(!toggled)}
    >
      <FaTimes
        style={{ alignSelf: "left", marginBottom: "30px", color: "#fff" }}
      />
      {!session && (
        <>
          <LinksNotSession />
          <Text
            mt={3}
            onClick={signOut}
            sx={{ textAlign: "center", alignSelf: "center", color: "white" }}
          >
            Log Out
          </Text>
        </>
      )}
    </Box>
  );
}

export default LateralMenu;

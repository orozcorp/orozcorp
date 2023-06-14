import { Flex, Text, Box } from "@theme-ui/components";
import Image from "next/image";
import { useState } from "react";

export default function FamilyMember({ user, setActive, active }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Flex
      sx={{
        flexFlow: "column nowrap",
        justifyContent: "stretch",
        alignItems: "center",
        alignContent: "center",
        background: hovered && "rgba( 255, 255, 255, 0.55 )",
        boxShadow: hovered && " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: hovered && "blur( 13.5px )",
        borderRadius: hovered && "10px",
        border:
          active._id === user._id
            ? "1px solid rgb(7 89 133)"
            : hovered && "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setActive(user)}
      p={2}
    >
      {user.profile.picture ? (
        <Image
          src={user.profile.picture}
          width={90}
          height={100}
          alt={user?.profile?.name}
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            border: "1px solid rgb(7 89 133)",
            boxShadow: "6px 6px 3px 0px rgba(0,0,0,0.75)",
          }}
        />
      ) : (
        <Box
          sx={{
            width: "90px",
            height: "100px",
            borderRadius: "50%",
            border: "1px solid rgb(7 89 133)",
            boxShadow: "6px 6px 3px 0px rgba(7, 89, 133,0.75)",
          }}
        />
      )}
      <Text
        mt={2}
        sx={{ textAlign: "center", color: "rgb(7 89 133)", fontWeight: "bold" }}
      >
        {user.profile.name}
      </Text>
      <Text
        sx={{ textAlign: "center", color: "rgb(7 89 133)", fontWeight: "bold" }}
      >
        {user.profile.lastName}
      </Text>
    </Flex>
  );
}
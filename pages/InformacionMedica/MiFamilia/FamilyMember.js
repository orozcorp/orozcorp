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
        backgroundColor:
          active._id === user._id ? "rgb(7 89 133)" : "rgb(186 230 253)",
        borderRadius: "999px",
        border: "1px solid white",
        boxShadow:
          "0 10px 15px -3px rgba(7, 89, 133, 0.1), 0 4px 6px -4px rgba(7, 89, 133, 0.1)",
        width: "100px",
        my: 2,
        mx: 2,
        p: 3,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setActive(user)}
    >
      {user.profile.picture ? (
        <Image
          src={user.profile.picture}
          width={50}
          height={50}
          alt={user?.profile?.name}
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            border: "1px solid rgb(7 89 133)",
          }}
        />
      ) : (
        <Box
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border:
              active._id === user._id && !hovered
                ? "1px solid white"
                : "1px solid rgb(7 89 133)",
          }}
        />
      )}
      <Text
        mt={2}
        sx={{
          textAlign: "center",
          color: active._id === user._id ? "white" : "rgb(7 89 133)",
          fontWeight: "bold",
        }}
      >
        {user.profile.name}
      </Text>
      <Text
        sx={{
          textAlign: "center",
          color: active._id === user._id ? "white" : "rgb(7 89 133)",
          fontWeight: "bold",
        }}
      >
        {user.profile.lastName}
      </Text>
    </Flex>
  );
}

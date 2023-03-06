"use client";
import { Flex, Text } from "@theme-ui/components";

export default function Footer() {
  const today = new Date();
  return (
    <Flex
      sx={{
        position: "fixed",
        left: 0,
        bottom: 0,
        backgroundColor: "#4281A4",
        width: "100%",
      }}
      p={2}
    >
      <Text sx={{ color: "white" }}> Eduardo Orozco {today.getFullYear()}</Text>
    </Flex>
  );
}

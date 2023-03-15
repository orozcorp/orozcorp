"use client";
import { Flex, Text } from "@theme-ui/components";

export default function Footer() {
  const today = new Date();
  return (
    <Flex
      sx={{
        backgroundColor: "#121212",
        width: "100%",
      }}
      p={2}
    >
      <Text sx={{ color: "white" }}> Eduardo Orozco {today.getFullYear()}</Text>
    </Flex>
  );
}

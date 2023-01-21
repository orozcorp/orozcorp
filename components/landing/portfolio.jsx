"use client";
import { Box, Heading, Flex } from "@theme-ui/components";

export default function Portfolio() {
  return (
    <Flex
      id="Portfolio"
      p={2}
      mb={5}
      sx={{
        height: "100vh",
        alignItems: "flex-start",
        flexFlow: ["column nowrap", "row wrap"],
      }}
    >
      <Heading
        as="h1"
        pl={[1, 3]}
        sx={{
          color: "#385a7c",
          fontSize: "60px",
          position: ["relative", "sticky"],
          top: "50%",
          flex: 1,
        }}
      >
        Portfolio
      </Heading>
    </Flex>
  );
}

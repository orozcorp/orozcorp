import { Box, Flex, Heading, Text, Badge } from "@theme-ui/components";
import { AiOutlineWhatsApp } from "react-icons/ai";
export default function Contact() {
  const mensaje = "Hello, I am @ orozcorp.live and I am interested in ..";
  return (
    <Flex
      id="Contact"
      sx={{
        backgroundColor: "#b2eee6",
        alignItems: "flex-start",
        flexFlow: ["column nowrap", "row wrap"],
        borderRadius: ["0", "0% 100% 0% 100% / 69% 0% 100% 31% "],
      }}
      p={2}
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
        Contact me
      </Heading>
      <Box ml={[1, 4]} sx={{ flex: 1 }} mr={2} pr={3} mt={3}>
        <Heading my={3} sx={{ fontSize: "48px" }} as="h2">
          Do you have an idea or a project?
        </Heading>
        <Heading my={3} sx={{ fontSize: "48px" }} as="h2">
          Do you want to improve your website?
        </Heading>
        <Heading my={3} sx={{ fontSize: "48px" }} as="h2">
          Do you need a web app?
        </Heading>
        <Heading my={3} sx={{ fontSize: "48px" }} as="h2">
          <a
            href={`https://wa.me/525536554893?text=${mensaje.replaceAll(
              " ",
              "%20"
            )}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Message me here
            <AiOutlineWhatsApp />
          </a>
        </Heading>
      </Box>
    </Flex>
  );
}

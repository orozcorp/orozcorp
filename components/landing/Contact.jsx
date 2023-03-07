import { Box, Flex, Heading, Text, Badge } from "@theme-ui/components";
import { AiOutlineWhatsApp } from "react-icons/ai";
export default function Contact() {
  const mensaje = "Hello, I am @ orozcorp.live and I am interested in ..";
  return (
    <Flex
      id="Contact"
      sx={{
        flexFlow: ["column nowrap", "row wrap"],
        alignItems: ["center", "flex-start"],
        justifyContent: ["center", "flex-start"],
        alignContent: ["center", "flex-start"],
      }}
      p={2}
      pb={4}
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
        <a
          href={`https://wa.me/525536554893?text=${mensaje.replaceAll(
            " ",
            "%20"
          )}`}
          rel="noopener noreferrer"
          target="_blank"
          style={{ color: "#385a7c" }}
        >
          Contact me
        </a>
      </Heading>
      <Box sx={{ flex: 1 }} mt={3}>
        <Box variant="styles.boxGlass" p={2} m={2}>
          <Heading
            my={3}
            sx={{ fontSize: "24px", color: "#385a7c", textAlign: "center" }}
            as="h2"
          >
            Do you have an idea or a project?
          </Heading>
        </Box>
        <Box variant="styles.boxGlass" p={2} m={2}>
          <Heading
            my={3}
            sx={{ fontSize: "24px", color: "#385a7c", textAlign: "center" }}
            as="h2"
          >
            Do you want to improve your website?
          </Heading>
        </Box>
        <Box variant="styles.boxGlass" p={2} m={2}>
          <Heading
            my={3}
            sx={{ fontSize: "24px", color: "#385a7c", textAlign: "center" }}
            as="h2"
          >
            Do you need a web app?
          </Heading>
        </Box>
      </Box>
    </Flex>
  );
}

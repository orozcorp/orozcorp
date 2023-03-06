import { Box, Flex, Heading, Text } from "@theme-ui/components";
import Image from "next/image";
import { rgbDataURL } from "../../lib/helpers/blur";
export default function Services() {
  return (
    <Flex
      id="Services"
      sx={{
        backgroundColor: "#E4DFDA",
        alignItems: "flex-start",
        flexFlow: "column nowrap",
        borderRadius: ["0%", "0% 100% 0% 100% / 100% 25% 75% 0% "],
      }}
      p={2}
      pb={5}
    >
      <Heading
        as="h1"
        pl={[1, 3]}
        sx={{
          color: "#385a7c",
          fontSize: "60px",
          textAlign: "left",
        }}
      >
        Services
      </Heading>
      <Flex
        sx={{
          flexFlow: "row wrap",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box variant="styles.boxGlass" p={2} m={2}>
          <Heading
            my={3}
            sx={{ fontSize: "24px", color: "#385a7c", textAlign: "center" }}
            as="h2"
          >
            Webapp Creation
          </Heading>
        </Box>
        <Box variant="styles.boxGlass" p={2} m={2}>
          <Heading
            my={3}
            sx={{ fontSize: "24px", color: "#385a7c", textAlign: "center" }}
            as="h2"
          >
            Customized ERP
          </Heading>
        </Box>
        <Box variant="styles.boxGlass" p={2} m={2}>
          <Heading
            my={3}
            sx={{ fontSize: "24px", color: "#385a7c", textAlign: "center" }}
            as="h2"
          >
            Entrepreneurship Consulting
          </Heading>
        </Box>
        <Box variant="styles.boxGlass" p={2} m={2}>
          <Heading
            my={3}
            sx={{ fontSize: "24px", color: "#385a7c", textAlign: "center" }}
            as="h2"
          >
            Personalized webpage
          </Heading>
        </Box>
        <Box variant="styles.boxGlass" p={2} m={2}>
          <Heading
            my={3}
            sx={{ fontSize: "24px", color: "#385a7c", textAlign: "center" }}
            as="h2"
          >
            Personalized eccomerce
          </Heading>
        </Box>
      </Flex>
    </Flex>
  );
}

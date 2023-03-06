import { Box, Flex, Heading, Text, Badge } from "@theme-ui/components";
import Image from "next/image";
import { rgbDataURL } from "../../lib/helpers/blur";
export default function About() {
  return (
    <Flex
      id="About"
      sx={{
        backgroundColor: "#E4DFDA",
        alignItems: "center",
        flexFlow: ["column nowrap", "row wrap"],
        borderRadius: ["0", "0% 100% 0% 100% / 69% 0% 100% 31% "],
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
          flex: 1,
        }}
      >
        About me!
      </Heading>
      <Box ml={[1, 4]} sx={{ flex: 1 }} mr={2} pr={3}>
        <Flex
          mt={2}
          mb={2}
          pt={5}
          sx={{
            flexFlow: "row wrap",
            justifyContent: "flex-start",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/TECBOY+FACE.svg"
            height={100}
            width={70}
            alt="orozcorp logo"
            style={{ maxWidth: "100%", height: "auto" }}
            placeholder="blur"
            blurDataURL={rgbDataURL(178, 238, 230)}
          />
          <Heading as="h2" sx={{ color: "#385a7c" }} mt={3}>
            Eduardo Orozco Mendoza
          </Heading>
        </Flex>
        <Flex
          sx={{
            flexFlow: "row wrap",
            justifyContent: "flex-start",
            alignContent: "center",
            alignItems: "center",
          }}
          mb={2}
        >
          <Badge m={1}>Entrepreneur</Badge>
          <Badge m={1}>Perseverant</Badge>
          <Badge m={1}>Optimistic</Badge>
          <Badge m={1}>Full-Stack Developer</Badge>
          <Badge m={1}>Gentle parent</Badge>
        </Flex>
        <Box mt={2} mb={2}>
          <Heading as="h3" sx={{ color: "#385a7c" }}>
            Profile
          </Heading>
          <Text>
            Chief Operating Officer with a demonstrated history of working in
            the consumer services industry. Skilled in Operations Management,
            Full-Stack Development, Data Analytics, Project Management, and
            Business Development. Strong operations professional with a
            Bachelor's degree focused in Entrepreneurship/Entrepreneurial
            Studies from ITESM CSF.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

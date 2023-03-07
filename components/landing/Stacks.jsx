import { Box, Flex, Heading, Text } from "@theme-ui/components";
import Image from "next/image";
import { rgbDataURL } from "../../lib/helpers/blur";
export default function Stacks() {
  return (
    <Flex
      id="StacksAndSkills"
      sx={{
        backgroundColor: "#E4DFDA",
        alignItems:["center", "flex-start"],
        flexFlow: ["column nowrap", "row wrap"],
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
          position: ["relative", "sticky"],
          top: "50%",
          flex: 1,
          textAlign: "left",
        }}
      >
        Stacks and Skills
      </Heading>
      <Box mt={[2, 6]} ml={[1, 4]} sx={{ flex: 1 }} mr={[0, 4]} p={2}>
        <Heading as="h2" sx={{ color: "#385a7c", textAlign: "center" }}>
          Some of the stacks, skills, languages, and frameworks I am fluid in
        </Heading>
        <Box mt={4}>
          <Flex
            sx={{
              flexFlow: "column nowrap",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "space-between",
              width: "100%",
              textAlign: "center",
            }}
            mt={4}
            mb={4}
          >
            <Heading as="h3" sx={{ color: "#385a7c" }}>
              Starter Kit
            </Heading>
            <Flex
              mt={2}
              mb={2}
              sx={{
                flexFlow: "row wrap",
                justifyContent: ["center", "space-between"],
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Image
                src="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/html-1.svg"
                width={100}
                height={100}
                alt="html 5"
                placeholder="blur"
                blurDataURL={rgbDataURL(178, 238, 230)}
              />
              <Image
                src="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/icons8-css3.svg"
                width={100}
                height={100}
                alt="CSS"
                placeholder="blur"
                blurDataURL={rgbDataURL(178, 238, 230)}
              />
              <Image
                src="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/icons8-javascript.svg"
                width={100}
                height={100}
                alt="Javascript"
                placeholder="blur"
                blurDataURL={rgbDataURL(178, 238, 230)}
              />
            </Flex>
            <Text sx={{ color: "#385a7c" }}>
              Every web developer must start and master the basic 3
            </Text>
          </Flex>
          <Flex
            sx={{
              flexFlow: "column nowrap",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "space-between",
              width: "100%",
              textAlign: "center",
            }}
            mt={4}
            mb={4}
          >
            <Heading as="h3" sx={{ color: "#385a7c" }}>
              Fullstack beginners road
            </Heading>
            <Flex
              mt={2}
              mb={2}
              sx={{
                flexFlow: "row wrap",
                justifyContent: ["center", "space-between"],
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Image
                src="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/icons8-node-js.svg"
                width={100}
                height={100}
                alt="Node"
                placeholder="blur"
                blurDataURL={rgbDataURL(178, 238, 230)}
              />
              <Image
                src="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/MongoDB_Logo.svg"
                width={200}
                height={100}
                alt="Mongo"
                placeholder="blur"
                blurDataURL={rgbDataURL(178, 238, 230)}
              />
              <Image
                src="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/meteor-icon.svg"
                width={100}
                height={100}
                alt="Meteor js"
                placeholder="blur"
                blurDataURL={rgbDataURL(178, 238, 230)}
              />
            </Flex>
            <Text sx={{ color: "#385a7c" }}>
              Using servers and NoSQL, with the best beginners framework
            </Text>
          </Flex>
          <Flex
            sx={{
              flexFlow: "column nowrap",
              justifyContent: "center",
              alignContent: "center",
              alignItems: ["center", "space-between"],
              width: "100%",
              textAlign: "center",
            }}
            mt={4}
            mb={4}
          >
            <Heading as="h3" sx={{ color: "#385a7c" }}>
              Starting to get serious
            </Heading>
            <Flex
              mt={2}
              mb={2}
              sx={{
                flexFlow: "row wrap",
                justifyContent: ["center", "space-between"],
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Image
                src="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/icons8-graphql-144.svg"
                width={100}
                height={100}
                alt="Graph QL"
                placeholder="blur"
                blurDataURL={rgbDataURL(178, 238, 230)}
              />
              <Image
                src="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/apollo-graphql-1.svg"
                width={200}
                height={100}
                alt="Apollo"
                placeholder="blur"
                blurDataURL={rgbDataURL(178, 238, 230)}
              />
              <Image
                src="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Nextjs-logo.svg"
                width={200}
                height={100}
                alt="Next JS"
                placeholder="blur"
                blurDataURL={rgbDataURL(178, 238, 230)}
              />
            </Flex>
            <Text sx={{ color: "#385a7c" }}>
              Starting serverless , SSR, with out leaving the nest
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

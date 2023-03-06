import { Flex, Heading, Badge, Text, Box } from "@theme-ui/components";
import Image from "next/image";
import { rgbDataURL } from "../../lib/helpers/blur";
import { ParallaxLayer } from "@react-spring/parallax";
import useWindowSize from "../hooks/useWindowSize";
export default function PortfolioSingle({ offset, onClick, portfolio }) {
  const size = useWindowSize();
  return (
    <Box>
      {size.width > 1200 && (
        <>
          <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
            <Flex
              sx={{
                flexFlow: "column nowrap",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "flex-end",
                width: "90vw",
                height: "50vh",
              }}
              variant="styles.boxGlass"
              p={4}
            >
              <Heading as="h2" mb={2}>
                {portfolio.client}
              </Heading>
              <Flex
                mt={2}
                p={2}
                sx={{
                  flexFlow: "row wrap",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {portfolio.tecUsed.map((val) => (
                  <Badge m={1} key={val}>
                    {val}
                  </Badge>
                ))}
              </Flex>
              <a href={portfolio.website} target="_blank">
                {portfolio.website}
              </a>
              <Text mt={2} sx={{ maxWidth: "360px" }}>
                {portfolio.description}
              </Text>
            </Flex>
          </ParallaxLayer>
          <ParallaxLayer offset={offset} speed={1} onClick={onClick}>
            <Box p={3}>
              <Image
                src={portfolio.mainImage.photo}
                alt={portfolio.client}
                width={700}
                height={350}
                placeholder="blur"
                blurDataURL={rgbDataURL(178, 238, 230)}
                priority
              />
            </Box>
          </ParallaxLayer>
        </>
      )}
      {size.width < 1200 && (
        <ParallaxLayer offset={offset} speed={1} onClick={onClick}>
          <Box>
            <Flex
              sx={{
                flexFlow: "column nowrap",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                width: "90vw",
                height: "100vh",
              }}
              variant="styles.boxGlass"
              p={4}
            >
              <Image
                src={portfolio.mainImage.photo}
                alt={portfolio.client}
                width={700}
                height={350}
                placeholder="blur"
                blurDataURL={rgbDataURL(178, 238, 230)}
                priority
              />
              <Heading as="h2" mb={2}>
                {portfolio.client}
              </Heading>
              <Flex
                mt={2}
                p={2}
                sx={{
                  flexFlow: "row wrap",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {portfolio.tecUsed.map((val) => (
                  <Badge m={1} key={val}>
                    {val}
                  </Badge>
                ))}
              </Flex>
              <a href={portfolio.website} target="_blank">
                {portfolio.website}
              </a>
              <Text mt={2} sx={{ maxWidth: "360px" }}>
                {portfolio.description}
              </Text>
            </Flex>
          </Box>
        </ParallaxLayer>
      )}
    </Box>
  );
}

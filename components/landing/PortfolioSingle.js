import { Flex, Heading, Badge, Text, Box } from "@theme-ui/components";
import Image from "next/image";
import { rgbDataURL } from "../../lib/helpers/blur";
import { ParallaxLayer } from "@react-spring/parallax";
import useWindowSize from "../hooks/useWindowSize";
export default function PortfolioSingle({ offset, onClick, portfolio }) {
  const size = useWindowSize();
  return (
    <Flex
      m={2}
      p={2}
      variant="styles.boxGlass"
      sx={{
        flexFlow: "column nowrap",
        justifyContent: "flex-start",
        alignContent: "center",
        alignItems: "center",
        width: ["300px", "400px"],
      }}
    >
      <Heading as="h2" mb={2}>
        {portfolio.client}
      </Heading>
      <Image
        src={portfolio.mainImage.photo}
        width={300}
        height={200}
        alt={portfolio.client}
        style={{ maxWidth: "100%", height: "auto" }}
        placeholder="blur"
        blurDataURL={rgbDataURL(178, 238, 230)}
      />
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
      <Text mt={2}>{portfolio.description}</Text>
    </Flex>
  );
}

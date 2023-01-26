import { Flex, Heading, Badge, Text } from "@theme-ui/components";
import Image from "next/image";
import { rgbDataURL } from "../../lib/helpers/blur";

export default function PortfolioSingle({ portfolio }) {
  return (
    <Flex
      m={2}
      p={2}
      variant="styles.boxGlass"
      sx={{
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Heading as="h2">{portfolio.client}</Heading>
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

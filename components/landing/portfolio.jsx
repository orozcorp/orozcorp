import { Heading, Flex, Box } from "@theme-ui/components";
import { gql, useQuery } from "@apollo/client";
import { Parallax } from "@react-spring/parallax";
import PortfolioSingle from "./PortfolioSingle";
import { useRef } from "react";
const QUERY = gql`
  query ListPortfolio {
    listPortfolio {
      _id
      client
      description
      mainImage {
        _id
        photo
      }
      startDate
      website
      tecUsed
    }
  }
`;
export default function Portfolio() {
  const { data, loading } = useQuery(QUERY);
  const portfolio = (data && data.listPortfolio) || [];
  const parallax = useRef(null);
  const scroll = (to) => {
    if (to === portfolio.length - 1 && parallax.current) {
      return parallax.current.scrollTo(0);
    }
    if (parallax.current) {
      return parallax.current.scrollTo(to + 1);
    }
  };
  return (
    <Flex
      id="Portfolio"
      p={2}
      sx={{
        width: "100vw",
        height: "100vh",
        alignItems: "flex-start",
        flexFlow: "column nowrap",
        justifyContent: "flex-start",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Heading
        as="h1"
        pl={[1, 3]}
        sx={{
          color: "#385a7c",
          fontSize: "60px",
          wordBreak: "keep-all",
        }}
      >
        Portfolio
      </Heading>
      <Box
        mt={4}
        sx={{
          width: "100vw",
          flexFlow: "row wrap",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "stretch",
          maxHeight: "100vh",
        }}
        p={2}
      >
        <Parallax ref={parallax} pages={4} horizontal>
          {portfolio.map((val, index) => (
            <PortfolioSingle
              key={val._id}
              portfolio={val}
              offset={index}
              onClick={() => scroll(index)}
            />
          ))}
        </Parallax>
      </Box>
    </Flex>
  );
}

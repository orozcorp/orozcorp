import { Heading, Flex, Box } from "@theme-ui/components";
import { gql, useQuery } from "@apollo/client";
import PortfolioSingle from "./PortfolioSingle";
import useWindowSize from "../hooks/useWindowSize";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
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
  const size = useWindowSize();
  const limit = size.width > 800 ? 2 : 1;
  const [offset, setOffset] = useState(0);
  const { data, loading } = useQuery(QUERY, { variables: { offset, limit } });
  const portfolio = (data && data.listPortfolio) || [];
  return (
    <Flex
      id="Portfolio"
      p={2}
      sx={{
        height: "auto",
        alignItems: "flex-start",
        flexFlow: ["column nowrap", "row wrap"],
        justifyContent: ["center", "flex-start"],
        alignContent: ["center", "flex-start"],
        alignItems: ["center", "flex-start"],
      }}
    >
      <Heading
        as="h1"
        pl={[1, 3]}
        sx={{
          color: "#385a7c",
          fontSize: "60px",
          position: ["relative", "relative", "sticky"],
          top: ["0%", "0%", "50%"],
          flex: 1,
          wordBreak: "keep-all",
        }}
      >
        Portfolio
      </Heading>
      <Flex
        mt={[1, 4]}
        ml={[1, 4]}
        sx={{
          flex: 2,
          flexFlow: "row wrap",
          justifyContent: "flex-start",
          alignContent: "center",
          alignItems: "stretch",
          maxHeight: "100vh",
        }}
        mr={[0, 4]}
        p={2}
      >
        {portfolio.map((val) => (
          <PortfolioSingle key={val._id} portfolio={val} />
        ))}
      </Flex>
    </Flex>
  );
}

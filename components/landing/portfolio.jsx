import { Box, Heading, Flex, Spinner } from "@theme-ui/components";
import { gql, useQuery } from "@apollo/client";
import PortfolioSingle from "./PortfolioSingle";
import useWindowSize from "../hooks/useWindowSize";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const QUERY = gql`
  query ListPortfolio($offset: Int!, $limit: Int!) {
    listPortfolio(offset: $offset, limit: $limit) {
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
      mb={5}
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
          flexFlow: "row nowrap",
          justifyContent: "flex-start",
          alignContent: "center",
          alignItems: "stretch",
        }}
        mr={[0, 4]}
        p={2}
      >
        <AiOutlineArrowLeft
          style={{ alignSelf: "center", color: "#008080", fontSize: "90px" }}
          onClick={() => setOffset(offset > 0 ? offset - 1 : 0)}
        />
        {loading && (
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
              height: "300px",
            }}
          >
            <Box sx={{ width: "300px", height: "400px" }}>
              <Spinner />
            </Box>
          </Flex>
        )}

        {portfolio.map((val) => (
          <PortfolioSingle key={val._id} portfolio={val} />
        ))}

        <AiOutlineArrowRight
          style={{ alignSelf: "center", color: "#008080", fontSize: "90px" }}
          onClick={() => setOffset(offset + 1)}
        />
      </Flex>
    </Flex>
  );
}

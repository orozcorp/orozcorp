import { Box, Heading, Flex, Spinner } from "@theme-ui/components";
import { gql, useQuery } from "@apollo/client";
import PortfolioSingle from "./PortfolioSingle";
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
  return (
    <Flex
      id="Portfolio"
      p={2}
      mb={5}
      sx={{
        height: "auto",
        width: "100vw",
        alignItems: "flex-start",
        flexFlow: "column nowrap",
        justifyContent: "center",
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
      <Flex
        my={4}
        sx={{
          width: "100vw",
          flexFlow: "row wrap",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "stretch",
        }}
        p={2}
      >
        {portfolio.map((val) => (
          <PortfolioSingle key={val._id} portfolio={val} />
        ))}
      </Flex>
    </Flex>
  );
}

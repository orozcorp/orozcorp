import { Box, Heading, Flex } from "@theme-ui/components";
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
      website
      tecUsed
    }
  }
`;
export default function Portfolio() {
  const { data } = useQuery(QUERY);
  const portfolio = (data && data.listPortfolio) || [];
  return (
    <Flex
      id="Portfolio"
      p={2}
      mb={5}
      sx={{
        height: "100vh",
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
          position: ["relative", "sticky"],
          top: ["0%", "50%"],
          flex: 1,
          textAlign: "center",
        }}
      >
        Portfolio
      </Heading>
      <Box mt={[2, 6]} ml={[1, 4]} sx={{ flex: 1 }} mr={[0, 4]} p={2}>
        <Flex
          mt={2}
          mb={2}
          sx={{
            flexFlow: "row wrap",
            justifyContent: "flex-start",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          {portfolio.map((val) => (
            <PortfolioSingle key={val._id} portfolio={val} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}

import { Flex, Heading } from "@theme-ui/components";
import ServicesSingle from "./ServicesSingle";
export default function Services() {
  return (
    <Flex
      id="Services"
      sx={{
        flexFlow: "column nowrap",
        borderRadius: ["0%", "0% 100% 0% 100% / 100% 25% 75% 0% "],
        backgroundColor: "#E4DFDA",
        alignItems: ["center", "flex-start"],
        justifyContent: ["center", "flex-start"],
        alignContent: ["center", "flex-start"],
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
          textAlign: "left",
        }}
      >
        Services
      </Heading>
      <Flex
        sx={{
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
        mt={3}
      >
        <ServicesSingle service="Webapp Creation" />
        <ServicesSingle service="Customized ERP" />
        <ServicesSingle service="Entrepreneurship Consulting" />
        <ServicesSingle service="Personalized webpage" />
        <ServicesSingle service="Personalized ecommerce" />
        <ServicesSingle service="Financial viability consultant" />
      </Flex>
    </Flex>
  );
}

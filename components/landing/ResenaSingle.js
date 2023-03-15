import { Flex, Heading, Text } from "@theme-ui/components";
import Image from "next/image";

export default function ResenaSingle({ data }) {
  return (
    <Flex
      mb={4}
      p={2}
      sx={{
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: ["100%", "400px", "800px"],
      }}
    >
      <Heading
        as="h2"
        my={2}
        sx={{
          color: "#ababab",
          textAlign: "center",
          fontSize: "30px",
          minHeight: "200px",
        }}
      >
        "{data.mensaje}"
      </Heading>
      <Flex
        mt={3}
        sx={{
          flexFlow: "row wrap",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={data.logo}
          width={40}
          height={40}
          style={{ borderRadius: "999px" }}
          alt={data.cliente}
        />
        <Heading as="h3" mx={2} sx={{ color: "#fff", fontSize: "20px" }}>
          {data.cliente}
        </Heading>
      </Flex>
    </Flex>
  );
}

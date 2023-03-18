import { Box, Flex, Heading, Text } from "@theme-ui/components";
import Link from "next/link";
import ReactRotatingText from "react-rotating-text";

export default function Section0() {
  return (
    <>
      <Flex
        sx={{
          minHeight: "100vh",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
        p={2}
      >
        <Flex
          my={2}
          sx={{
            flexFlow: "row wrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "baseline",
          }}
        >
          <Heading as="h1" sx={{ fontSize: ["40px", "100px"] }}>
            De ideas a
          </Heading>
          <Heading
            ml={2}
            as="h1"
            sx={{
              fontSize: ["40px", "100px"],
              textDecoration: "underline #910000",
            }}
          >
            <ReactRotatingText
              items={[
                "tu página",
                "tu catálogo",
                "tu App",
                "tu ERP",
                "tu CRM",
                "tu Landing",
              ]}
              color="#000"
            />
          </Heading>
        </Flex>
        <Flex my={2} sx={{ width: ["100%", "60%"] }}>
          <Heading as="h2" sx={{ color: "#4a4a4a", textAlign: "center" }}>
            Nos aliamos con las personas / empresas / amigos para ayudarlos a
            realizar su proyecto digital.
          </Heading>
        </Flex>
        <Box my={3} p={3} sx={{ backgroundColor: "#910000", fontSize: "24px" }}>
          <Link
            href="#crearProductos"
            style={{
              textDecoration: "none",
              color: "#fff", borderRadius:"12px"
            }}
          >
            Averigua cómo
          </Link>
        </Box>
      </Flex>
    </>
  );
}

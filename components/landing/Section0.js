import { Box, Flex, Heading, Text } from "@theme-ui/components";
import Link from "next/link";
import ReactRotatingText from "react-rotating-text";
import { motion } from "framer-motion";

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
                "tu Ecommerce",
              ]}
              color="#000"
            />
          </Heading>
        </Flex>
        <Flex
          my={2}
          sx={{
            width: ["100%", "60%"],
            flexFlow: "row wrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Heading
            as="h2"
            sx={{ color: "#4a4a4a", textAlign: "center", fontSize: "36px" }}
          >
            Tu lo imaginas, nosotros lo creamos
          </Heading>
        </Flex>

        <motion.button
          style={{
            backgroundColor: "#910000",
            borderRadius: "20px",
            fontSize: "24px",
            marginTop: "30px",
            marginBottom: "30px",
            padding: "20px",
          }}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            href="#crearProductos"
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
          >
            Averigua cómo
          </Link>
        </motion.button>
      </Flex>
    </>
  );
}

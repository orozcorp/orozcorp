import { Flex, Heading, Box } from "@theme-ui/components";

export default function Section3() {
  return (
    <Flex
      mt={4}
      p={[2, 4]}
      sx={{
        flexFlow: "column nowrap",
        justifyContent: "flex-start",
        alignContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Heading as="h1" sx={{ fontSize: "36px", color: "#4a4a4a" }}>
        Habilidades y capacidades
      </Heading>
      <Heading
        my={2}
        as="h2"
        sx={{ fontSize: "48px", color: "#000", lineHeight: ".9" }}
      >
        Todo lo que necesitas para crear y lanzar un producto digital
      </Heading>
      <Flex
        my={4}
        sx={{
          flexFlow: "row wrap",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "stretch",
        }}
      >
        <Box m={2} sx={{ width: ["100%", "400px", "400px"] }}>
          <Flex
            sx={{
              flexFlow: "row wrap",
              alignContent: "center",
              alignItems: "center",
              backgroundColor: "#000",
              borderRadius: "12px",
            }}
            p={1}
          >
            <Heading as="h3" mx={3} sx={{ color: "#909090", fontSize: "36px" }}>
              01
            </Heading>
            <Heading as="h3" sx={{ color: "#fff", fontSize: "36px" }}>
              Estrategia
            </Heading>
          </Flex>
          <ul style={{ marginTop: "24px", fontSize: "24px" }}>
            <li>Estrategia de Producto</li>
            <li>Descubrimiento de Clientes</li>
            <li>Investigación de usuario</li>
            <li>Valoraciones Financieras</li>
            <li>Análisis de Business Plan</li>
          </ul>
        </Box>
        <Box m={2} sx={{ width: ["100%", "400px", "400px"] }}>
          <Flex
            sx={{
              flexFlow: "row wrap",
              alignContent: "center",
              alignItems: "center",
              backgroundColor: "#000",
              borderRadius: "12px",
            }}
            p={1}
          >
            <Heading as="h3" mx={3} sx={{ color: "#909090", fontSize: "36px" }}>
              02
            </Heading>
            <Heading as="h3" sx={{ color: "#fff", fontSize: "36px" }}>
              Diseño
            </Heading>
          </Flex>
          <ul style={{ marginTop: "24px", fontSize: "24px" }}>
            <li>Diseño relámpago</li>
            <li>Wireframing</li>
            <li>Crear prototipo</li>
            <li>Branding</li>
          </ul>
        </Box>
        <Box m={2} sx={{ width: ["100%", "400px", "400px"] }}>
          <Flex
            sx={{
              flexFlow: "row wrap",
              alignContent: "center",
              alignItems: "center",
              backgroundColor: "#000",
              borderRadius: "12px",
            }}
            p={1}
          >
            <Heading as="h3" mx={3} sx={{ color: "#909090", fontSize: "36px" }}>
              03
            </Heading>
            <Heading as="h3" sx={{ color: "#fff", fontSize: "36px" }}>
              Desarrollo
            </Heading>
          </Flex>
          <ul style={{ marginTop: "24px", fontSize: "24px" }}>
            <li>Web App</li>
            <li>Data Schema</li>
            <li>Javascript, Node JS</li>
            <li>React, Next JS</li>
            <li>GraphQL, Mongo</li>
          </ul>
        </Box>
        <Box m={2} sx={{ width: ["100%", "400px", "400px"] }}>
          <Flex
            sx={{
              flexFlow: "row wrap",
              alignContent: "center",
              alignItems: "center",
              backgroundColor: "#000",
              borderRadius: "12px",
            }}
            p={1}
          >
            <Heading as="h3" mx={3} sx={{ color: "#909090", fontSize: "36px" }}>
              04
            </Heading>
            <Heading as="h3" sx={{ color: "#fff", fontSize: "36px" }}>
              Gestión
            </Heading>
          </Flex>
          <ul style={{ marginTop: "24px", fontSize: "24px" }}>
            <li>Roadmapping</li>
            <li>Planeación de ciclos</li>
            <li>Hosting y mantenimiento</li>
            <li>Optimización de costos</li>
            <li>Análisis de base de datos</li>
          </ul>
        </Box>
      </Flex>
    </Flex>
  );
}

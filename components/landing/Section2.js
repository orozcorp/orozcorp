import { Flex, Heading, Text, Box } from "@theme-ui/components";

export default function Section2() {
  return (
    <Flex
      mt={4}
      id="crearProductos"
      sx={{
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Heading
        as="h1"
        sx={{ fontSize: ["30px", "48px"], textAlign: "center", width: "60%" }}
        my={3}
      >
        ¡Prepárate para aterrizar tu idea con nuestro método infalible!
      </Heading>
      <Flex
        my={3}
        sx={{
          flexFlow: "row wrap",
          justifyContent: "space-around",
          alignContent: "center",
          alignItems: "stretch",
        }}
      >
        <Box
          m={2}
          p={2}
          sx={{
            width: ["100%", "400px", "500px"],
          }}
          variant="styles.boxGlass"
        >
          <Heading mb={2} sx={{ color: "#000", fontSize: ["24px", "36px"] }}>
            Descubrimiento
          </Heading>
          <Text sx={{ color: "#4a4a4a", fontSize: ["18px", "20px"] }}>
            Nuestros estrategas trabajan para definir el problema, hallar
            oportunidades de negocios, y usuarios meta. Ayudamos a transformar
            tu visión en el producto digital planeado
          </Text>
        </Box>
        <Box
          m={2}
          p={2}
          sx={{
            width: ["100%", "400px", "500px"],
          }}
          variant="styles.boxGlass"
        >
          <Heading mb={2} sx={{ color: "#000", fontSize: ["24px", "36px"] }}>
            Diseño relampago
          </Heading>
          <Text sx={{ color: "#4a4a4a", fontSize: ["18px", "20px"] }}>
            Un proceso por paso por paso para resolver problemas gigantescos,
            crear nuevos productos, mejorar productos existentes. Comprimimos
            meses de trabajo en pocas semanas, resultando en un prototipo de
            alta fidelidad y probado por usuarios reales.
          </Text>
        </Box>
        <Box
          m={2}
          p={2}
          sx={{
            width: ["100%", "400px", "500px"],
          }}
          variant="styles.boxGlass"
        >
          <Heading mb={2} sx={{ color: "#000", fontSize: ["24px", "36px"] }}>
            Versión 1
          </Heading>
          <Text sx={{ color: "#4a4a4a", fontSize: ["18px", "20px"] }}>
            Desarrollo eficiente y veloz de un nuevo producto digital con un
            equipo dedicado a tu proyecto. Con un equipo multidisciplinario para
            un resultado óptimo.
          </Text>
        </Box>
        <Box
          m={2}
          p={2}
          sx={{
            width: ["100%", "400px", "500px"],
          }}
          variant="styles.boxGlass"
        >
          <Heading mb={2} sx={{ color: "#000", fontSize: ["24px", "36px"] }}>
            Equipo de desarrollo
          </Heading>
          <Text sx={{ color: "#4a4a4a", fontSize: ["18px", "20px"] }}>
            Un equipo dedicado de mercadólogos, desarrolladores, y empresarios,
            te llevan de la mano para mejorar e iterar sobre las versiones ya
            establecidas. Para un rendimiento y funcionalidad óptima.
          </Text>
        </Box>
        <Box
          m={2}
          p={2}
          sx={{
            width: ["100%", "400px", "500px"],
          }}
          variant="styles.boxGlass"
        >
          <Heading mb={2} sx={{ color: "#000", fontSize: ["24px", "36px"] }}>
            Mantenimiento y soporte
          </Heading>
          <Text sx={{ color: "#4a4a4a", fontSize: ["18px", "20px"] }}>
            ¿No requieres más desarrollo? No hay problema, a través de contratos
            anuales continuamos ofreciéndote soporte en todo momento.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

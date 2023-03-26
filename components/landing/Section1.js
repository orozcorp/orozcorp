import { Flex, Heading, Box } from "@theme-ui/components";
import useWindowSize from "../hooks/useWindowSize";
import ReactRotatingText from "react-rotating-text";
export default function Section1() {
  const size = useWindowSize();
  return (
    <Flex
      sx={{
        backgroundColor: "#121212",
        flexFlow: "column nowrap",
      }}
      py={5}
    >
      <Box p={[2, 4, 5]}>
        <Heading
          as="h2"
          my={4}
          sx={{
            fontSize: ["20px", "36px"],
            color: "#B0B0B0",
            width: "70%",
            textAlign: "left",
          }}
        >
          Te ayudamos a crear tu app, tu página, tu catálogo o tu idea. Logramos
          que emprendas, o mejores tu sitio con la mayor facilidad e impacto.
        </Heading>
        <Heading
          as="h2"
          my={4}
          sx={{ fontSize: ["25px", "40px", "72px"], color: "#fff" }}
        >
          Aumenta la eficiencia en cada paso.
        </Heading>
      </Box>
      <Heading
        my={2}
        sx={{
          color: "#B0B0B0",
          textAlign: "center",
          width: "100%",
          fontSize: "32px",
        }}
      >
        Nuestro Proceso
      </Heading>
      <Flex
        mt={4}
        sx={{
          flexFlow: "row wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Flex
          m={2}
          sx={{
            flexFlow: "column nowrap",
            height: "300px",
            width: "320px",
            position: "relative",
            backgroundColor: "#232323",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
          variant="styles.boxGlassBlackBG"
        >
          <Heading
            as="h3"
            sx={{
              color: "#fff",
              fontSize: "48px",
              textAlign: "center",
              zIndex: 999,
            }}
          >
            Define Proyecto
          </Heading>
          <Heading
            as="h3"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#414141",
              fontSize: "300px",
              zIndex: -1,
            }}
          >
            1
          </Heading>
        </Flex>

        <Flex
          m={2}
          sx={{
            flexFlow: "column nowrap",
            height: "300px",
            width: "320px",
            position: "relative",
            backgroundColor: "#232323",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
          variant="styles.boxGlassBlackBG"
        >
          <Heading
            as="h3"
            sx={{
              color: "#fff",
              fontSize: "48px",
              textAlign: "center",
              zIndex: 999,
            }}
          >
            Incrementa Valor
          </Heading>
          <Heading
            as="h3"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#414141",
              fontSize: "300px",
              zIndex: -1,
            }}
          >
            2
          </Heading>
        </Flex>
        <Flex
          m={2}
          sx={{
            flexFlow: "column nowrap",
            height: "300px",
            width: "320px",
            position: "relative",
            backgroundColor: "#232323",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
          variant="styles.boxGlassBlackBG"
        >
          <Heading
            as="h3"
            sx={{
              color: "#fff",
              fontSize: "48px",
              textAlign: "center",
              zIndex: 999,
            }}
          >
            Genera Resultados
          </Heading>
          <Heading
            as="h3"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#414141",
              fontSize: "300px",
              zIndex: -1,
            }}
          >
            3
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
}

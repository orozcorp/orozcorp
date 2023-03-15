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
      pb={4}
    >
      <Flex
        sx={{
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
        p={3}
        mb={3}
      >
        <Heading
          as="h1"
          sx={{
            fontSize: ["60px", "100px", "200px"],
            color: "#000",
            textAlign: "center",
          }}
        >
          OROZCORP
        </Heading>
        <Heading
          as="h2"
          sx={{
            fontSize: ["25px", "40px", "72px"],
            marginTop: ["-20px", "-50px"],
          }}
        >
          <ReactRotatingText
            items={["15 años de experiencia", "Emprendedor serial"]}
            color="#fff"
          />
        </Heading>
        <Heading as="h2" sx={{ fontSize: ["25px", "40px", "72px"] }}>
          <ReactRotatingText
            items={["Javascript", "React JS", "ITESM"]}
            color="#fff"
          />
        </Heading>

        <Heading as="h2" sx={{ fontSize: ["25px", "40px", "72px"] }}>
          <ReactRotatingText
            items={["GraphQL", "Apollo", "LCDE", "NodeJs"]}
            color="#fff"
          />
        </Heading>
        <Heading as="h2" sx={{ fontSize: ["25px", "40px", "72px"] }}>
          <ReactRotatingText
            items={["Mongo", "Meteor", "Logísitica", "Finanzas"]}
            color="#fff"
          />
        </Heading>
      </Flex>
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
          Te ayudamos a resolver tus problemas empresariales, digitales, y de
          mercadotecnia con el menor riesgo posible y mayor impacto para tu
          negocio.
        </Heading>
        <Heading
          as="h2"
          my={4}
          sx={{ fontSize: ["25px", "40px", "72px"], color: "#fff" }}
        >
          Reduce el riesgo en cada paso.
        </Heading>
        <Heading
          as="h2"
          my={3}
          sx={{
            fontSize: ["20px", "36px"],
            color: "#B0B0B0",
            width: "70%",
            textAlign: "left",
          }}
        >
          Las nuevas ideas , están plagadas de inciertos, enigmas, y riesgo
          desde un inicio. Nuestra metodología te ayudará a resolver tus dudas
          desde un inicio, para agregar valor a tu negocio con la menor cantidad
          de inversión.
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
            height: "430px",
            width: "320px",
            backgroundColor: "#232323",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Heading
            as="h3"
            mt={2}
            sx={{
              color: "#fff",
              fontSize: "48px",
              textAlign: "center",
            }}
          >
            Define Problema
          </Heading>
          <Heading
            as="h3"
            sx={{
              color: "#414141",
              fontSize: "144px",
              textAlign: "center",
            }}
          >
            1
          </Heading>
        </Flex>
        <Flex
          m={2}
          sx={{
            flexFlow: "column nowrap",
            height: "430px",
            width: "320px",
            backgroundColor: "#232323",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Heading
            mt={2}
            as="h3"
            sx={{
              color: "#fff",
              fontSize: "48px",
              textAlign: "center",
            }}
          >
            Reduce Riesgo
          </Heading>
          <Heading
            as="h3"
            sx={{
              color: "#414141",
              fontSize: "144px",
              textAlign: "center",
            }}
          >
            2
          </Heading>
        </Flex>
        <Flex
          m={2}
          sx={{
            flexFlow: "column nowrap",
            height: "430px",
            width: "320px",
            backgroundColor: "#232323",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Heading
            mt={2}
            as="h3"
            sx={{
              color: "#fff",
              fontSize: "48px",
              textAlign: "center",
            }}
          >
            Genera Resultados
          </Heading>
          <Heading
            as="h3"
            sx={{
              color: "#414141",
              fontSize: "144px",
              textAlign: "center",
            }}
          >
            3
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
}

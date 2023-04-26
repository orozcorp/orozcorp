import { Flex, Heading, Button, Box } from "@theme-ui/components";
import { useState } from "react";
import { FamiliarContainer } from "../../components/context/FamiliarContext";
import MiFamilia from "./MiFamilia";
import MiInformacion from "./MiInformacion";

export default function InformacionMedica() {
  const [infoDisplay, setInfoDisplay] = useState("");
  return (
    <FamiliarContainer>
      <Flex
        sx={{
          flexFlow: "column nowrap",
          justifyContent: "flex-start",
          alignContent: "center",
          alignItems: "flex-start",
        }}
        my={2}
        p={2}
      >
        <Heading as="h2" sx={{ textDecoration: "red underline" }}>
          Historial Médico
        </Heading>
        <Flex
          sx={{
            flexFlow: "row wrap",
            justifyContent: "space-between",
            alignItems: "space-between",
            width: "100%",
          }}
        >
          <Button m={2} onClick={() => setInfoDisplay("miInformacion")}>
            Informacion Medica familiar
          </Button>
          <Button
            m={2}
            variant="outline"
            onClick={() => setInfoDisplay("miFamilia")}
          >
            Gestionar Familia
          </Button>
        </Flex>
      </Flex>
      {{
        miInformacion: () => <MiInformacion />,
        miFamilia: () => <MiFamilia />,
      }[infoDisplay]?.()}
    </FamiliarContainer>
  );
}

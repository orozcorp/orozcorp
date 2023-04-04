import { Flex, Heading, Button, Box } from "@theme-ui/components";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FamiliarContainer } from "../../components/context/FamiliarContext";
import AgregarFamiliar from "./AgregarFamiliar";
import MiHistorialMedico from "./MiHistorialMedico";
import MiInformacion from "./MiInformacion";

export default function InformacionMedica() {
  const { data: session, status } = useSession();
  const superAdmin = session?.roles?.includes("superAdmin");
  const [display, setDisplay] = useState("none");
  const [infoDisplay, setInfoDisplay] = useState("");
  return (
    <FamiliarContainer>
      <AgregarFamiliar display={display} setDisplay={setDisplay} />
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
          Información Médica
        </Heading>
        <Flex sx={{ flexFlow: "row wrap" }}>
          {superAdmin && (
            <Button m={2} onClick={() => setDisplay("box")}>
              Agregar familiar
            </Button>
          )}
          <Button m={2} onClick={() => setInfoDisplay("miHistorialMedico")}>
            Historial médico
          </Button>
          <Button m={2} onClick={() => setInfoDisplay("miInformacion")}>
            Informacion personal
          </Button>
        </Flex>
      </Flex>
      {{
        miInformacion: () => <MiInformacion />,
        miHistorialMedico: () => <MiHistorialMedico />,
      }[infoDisplay]?.()}
    </FamiliarContainer>
  );
}

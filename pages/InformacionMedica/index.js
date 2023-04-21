import { Flex, Heading, Button, Box } from "@theme-ui/components";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FamiliarContainer } from "../../components/context/FamiliarContext";
import AgregarFamiliar from "./AgregarFamiliar";
import CrearFamilia from "./CrearFamilia";
import MiHistorialMedico from "./MiHistorialMedico";
import MiInformacion from "./MiInformacion";

export default function InformacionMedica() {
  const { data: session, status } = useSession();
  const canAddFamily =
    session?.user?.familias?.length <= 3 && session?.user?.minor;
  const isHeadOfFamily =
    session?.user?.familias?.filter(
      (familia) => session?.user?.id === familia.administradorId
    )?.length > 0;
  const [display, setDisplay] = useState("none");
  const [crearFamilia, setCrearFamilia] = useState("none");
  const [infoDisplay, setInfoDisplay] = useState("");
  return (
    <FamiliarContainer>
      <AgregarFamiliar display={display} setDisplay={setDisplay} />
      <CrearFamilia display={crearFamilia} setDisplay={setCrearFamilia} />
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
          {isHeadOfFamily && (
            <Button m={2} onClick={() => setDisplay("box")}>
              Agregar a familiar
            </Button>
          )}
          {!canAddFamily && (
            <Button
              m={2}
              variant="outline"
              onClick={() => setCrearFamilia("box")}
            >
              Crear familia
            </Button>
          )}
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

import { Flex, Heading, Button, Box } from "@theme-ui/components";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FamiliarContainer } from "../../../components/context/FamiliarContext";
import AgregarFamiliar from "../AgregarFamiliar";
import CrearFamilia from "../CrearFamilia";
export default function MiFamilia() {
  const { data: session, status } = useSession();
  const canAddFamily =
    session?.user?.familias?.length >= 3 && session?.user?.minor;
  const [display, setDisplay] = useState("none");
  const [crearFamilia, setCrearFamilia] = useState("none");
  return (
    <FamiliarContainer>
      <AgregarFamiliar display={display} setDisplay={setDisplay} />
      <CrearFamilia display={crearFamilia} setDisplay={setCrearFamilia} />
      <Heading as="h2" sx={{ textDecoration: "red underline" }}>
        Mi Familia
      </Heading>
      <Flex sx={{ flexFlow: "row wrap" }} m={2} p={2}>
        <Button m={2} onClick={() => setDisplay("box")}>
          Agregar a familiar
        </Button>
        {!canAddFamily && (
          <Button
            m={2}
            variant="outline"
            onClick={() => setCrearFamilia("box")}
          >
            Crear familia
          </Button>
        )}
      </Flex>
    </FamiliarContainer>
  );
}

import { Flex, Button } from "@theme-ui/components";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FamiliarContainer } from "../../../components/context/FamiliarContext";
import AgregarFamiliar from "../AgregarFamiliar";
import CrearFamilia from "../CrearFamilia";
import Familiares from "./Familiares";
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
      <Flex sx={{ flexFlow: "row wrap" }}>
        <Button
          m={2}
          onClick={() => setDisplay("box")}
          sx={{
            backgroundColor: "rgb(7 89 133)",
            border: "1px solid rgb(7 89 133)",
          }}
        >
          Agregar a familiar
        </Button>
        {!canAddFamily && (
          <Button
            m={2}
            variant="outline"
            sx={{ border: "1px solid rgb(7 89 133)", color: "rgb(7 89 133)" }}
            onClick={() => setCrearFamilia("box")}
          >
            Crear familia
          </Button>
        )}
      </Flex>
      <Familiares />
    </FamiliarContainer>
  );
}

import { Flex, Heading, Button, Box } from "@theme-ui/components";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FamiliarContainer } from "../../components/context/FamiliarContext";
import AgregarFamiliar from "./AgregarFamiliar";

export default function InformacionMedica() {
  const { data: session, status } = useSession();
  const superAdmin = session?.roles?.includes("superAdmin");
  const [display, setDisplay] = useState("none");
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
        {superAdmin && (
          <Button my={2} onClick={() => setDisplay("box")}>
            Agregar familiar
          </Button>
        )}
      </Flex>
    </FamiliarContainer>
  );
}

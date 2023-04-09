import { Button, Flex, Box } from "@theme-ui/components";
import { useState } from "react";
import AgregarMedico from "./AgregarMedico";

export default function Medicos({ user, miInfo, query }) {
  const [display, setDisplay] = useState("none");
  return (
    <>
      <AgregarMedico
        display={display}
        setDisplay={setDisplay}
        user={{
          _id: user,
          ...miInfo,
        }}
        query={query}
      />

      <Flex
        my={2}
        sx={{ flexFlow: "column nowrap", justifyContent: "flex-start" }}
      >
        <Flex
          my={1}
          sx={{
            flexFlow: "row wrap",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Button variant="primary" onClick={() => setDisplay("box")}>
            Agregar Médico
          </Button>
        </Flex>
        <Box sx={{ overFlowX: "auto" }} my={2}>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefonos</th>
                <th>Especialidad</th>
              </tr>
            </thead>
          </table>
        </Box>
      </Flex>
    </>
  );
}

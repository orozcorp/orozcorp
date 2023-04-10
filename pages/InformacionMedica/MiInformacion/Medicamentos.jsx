import { Flex, Button, Box } from "@theme-ui/components";
import { useState } from "react";
import AgregarMedicamentos from "./AgregarMedicamentos";

export default function Medicamentos({ user, miInfo, query }) {
  const [display, setDisplay] = useState("none");
  return (
    <Flex
      my={2}
      sx={{ flexFlow: "column nowrap", justifyContent: "flex-start" }}
    >
      <AgregarMedicamentos
        user={{
          _id: user,
          ...miInfo,
        }}
        display={display}
        setDisplay={setDisplay}
        query
      />

      <Flex
        my={1}
        sx={{
          flexFlow: "row wrap",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Button m={1} variant="primary" onClick={() => setDisplay("box")}>
          Agregar Medicamento
        </Button>
        <Button m={1} variant="outline">
          Ver medicamentos anteriores
        </Button>
      </Flex>
      <Box sx={{ overflowX: "auto" }} my={2}>
        <table style={{ marginTop: "24px", marginBotton: "60px" }}>
          <thead>
            <tr>
              <th>Medicamento</th>
              <th>Dosis</th>
              <th>Frecuencia</th>
              <th>Observaciones</th>
              <th>Recetada por</th>
            </tr>
          </thead>
        </table>
      </Box>
    </Flex>
  );
}

import { Flex, Button, Box } from "@theme-ui/components";
import { useState } from "react";

export default function HistorialMedico({ user, miInfo, query, familia }) {
  const [display, setDisplay] = useState("none");
  return (
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
        <Button m={1} variant="primary" onClick={() => setDisplay("box")}>
          Agregar Historia Médica
        </Button>
      </Flex>
    </Flex>
  );
}

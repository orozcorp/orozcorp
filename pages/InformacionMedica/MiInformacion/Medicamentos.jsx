import { Flex, Button, Box } from "@theme-ui/components";

export default function Medicamentos({ user, miInfo }) {
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
        <Button m={1} variant="primary">
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

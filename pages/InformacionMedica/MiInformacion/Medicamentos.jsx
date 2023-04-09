import { Flex, Button, Box } from "@theme-ui/components";

export default function Medicamentos({ user, miInfo }) {
  return (
    <Flex
      my={2}
      sx={{
        flexFlow: "column nowrap",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Flex
        my={1}
        sx={{
          flexFlow: "row wrap",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Button variant="primary">Agregar Medicamento</Button>
        <Button variant="outline" mx={2}>
          Ver medicamentos anteriores
        </Button>
      </Flex>
      <Box sx={{ overFlowX: "auto" }} my={2}>
        <table>
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

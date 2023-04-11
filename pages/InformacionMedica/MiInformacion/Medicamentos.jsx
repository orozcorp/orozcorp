import { Flex, Button, Box } from "@theme-ui/components";
import { useState } from "react";
import AgregarMedicamentos from "./AgregarMedicamentos";
import { format_dateMed } from "../../../lib/helpers/formatters";
export default function Medicamentos({ user, miInfo, query, oldMedicamento }) {
  const { oldMed, setOldMed } = oldMedicamento;
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
        query={query}
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
        <Button m={1} variant="outline" onClick={() => setOldMed(!oldMed)}>
          Ver medicamentos {oldMed ? "actuales" : "anteriores"}
        </Button>
      </Flex>
      <Box sx={{ overflowX: "auto" }} my={2}>
        <table style={{ marginTop: "24px", marginBotton: "60px" }}>
          <thead>
            <tr>
              <th>Fechas</th>
              <th>Medicamento</th>
              <th>Dosis</th>
              <th>Frecuencia</th>
              <th>Observaciones</th>
              <th>Recetada por</th>
            </tr>
          </thead>
          <tbody>
            {miInfo?.medicamentos?.map((medicamento) => (
              <tr key={medicamento._id}>
                <td>{`${format_dateMed(
                  medicamento.fechaInicio
                )} - ${format_dateMed(medicamento.fechaFin)} `}</td>
                <td>{medicamento.nombre}</td>
                <td>{medicamento.dosis}</td>
                <td>{medicamento.frecuencia}</td>
                <td>{medicamento.observaciones}</td>
                <td>{medicamento.medicoName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Flex>
  );
}

import { Flex, Button, Box } from "@theme-ui/components";
import { useState, useMemo } from "react";
import { format_date } from "../../../lib/helpers/formatters";
import AgregarEstudio from "./AgregarEstudio";

export default function Estudios({ user, miInfo, query }) {
  const sortedHistorial = useMemo(() => {
    const historialCopy = [...(miInfo?.estudios || [])];
    return historialCopy.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }, [miInfo]);

  const [display, setDisplay] = useState("none");
  return (
    <Flex
      my={2}
      sx={{ flexFlow: "column nowrap", justifyContent: "flex-start" }}
    >
      <AgregarEstudio
        user={user}
        setDisplay={setDisplay}
        display={display}
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
          Agregar Estudios
        </Button>
      </Flex>
      <Box my={2} sx={{ overflowX: "auto", maxWidth: ["80vw", "100vw"] }}>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Descripcion</th>
              <th>Medico</th>
              <th>Descargar</th>
            </tr>
          </thead>
          <tbody>
            {sortedHistorial?.map((peso) => (
              <tr key={peso._id}>
                <td>{format_date(peso.fecha)}</td>
                <td>{peso.descripcion}</td>
                <td>{peso.medicoName}</td>
                <td>
                  <a href={peso.estudio} target="_blank">
                    Descargar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Flex>
  );
}

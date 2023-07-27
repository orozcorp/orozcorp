import { Flex, Button, Box } from "@theme-ui/components";
import { useState, useMemo } from "react";
import { format_date } from "../../../lib/helpers/formatters";
import AgregarHistorialMedico from "./AgregarHistorialMedico";

export default function HistorialMedico({ user, miInfo, query }) {
  const sortedHistorial = useMemo(() => {
    const historialCopy = [...(miInfo?.historialMedico || [])];
    return historialCopy.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }, [miInfo]);

  const [display, setDisplay] = useState("none");
  return (
    <Flex
      my={2}
      sx={{ flexFlow: "column nowrap", justifyContent: "flex-start" }}
    >
      <AgregarHistorialMedico
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
          Agregar Historia Médica
        </Button>
      </Flex>
      <Box
        sx={{ overflowX: "auto", maxWidth: ["80vw", "100vw"] }}
        my={2}
        className="shadow-xl drop-shadow-md rounded-xl"
      >
        <table className="w-full text-sm text-left">
          <thead className="text-md text-white uppercase bg-gradient-to-r from-cyan-500 to-blue-500">
            <tr>
              <th>Fecha</th>
              <th>Descripcion</th>
              <th>Medico</th>
            </tr>
          </thead>
          <tbody>
            {sortedHistorial?.map((peso) => (
              <tr key={peso._id} className="bg-white border-b ">
                <td>{format_date(peso.fecha)}</td>
                <td>{peso.descripcion}</td>
                <td>{peso.medicoName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Flex>
  );
}

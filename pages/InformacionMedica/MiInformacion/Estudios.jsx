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
      <Box
        sx={{ overflowX: "auto", maxWidth: ["80vw", "100vw"] }}
        my={2}
        className="shadow-xl drop-shadow-md rounded-xl"
      >
        <table className="text-sm text-left">
          <thead className="text-md text-white uppercase bg-gradient-to-r from-cyan-500 to-blue-500">
            <tr>
              <th>Fecha</th>
              <th>Descripcion</th>
              <th>Medico</th>
              <th>Descargar</th>
            </tr>
          </thead>
          <tbody>
            {sortedHistorial?.map((peso) => (
              <tr key={peso._id} className="bg-white border-b ">
                <td>
                  <b>{format_date(peso.fecha)}</b>
                </td>
                <td>{peso.descripcion}</td>
                <td>{peso.medicoName}</td>
                <td>
                  <a
                    href={peso.estudio}
                    target="_blank"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
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

import React, { useMemo } from "react";
import { Flex } from "@theme-ui/components";
import { format_date } from "../../../lib/helpers/formatters";
import GraficasPeso from "./GraficasPeso";
import GraficasEstatura from "./GraficaEstatura";
export default function HistorialDePeso({ user, miInfo, query }) {
  const sortedHistorial = useMemo(() => {
    const historialCopy = [...(miInfo?.historialPeso || [])];
    return historialCopy.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }, [miInfo]);
  return (
    <Flex m={2} sx={{ flexFlow: "column nowrap", overflowX: "auto" }}>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Peso</th>
            <th>Estatura</th>
          </tr>
        </thead>
        <tbody>
          {sortedHistorial?.map((peso) => (
            <tr key={peso._id}>
              <td>{format_date(peso.fecha)}</td>
              <td>{peso.peso} kg</td>
              <td>{peso.estatura} cm</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Flex
        sx={{
          flexFlow: "row wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        my={3}
      >
        <GraficasPeso userId={user} />
        {miInfo?.minor && <GraficasEstatura userId={user} />}
      </Flex>
    </Flex>
  );
}

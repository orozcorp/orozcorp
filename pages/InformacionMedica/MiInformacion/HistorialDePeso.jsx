import React, { useMemo } from "react";
import { Flex, Box } from "@theme-ui/components";
import { format_date } from "../../../lib/helpers/formatters";
import GraficasPeso from "./GraficasPeso";
import GraficasEstatura from "./GraficaEstatura";

function calculateAgeInYearsAndMonths(birthDate, currentDate) {
  const diffInMilliseconds = currentDate - birthDate;
  const years = Math.floor(diffInMilliseconds / (365 * 24 * 60 * 60 * 1000));
  const remainingMonths = Math.floor(
    (diffInMilliseconds % (365 * 24 * 60 * 60 * 1000)) /
      (30 * 24 * 60 * 60 * 1000)
  );
  return { years, months: remainingMonths };
}

export default function HistorialDePeso({ user, miInfo, query }) {
  const sortedHistorial = useMemo(() => {
    const historialCopy = [...(miInfo?.historialPeso || [])];
    return historialCopy.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }, [miInfo]);
  return (
    <Flex m={2} sx={{ flexFlow: "column nowrap", overflowX: "auto" }}>
      <Box
        sx={{ overflowX: "auto", maxWidth: ["80vw", "100vw"] }}
        my={2}
        className="shadow-xl drop-shadow-md rounded-xl"
      >
        <table className=" text-sm text-left">
          <thead className="text-md text-white uppercase bg-blue-500">
            <tr>
              <th>Fecha</th>
              <th>Peso</th>
              <th>Estatura</th>
            </tr>
          </thead>
          <tbody>
            {sortedHistorial?.map((peso) => {
              const age = calculateAgeInYearsAndMonths(
                new Date(miInfo?.fechaNacimiento),
                new Date(peso.fecha)
              );

              return (
                <tr key={peso._id} className="bg-white border-b">
                  <td>
                    <b style={{ marginRight: "8px" }}>
                      {format_date(peso.fecha)}{" "}
                    </b>
                    <small>
                      {age.years} años {age.months > 0 && `${age.months} meses`}
                    </small>
                  </td>
                  <td>{peso.peso} kg</td>
                  <td>{peso.estatura} cm</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Box>
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

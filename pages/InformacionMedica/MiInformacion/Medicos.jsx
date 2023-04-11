import { Button, Flex, Box } from "@theme-ui/components";
import { useState } from "react";
import AgregarMedico from "./AgregarMedico";

export default function Medicos({ user, miInfo, query, familia }) {
  const [display, setDisplay] = useState("none");
  return (
    <>
      <AgregarMedico
        display={display}
        setDisplay={setDisplay}
        user={{
          _id: user,
          ...miInfo,
          familiaId: familia.value,
          familiaName: familia.label,
        }}
        query={query}
      />

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
          <Button variant="primary" onClick={() => setDisplay("box")}>
            Agregar Médico
          </Button>
        </Flex>
        <Box sx={{ overflowX: "auto" }} my={2}>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefonos</th>
                <th>Especialidad</th>
                <th>Direccion</th>
              </tr>
            </thead>
            <tbody>
              {miInfo.medicos.map((medico) => (
                <tr key={medico._id}>
                  <td>{medico.nombre}</td>
                  <td>{medico.apellido}</td>
                  <td>
                    {medico.telefonos.map((tel, index) => (
                      <p key={index}>
                        <a href={`tel:${tel}`}>{tel}</a>
                      </p>
                    ))}
                  </td>
                  <td>{medico.especialidad}</td>
                  <td>{medico.direccion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Flex>
    </>
  );
}

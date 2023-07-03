import { gql, useMutation } from "@apollo/client";
import { Button, Flex, Box, Checkbox, Badge } from "@theme-ui/components";
import { useMemo, useState } from "react";
import AgregarMedico from "./AgregarMedico";

const MUTATION = gql`
  mutation Mutation($idUser: String!, $idMedico: String!) {
    updateMedicoCabecera(idUser: $idUser, idMedico: $idMedico) {
      code
      message
      success
    }
  }
`;

export default function Medicos({ user, miInfo, query, familia }) {
  const [display, setDisplay] = useState("none");
  const [updateMedicoCabecera, { loading }] = useMutation(MUTATION, {
    refetchQueries: [
      {
        query,
        variables: { idUser: user, oldMed: false },
      },
    ],
    awaitRefetchQueries: true,
  });
  const familiaNuclear = useMemo(() => {
    return familia?.find((fam) => fam.nuclear);
  }, [familia]);
  return (
    <>
      <AgregarMedico
        display={display}
        setDisplay={setDisplay}
        user={{
          _id: user,
          ...miInfo,
          familiaId: familiaNuclear?._id,
          familiaName: familiaNuclear?.nombre,
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
        <Box my={2} sx={{ overflowX: "auto", maxWidth: ["80vw", "100vw"] }}>
          <table>
            <thead>
              <tr>
                <th>Cabecera</th>
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
                  <td>
                    <Flex
                      sx={{
                        flexFlow: "column nowrap",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onClick={() =>
                        updateMedicoCabecera({
                          variables: { idUser: user, idMedico: medico._id },
                        })
                      }
                    >
                      <Checkbox
                        checked={medico?.cabecera}
                        onChange={() => console.log("change")}
                      />
                    </Flex>
                  </td>
                  <td>{medico.nombre}</td>
                  <td>{medico.apellido}</td>
                  <td>
                    {medico.telefonos.map((tel, index) => (
                      <div key={index} style={{ margin: "6px" }}>
                        <a href={`tel:${tel?.telefono}`}>
                          <Badge m={1}>{tel?.tipo}</Badge>
                          {tel?.telefono}
                        </a>
                      </div>
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

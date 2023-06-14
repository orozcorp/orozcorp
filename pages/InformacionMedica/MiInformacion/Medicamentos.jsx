import { Flex, Button, Box, Spinner } from "@theme-ui/components";
import { useState } from "react";
import AgregarMedicamentos from "./AgregarMedicamentos";
import { format_dateMed } from "../../../lib/helpers/formatters";
import { AiOutlineStop } from "react-icons/ai";
import { gql, useMutation } from "@apollo/client";

const MUTATION = gql`
  mutation UpdateMedicamentoDate($idUser: String!, $idMedicamento: String!) {
    updateMedicamentoDate(idUser: $idUser, idMedicamento: $idMedicamento) {
      code
      message
      success
    }
  }
`;

export default function Medicamentos({ user, miInfo, query, oldMedicamento }) {
  const { oldMed, setOldMed } = oldMedicamento;
  const [display, setDisplay] = useState("none");
  const [updateMedicamentoDate, { loading }] = useMutation(MUTATION, {
    refetchQueries: [
      {
        query,
        variables: { idUser: user, oldMed: false },
      },
    ],
    awaitRefetchQueries: true,
  });
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
      <Box sx={{ overflowX: "auto", maxWidth: "80vw" }} my={2}>
        <table
          style={{
            marginTop: "24px",
            borderSpacing: "1rem",
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <thead>
            <tr>
              <th>Fechas</th>
              <th>Medicamento</th>
              <th>Dosis</th>
              <th>Frecuencia</th>
              <th>Observaciones</th>
              <th>Recetada por</th>
              <th>Terminar medicamento</th>
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
                <td>
                  <Flex
                    sx={{
                      flexFlow: "row wrap",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      disabled={loading}
                      onClick={() =>
                        updateMedicamentoDate({
                          variables: {
                            idUser: user,
                            idMedicamento: medicamento._id,
                          },
                        })
                      }
                    >
                      {loading ? <Spinner /> : <AiOutlineStop />}
                    </Button>
                  </Flex>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Flex>
  );
}

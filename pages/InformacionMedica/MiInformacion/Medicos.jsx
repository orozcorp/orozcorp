import { gql, useMutation } from "@apollo/client";
import {
  Button,
  Flex,
  Heading,
  Checkbox,
  Badge,
  Text,
} from "@theme-ui/components";
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
  console.log("familia", familia);
  const familiaNuclear = useMemo(() => {
    return familia?.find((fam) => fam.nuclear);
  }, [familia]);
  console.log("familiaNuclear", familiaNuclear);
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
        sx={{
          flexFlow: "column nowrap",
          justifyContent: "flex-start",
          width: "100%",
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
          <Button variant="primary" onClick={() => setDisplay("box")}>
            Agregar Médico
          </Button>
        </Flex>
        <Flex
          sx={{
            flexFlow: "row wrap",
            width: "100%",
            gap: "12px",
            justifyContent: "flex-start",
            alignItems: "stretch",
          }}
        >
          {miInfo.medicos.map((medico) => (
            <div
              key={medico._id}
              className="
                p-8
                m-4
                flex flex-col flex-nowrap justify-between items-stretch
                w-80 gap-4 rounded-lg p-4 shadow-lg shadow-sky-600
                drop-shadow-2xl
                bg-gradient-to-t from-sky-800 to-sky-400
        "
            >
              <Flex
                sx={{
                  flexFlow: "row wrap",
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
                  sx={{
                    flex: "1 1 50px",
                  }}
                  checked={medico?.cabecera}
                  onChange={() => console.log("change")}
                />
                <Heading
                  as="h2"
                  sx={{ color: "white", fontSize: "30px", flex: "2 2 100px" }}
                >
                  <small style={{ marginRight: "6px", fontSize: "16px" }}>
                    {medico.nombre}
                  </small>
                  {medico.apellido}
                </Heading>
              </Flex>
              <Heading as="h3" sx={{ color: "white" }}>
                Telefonos
              </Heading>
              <Flex
                sx={{
                  flexFlow: "column nowrap",
                  justifyContent: "center",
                  alignItems: "start",
                }}
              >
                {medico.telefonos.map((tel, index) => (
                  <div key={index}>
                    <a
                      href={`tel:${tel?.telefono}`}
                      className="flex flex-row flex-wrap justify-start items-start w-full gap-2 w-full"
                    >
                      <Badge m={1}>{tel?.tipo}</Badge>
                      <div className="text-white">{tel?.telefono}</div>
                    </a>
                  </div>
                ))}
              </Flex>
              <Text sx={{ color: "white" }}>{medico.especialidad}</Text>
              <Text sx={{ color: "white" }}>{medico.direccion}</Text>
            </div>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

import { gql, useMutation, useQuery } from "@apollo/client";
import {
  Heading,
  Button,
  Flex,
  Box,
  Label,
  Input,
  Text,
  Spinner,
  Checkbox,
} from "@theme-ui/components";
import { useState, useMemo } from "react";
import Modal from "../../../components/atoms/Modal";
import { useGlobalData } from "../../../components/context/GlobalContext";
import NewMedico from "./NewMedico";

const QUERY = gql`
  query GetMedicos($nombre: String!) {
    getMedicos(nombre: $nombre) {
      _id
      nombre
      apellido
      telefonos
      especialidad
      direccion
      email
    }
  }
`;

const ADD_MEDICO = gql`
  mutation Mutation($input: MedicosInput!, $addNew: Boolean!) {
    addMedico(input: $input, addNew: $addNew) {
      code
      message
      success
    }
  }
`;

export default function AgregarMedico({ user, setDisplay, display, query }) {
  const paciente = useMemo(
    () => ({
      _id: user._id,
      nombre: user.name,
      apellido: user.lastName,
      familiaId: user.familiaId,
      familiaName: user.familiaName,
    }),
    [user]
  );
  const newInitial = {
    nombre: "",
    apellido: "",
    telefonos: [],
    especialidad: "",
    direccion: "",
    email: "",
  };
  const { setAlert } = useGlobalData();
  const [foundDr, setFoundDr] = useState(false);
  const [nombre, setNombre] = useState("");
  const { data, loading, error } = useQuery(QUERY, { variables: { nombre } });
  const medicosList = data?.getMedicos || [];
  const [activeDr, setActiveDr] = useState("");
  const [newDoctor, setNewDoctor] = useState(newInitial);
  const [addMedico, { loading: loadingMutation }] = useMutation(ADD_MEDICO, {
    variables: {
      input: {
        ...newDoctor,
        pacientes: [paciente],
      },
      addNew: foundDr,
    },
    onCompleted: () => {
      setFoundDr(false);
      setNombre("");
      setNewDoctor(newInitial);
      setDisplay("none");
    },
    onError: (error) => {
      setAlert({
        message: error.message,
        display: "box",
        variant: "orange",
      });
    },
    refetchQueries: [
      {
        query,
        variables: { idUser: user._id, oldMed: false },
      },
    ],
    awaitRefetchQueries: true,
  });
  return (
    <Modal display={display} setDisplay={setDisplay}>
      <Heading>Agregar Médico</Heading>
      <Flex
        sx={{
          flexFlow: "column nowrap",
          justifyContent: ["center", "center", "flex-start"],
          alignContent: "center",
          alignItems: ["center"],
        }}
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          addMedico();
        }}
        my={2}
      >
        <Flex
          sx={{
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ minWidth: "300px" }}>
            <Label>Encuentra a tu médico</Label>
            <Input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.currentTarget.value.toUpperCase())}
            />
          </Box>
          <Box my={1}>
            {loading && <Spinner />}
            {error && <p>Error</p>}
            {medicosList.length > 0 &&
              medicosList.map((medico) => (
                <Box
                  key={medico._id}
                  my={1}
                  p={2}
                  onMouseEnter={() => setActiveDr(medico._id)}
                  onMouseLeave={() => setActiveDr("")}
                  onClick={() => {
                    setFoundDr(true);
                    setNewDoctor(medico);
                  }}
                  sx={{
                    border: "1px solid black",
                    width: "100%",
                    backgroundColor: activeDr ? "green" : "white",
                    color: activeDr ? "white" : "black",
                  }}
                >
                  <Text>
                    {medico.nombre} {medico.apellido}{" "}
                    <small>{medico.especialidad}</small>
                  </Text>
                </Box>
              ))}
          </Box>
        </Flex>
        <Text my={2} sx={{ fontSize: "24px" }}>
          No Encontraste a tu médico?
        </Text>
        <NewMedico newDoctor={newDoctor} setNewDoctor={setNewDoctor} />
        {Object.values(newDoctor).every((prop) => prop !== "") && (
          <Button disabled={loadingMutation}>
            {loadingMutation ? <Spinner /> : "Agregar médico"}
          </Button>
        )}
      </Flex>
    </Modal>
  );
}

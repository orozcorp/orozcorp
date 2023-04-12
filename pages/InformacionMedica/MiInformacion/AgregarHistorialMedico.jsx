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
  Textarea,
} from "@theme-ui/components";
import { useState } from "react";
import Modal from "../../../components/atoms/Modal";
import { useGlobalData } from "../../../components/context/GlobalContext";
import moment from "moment";

const QUERY = gql`
  query GetFamilyDoctors($idUser: ID!, $nombre: String) {
    getFamilyDoctors(idUser: $idUser, nombre: $nombre) {
      _id
      apellido
      nombre
    }
  }
`;

const MUTATION = gql`
  mutation InsertUserHistorialMedico(
    $idUser: String!
    $historial: HistorialMedicoInput!
  ) {
    insertUserHistorialMedico(idUser: $idUser, historial: $historial) {
      code
      message
      success
    }
  }
`;

export default function AgregarHistorialMedico({
  user,
  setDisplay,
  display,
  query,
}) {
  const { setAlert } = useGlobalData();
  const initial = {
    descripcion: "",
    fecha: new Date(),
    medicoName: "",
    medicoId: "",
  };
  const [historial, setHistorial] = useState(initial);
  const [medico, setMedico] = useState("");
  const { data, loading, error } = useQuery(QUERY, {
    variables: { idUser: user, nombre: medico },
  });
  const [drId, setDrId] = useState("");
  const doctors = data?.getFamilyDoctors || [];
  const makeOnChange =
    (fieldName) =>
    ({ target: { value } }) =>
      setHistorial({
        ...historial,
        [fieldName]: value.toUpperCase(),
      });
  const [
    insertUserHistorial,
    { loading: loadingMutation, data: result, error: errorMutation },
  ] = useMutation(MUTATION, {
    variables: {
      idUser: user,
      historial,
    },
    onCompleted: () => {
      setHistorial(initial);
      setMedico("");
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
        variables: { idUser: user, oldMed: false },
      },
    ],
    awaitRefetchQueries: true,
  });
  return (
    <Modal display={display} setDisplay={setDisplay}>
      <Heading>Agregar Historial Medico</Heading>
      <Flex
        sx={{ flexFlow: "column nowrap", alignItems: "flex-start" }}
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          insertUserHistorial();
        }}
      >
        <Box m={2}>
          <Label>Descripcion</Label>
          <Textarea
            rows={5}
            sx={{ width: "300px" }}
            value={historial.descripcion}
            onChange={makeOnChange("descripcion")}
          />
        </Box>
        <Box m={2} sx={{ width: "300px" }}>
          <Label>Fecha</Label>
          <Input
            type="date"
            value={moment(historial.fecha).format("YYYY-MM-DD")}
            onChange={({ target: { value } }) =>
              setHistorial({
                ...historial,
                fecha: moment(value).startOf("day").toDate(),
              })
            }
          />
        </Box>
        <Flex
          m={2}
          sx={{ flexFlow: "column nowrap", alignItems: "flex-start" }}
        >
          <Box sx={{ width: "300px" }}>
            <Label>Medico que receto</Label>
            <Input
              type="text"
              value={medico}
              onChange={(e) => setMedico(e.target.value.toUpperCase())}
            />
          </Box>
          {doctors &&
            doctors.length > 0 &&
            doctors.map((doctor) => (
              <Box
                p={2}
                m={1}
                key={doctor._id}
                sx={{
                  backgroundColor: drId === doctor._id ? "#b30018" : "white",
                  color: drId === doctor._id ? "white" : "white",
                  border: "1px solid #b30018",
                  width: "300px",
                }}
                onClick={() => {
                  setHistorial({
                    ...historial,
                    medicoName: `${doctor.nombre} ${doctor.apellido}`,
                    medicoId: doctor._id,
                  });
                  setMedico(`${doctor.nombre} ${doctor.apellido}`);
                }}
                onMouseEnter={() => setDrId(doctor._id)}
                onMouseLeave={() => setDrId("")}
              >
                <Text>{`${doctor.nombre} ${doctor.apellido}`}</Text>
              </Box>
            ))}
        </Flex>
        {Object.values(historial)
          .filter((_, index) => {
            const key = Object.keys(historial)[index];
            return key !== "fecha";
          })
          .every((prop) => prop !== "") && (
          <Button disabled={loadingMutation} type="submit">
            {loadingMutation ? <Spinner /> : "Agregar historial"}
          </Button>
        )}
      </Flex>
    </Modal>
  );
}

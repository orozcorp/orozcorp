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
  mutation InsertUserMedicamentos(
    $idUser: String!
    $medicamento: MedicamentosInput!
  ) {
    insertUserMedicamentos(idUser: $idUser, medicamento: $medicamento) {
      code
      message
      success
    }
  }
`;

export default function AgregarMedicamentos({
  user,
  setDisplay,
  display,
  query,
}) {
  const { setAlert } = useGlobalData();
  const initialMedicamento = {
    nombre: "",
    dosis: "",
    frecuencia: "",
    fechaInicio: new Date(),
    fechaFin: new Date(),
    sirvePara: "",
    medicoName: "",
    medicoId: "",
    observaciones: "Sin observaciones",
  };
  const [medicamento, setMedicamento] = useState(initialMedicamento);
  const [medico, setMedico] = useState("");
  const { data, loading, error } = useQuery(QUERY, {
    variables: { idUser: user._id, nombre: medico },
  });
  const [drId, setDrId] = useState("");
  const doctors = data?.getFamilyDoctors || [];
  const makeOnChange =
    (fieldName) =>
    ({ target: { value } }) =>
      setMedicamento({
        ...medicamento,
        [fieldName]: value.toUpperCase(),
      });
  const [
    insertUserMedicamentos,
    { loading: loadingMutation, data: result, error: errorMutation },
  ] = useMutation(MUTATION, {
    variables: {
      idUser: user._id,
      medicamento,
    },

    onCompleted: () => {
      setMedicamento(initialMedicamento);
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
        variables: { idUser: user._id },
      },
    ],
    awaitRefetchQueries: true,
  });
  return (
    <Modal display={display} setDisplay={setDisplay}>
      <Heading>Agregar Medicamento</Heading>
      <Flex
        sx={{ flexFlow: "column nowrap", alignItems: "flex-start" }}
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          insertUserMedicamentos();
        }}
      >
        <Flex
          sx={{
            flexFlow: "row wrap",
            justifyContent: "space-around",
            alignItems: "flex-end",
          }}
        >
          <Box m={2}>
            <Label>Nombre</Label>
            <Input
              type="text"
              value={medicamento.nombre}
              onChange={makeOnChange("nombre")}
            />
          </Box>
          <Box m={2}>
            <Label>Dosis</Label>
            <Input
              type="text"
              value={medicamento.dosis}
              onChange={makeOnChange("dosis")}
            />
          </Box>
          <Box m={2}>
            <Label>Frecuencia</Label>
            <Input
              type="text"
              value={medicamento.frecuencia}
              onChange={makeOnChange("frecuencia")}
            />
          </Box>
          <Box m={2}>
            <Label>Sirve para</Label>
            <Input
              type="text"
              value={medicamento.sirvePara}
              onChange={makeOnChange("sirvePara")}
            />
          </Box>
          <Box m={2} sx={{ width: ["100%", "300px"] }}>
            <Label>Observaciones</Label>
            <Textarea
              value={medicamento.observaciones}
              onChange={makeOnChange("observaciones")}
            />
          </Box>
          <Box m={2}>
            <Label>Fecha de inicio</Label>
            <Input
              type="date"
              value={moment(medicamento.fechaInicio).format("YYYY-MM-DD")}
              onChange={({ target: { value } }) =>
                setMedicamento({
                  ...medicamento,
                  fechaInicio: moment(value).startOf("day").toDate(),
                })
              }
            />
          </Box>
          <Box m={2}>
            <Label>Fecha de fin</Label>
            <Input
              type="date"
              value={moment(medicamento.fechaFin).format("YYYY-MM-DD")}
              onChange={({ target: { value } }) =>
                setMedicamento({
                  ...medicamento,
                  fechaFin: moment(value).endOf("day").toDate(),
                })
              }
            />
          </Box>
          <Flex
            m={2}
            sx={{
              flexFlow: "column nowrap",
              alignItems: "flex-start",
              minWidth: "300px",
            }}
          >
            <Box sx={{ minWidth: "300px" }}>
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
                  my={1}
                  p={2}
                  key={doctor._id}
                  sx={{
                    backgroundColor: drId === doctor._id ? "grey" : "white",
                    color: drId === doctor._id ? "white" : "black",
                    border: "1px solid black",
                    width: "100%",
                  }}
                  onClick={() => {
                    setMedicamento({
                      ...medicamento,
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
        </Flex>
        {Object.values(medicamento)
          .filter((_, index) => {
            const key = Object.keys(medicamento)[index];
            return key !== "fechaInicio" && key !== "fechaFin";
          })
          .every((prop) => prop !== "") && (
          <Button disabled={loadingMutation} type="submit">
            {loadingMutation ? <Spinner /> : "Agregar medicamento"}
          </Button>
        )}
      </Flex>
    </Modal>
  );
}

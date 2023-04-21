import Modal from "@/components/atoms/Modal";
import {
  Heading,
  Flex,
  Input,
  Label,
  Button,
  Box,
  Textarea,
} from "@theme-ui/components";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Select from "react-select";
import { gql, useMutation } from "@apollo/client";
import { useGlobalData } from "@/components/context/GlobalContext";
import { dateInputFormat } from "@/lib/helpers/formatters";

const MUTATION = gql`
  mutation Mutation($input: UserInput!) {
    insertUser(input: $input) {
      code
      message
      success
    }
  }
`;

export default function AgregarFamiliar({ display, setDisplay }) {
  const { data: session, status } = useSession();
  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    roles: ["familiar"],
    peso: 0,
    estatura: 0,
    alergias: "",
    enfermedades: "",
    familias: [],
    tipoSangre: "",
    fechaNacimiento: new Date(),
    curp: "",
    rfc: "",
  };
  const familias = session?.user?.familias
    ?.filter((familia) => session?.user?.id === familia.administradorId)
    .map((familia) => ({
      value: familia._id,
      label: familia.nombre,
      administradorName: familia.administradorName,
      administradorId: familia.administradorId,
    }));
  const [values, setValues] = useState(initialValues);
  const makeOnChange =
    (fieldName) =>
    ({ target: { value } }) =>
      setValues({
        ...values,
        [fieldName]: value.toUpperCase(),
      });
  const { setAlert } = useGlobalData();
  const [insertUser, { loading }] = useMutation(MUTATION, {
    variables: {
      input: {
        ...values,
        email: values.email.toLowerCase(),
        familias: values.familias.map((familia) => ({
          _id: familia.value,
          nombre: familia.label,
          administradorName: familia.administradorName,
          administradorId: familia.administradorId,
        })),
        peso: parseFloat(values.peso),
        estatura: parseFloat(values.estatura),
        alergias: values.alergias?.split(",").map((alergia) => alergia.trim()),
        enfermedades: values.enfermedades
          ?.split(",")
          .map((enfermedad) => enfermedad.trim()),
      },
    },
    onCompleted: ({}) => {
      setValues(initialValues);
    },
    onError: (err) => {
      setAlert({
        message: err.message,
        display: "box",
        variant: "orange",
      });
    },
  });
  return (
    <Modal display={display} setDisplay={setDisplay}>
      <Heading as="h2">Agregar familiar</Heading>
      <Flex
        sx={{
          flexFlow: "column nowrap",
          justifyContent: ["center", "center", "flex-start"],
          alignContent: "center",
          alignItems: ["center", "baseline"],
        }}
        as="form"
        my={2}
        p={2}
        onSubmit={(e) => {
          e.preventDefault();
          insertUser();
        }}
      >
        <Flex sx={{ flexFlow: "row wrap", justifyContent: "space-between" }}>
          <Box m={1}>
            <Label>Nombre</Label>
            <Input
              type="text"
              value={values.name}
              onChange={makeOnChange("name")}
            />
          </Box>
          <Box m={1}>
            <Label>Apellido</Label>
            <Input
              type="text"
              value={values.lastName}
              onChange={makeOnChange("lastName")}
            />
          </Box>
          <Box m={1}>
            <Label>Email</Label>
            <Input
              type="text"
              value={values.email}
              onChange={makeOnChange("email")}
            />
          </Box>
          <Box m={1}>
            <Label>Fecha de Nacimiento</Label>
            <Input
              type="date"
              value={dateInputFormat(values.fechaNacimiento)}
              onChange={makeOnChange("fechaNacimiento")}
            />
          </Box>
          <Box m={1}>
            <Label>Peso en kgs</Label>
            <Input
              type="number"
              min="2"
              step="0.01"
              max="300"
              value={values.peso}
              onChange={makeOnChange("peso")}
            />
          </Box>
          <Box m={1}>
            <Label>Estatura en cm</Label>
            <Input
              type="number"
              step="0.01"
              min="40"
              max="250"
              value={values.estatura}
              onChange={makeOnChange("estatura")}
            />
          </Box>
          <Box m={1}>
            <Label>Curp</Label>
            <Input
              type="text"
              value={values.curp}
              onChange={makeOnChange("curp")}
            />
          </Box>
          <Box m={1}>
            <Label>RFC</Label>
            <Input
              type="text"
              value={values.rfc}
              onChange={makeOnChange("rfc")}
            />
          </Box>
          <Box m={1}>
            <Label>Tipo de Sangre</Label>
            <Input
              type="text"
              value={values.tipoSangre}
              onChange={makeOnChange("tipoSangre")}
            />
          </Box>
        </Flex>
        <Flex sx={{ flexFlow: "row wrap", justifyContent: "space-between" }}>
          <Box m={1}>
            <Label
              sx={{
                display: "flex",
                flexFlow: "column nowrap",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              Alergias
              <p>
                <small>separar con " , " - comas - cada alergia</small>
              </p>
            </Label>
            <Textarea
              rows={3}
              sx={{ minWidth: "300px" }}
              value={values.alergias}
              onChange={makeOnChange("alergias")}
            />
          </Box>
          <Box m={1}>
            <Label
              sx={{
                display: "flex",
                flexFlow: "column nowrap",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              Enfermedades
              <p>
                <small>separar con " , " - comas - cada enfermedad</small>
              </p>
            </Label>
            <Textarea
              rows={3}
              sx={{ minWidth: "300px" }}
              value={values.enfermedades}
              onChange={makeOnChange("enfermedades")}
            />
          </Box>
          <Box m={1} sx={{ minWidth: "300px" }}>
            <Label
              sx={{
                display: "flex",
                flexFlow: "column nowrap",
                justifyContent: "center",
                alignContent: "center",
              }}
              mb={3}
            >
              Familias a incluir
            </Label>
            <Select
              isMulti
              isSearchable
              options={familias}
              value={values.familias}
              onChange={(e) => setValues({ ...values, familias: e })}
            />
          </Box>
        </Flex>
        <Button my={2} type="submit" disabled={loading}>
          Agregar familiar
        </Button>
      </Flex>
    </Modal>
  );
}

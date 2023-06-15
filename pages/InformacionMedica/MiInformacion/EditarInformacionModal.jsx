import Modal from "../../../components/atoms/Modal";
import {
  Heading,
  Flex,
  Input,
  Label,
  Button,
  Box,
  Spinner,
  Badge,
} from "@theme-ui/components";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useGlobalData } from "../../../components/context/GlobalContext";
import { dateInputFormat } from "../../../lib/helpers/formatters";
import { AiOutlineDelete } from "react-icons/ai";
import Upload from "../../../components/atoms/Upload";
const MUTATION = gql`
  mutation Mutation($userId: ID!, $email: String!, $input: UserInputEdit!) {
    updateUserProfile(userId: $userId, email: $email, input: $input) {
      code
      message
      success
    }
  }
`;
export default function EditarInformacion({
  display,
  setDisplay,
  user,
  query,
}) {
  const initialValues = {
    ...user,
    alergias: user?.alergias?.join(", "),
    enfermedades: user?.enfermedades?.join(", "),
  };
  const [foto, setFoto] = useState(user?.foto || "");
  const [values, setValues] = useState(initialValues);
  const makeOnChange =
    (fieldName) =>
    ({ target: { value } }) =>
      setValues({
        ...values,
        [fieldName]: value.toUpperCase(),
      });
  const { setAlert } = useGlobalData();
  const [alergias, setAlergias] = useState(user?.alergias || []);
  const [writtenAlergia, setWrittenAlergia] = useState("");
  const [enfermedades, setEnfermedades] = useState(user?.enfermedades || []);
  const [writtenEnfermedad, setWrittenEnfermedad] = useState("");
  const [insertUser, { loading }] = useMutation(MUTATION, {
    variables: {
      userId: user._id,
      email: values.email.toLowerCase(),
      input: {
        name: values.name,
        lastName: values.lastName,
        fechaNacimiento: new Date(values.fechaNacimiento),
        peso: parseFloat(values.peso),
        estatura: parseFloat(values.estatura),
        curp: values.curp,
        rfc: values.rfc,
        telefono: values.telefono,
        picture: foto,
        tipoSangre: values.tipoSangre,
        alergias,
        enfermedades,
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
      <Heading as="h2">
        Editar {values.name} {values.lastName}
      </Heading>
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
            <Label>Telefono</Label>
            <Input
              type="tel"
              value={values.telefono}
              onChange={makeOnChange("telefono")}
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
        <Flex
          sx={{
            flexFlow: "row wrap",
            justifyContent: "space-between",
            width: "100%",
          }}
          mb={2}
        >
          <Flex
            sx={{
              flexFlow: ["row wrap"],
              justifyContent: ["space-between"],
              alignItems: "flex-start",
            }}
          >
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
              </Label>
              <Input
                value={writtenAlergia}
                onChange={({ target: { value } }) => setWrittenAlergia(value)}
              />
            </Box>
            <Button
              sx={{ alignSelf: "flex-end", marginBottom: "6px" }}
              onClick={(e) => {
                e.preventDefault();
                setAlergias([...alergias, writtenAlergia]);
                setWrittenAlergia("");
              }}
            >
              Agregar Alergia
            </Button>
          </Flex>
          <Flex
            sx={{
              flexFlow: "row wrap",
              justifyContent: "space-between",
              gap: "6px",
              width: "100%",
            }}
            my={1}
          >
            {alergias?.map((alergia, index) => (
              <Badge
                sx={{
                  display: "flex",
                  flexFlow: "row wrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px",
                  fontSize: "18px",
                  alignSelf: "flex-start",
                }}
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setAlergias(alergias.filter((item, i) => i !== index));
                }}
              >
                <AiOutlineDelete />
                <div> {alergia}</div>
              </Badge>
            ))}
          </Flex>
        </Flex>
        <Flex
          sx={{
            flexFlow: "row wrap",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Flex
            sx={{
              flexFlow: ["row wrap"],
              justifyContent: ["space-between"],
              alignItems: "flex-start",
            }}
          >
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
              </Label>
              <Input
                value={writtenEnfermedad}
                onChange={({ target: { value } }) =>
                  setWrittenEnfermedad(value)
                }
              />
            </Box>
            <Button
              sx={{ alignSelf: "flex-end", marginBottom: "6px" }}
              onClick={(e) => {
                e.preventDefault();
                setEnfermedades([...enfermedades, writtenEnfermedad]);
                setWrittenEnfermedad("");
              }}
            >
              Agregar Enfermedad
            </Button>
          </Flex>
          <Flex
            sx={{
              flexFlow: "row wrap",
              justifyContent: "space-between",
              gap: "6px",
              width: "100%",
            }}
            my={1}
          >
            {enfermedades?.map((enfermedad, index) => (
              <Badge
                sx={{
                  display: "flex",
                  flexFlow: "row wrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px",
                  fontSize: "18px",
                  alignSelf: "flex-start",
                }}
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setEnfermedades(
                    enfermedades.filter((item, i) => i !== index)
                  );
                }}
              >
                <AiOutlineDelete />
                <div> {enfermedad}</div>
              </Badge>
            ))}
          </Flex>
        </Flex>
        <Flex
          sx={{
            width: "100%",
            flexFlow: "row wrap",
            justifyContent: "space-between",
          }}
        >
          <Upload
            setFoto={setFoto}
            location="profilePicture"
            user={user?._id}
            heading="Cambiar foto"
            accept="image/*"
          />
          <Button type="submit" disabled={loading}>
            {loading ? <Spinner /> : "Editar familiar"}
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
}

import {
  Flex,
  Heading,
  Label,
  Input,
  Box,
  Button,
  Spinner,
  Checkbox,
  Text,
  Badge,
  Alert,
} from "@theme-ui/components";
import { useState } from "react";
import { dateInputFormat, styleReactSelect } from "@/lib/helpers/formatters";
import Select from "react-select";
import { gql, useMutation } from "@apollo/client";
import { signIn } from "next-auth/react";
import { AiOutlineDelete } from "react-icons/ai";
const tipoSangreOptions = [
  { label: "A+", value: "A+" },
  { label: "A-", value: "A-" },
  { label: "B+", value: "B+" },
  { label: "B-", value: "B-" },
  { label: "AB+", value: "AB+" },
  { label: "AB-", value: "AB-" },
  { label: "O+", value: "O+" },
  { label: "O-", value: "O-" },
];

const MUTATION = gql`
  mutation Mutation($input: UserSignUpInput!, $familia: String!) {
    insertUserSignUp(input: $input, familia: $familia) {
      code
      message
      success
    }
  }
`;

export default function SignUp() {
  const initial = {
    email: "",
    name: "",
    lastName: "",
    peso: 0,
    estatura: 0,
    tipoSangre: { value: null, label: "Selecciona tipo de sangre" },
    fechaNacimiento: new Date(),
    rfc: "________",
    curp: "________",
    telefono: "",
    alergias: "Sin Alergias",
    enfermedades: "Sin enfermedades",
  };
  const [alergias, setAlergias] = useState([]);
  const [writtenAlergia, setWrittenAlergia] = useState("Sin Alergias");
  const [enfermedades, setEnfermedades] = useState([]);
  const [writtenEnfermedad, setWrittenEnfermedad] =
    useState("Sin enfermedades");
  const [acepto, setAcepto] = useState(false);
  const [user, setUser] = useState(initial);
  const makeOnChange =
    (fieldName) =>
    ({ target: { value } }) =>
      setUser({
        ...user,
        [fieldName]: value.toUpperCase(),
      });
  const [insert, { loading, error }] = useMutation(MUTATION, {
    variables: {
      input: {
        ...user,
        email: user.email.toLowerCase(),
        peso: parseFloat(user.peso),
        estatura: parseFloat(user.estatura),
        alergias,
        enfermedades,
        tipoSangre: user.tipoSangre.value,
      },
      familia: user.lastName,
    },
    onCompleted: () => {
      signIn();
    },
  });
  return (
    <Flex
      sx={{
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}
      p={2}
      mb={5}
    >
      <Heading as="h1" sx={{ color: "#000", fontSize: "30px" }} mt={2}>
        Sign up
      </Heading>
      <Text mb={3}>Para historial medico</Text>
      <Box
        as="form"
        sx={{
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "800px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          insert();
        }}
      >
        <Flex
          sx={{
            flexFlow: ["column nowrap", "row wrap"],
            justifyContent: ["center", "space-between"],
            alignItems: "center",
            my: 1,
            p: 2,
          }}
        >
          <Box m={1} sx={{ width: "200px" }}>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              value={user.email}
              onChange={makeOnChange("email")}
            />
          </Box>
          <Box m={1} sx={{ width: "200px" }}>
            <Label htmlFor="telefono">Telefono</Label>
            <Input
              type="tel"
              value={user.telefono}
              onChange={makeOnChange("telefono")}
            />
          </Box>
        </Flex>
        <Flex
          sx={{
            flexFlow: ["column nowrap", "row wrap"],
            justifyContent: ["center", "space-between"],
            alignItems: "center",
            my: 1,
            p: 2,
          }}
        >
          <Box m={1} sx={{ width: "200px" }}>
            <Label>Nombre</Label>
            <Input
              type="text"
              value={user.name}
              onChange={makeOnChange("name")}
            />
          </Box>
          <Box m={1} sx={{ width: "200px" }}>
            <Label>Apellidos</Label>
            <Input
              type="text"
              value={user.lastName}
              onChange={makeOnChange("lastName")}
            />
          </Box>
        </Flex>
        <Flex
          sx={{
            flexFlow: ["column nowrap", "row wrap"],
            justifyContent: ["center", "space-between"],
            alignItems: "center",
            my: 1,
            p: 2,
          }}
        >
          <Box m={1} sx={{ width: "200px" }}>
            <Label>Peso en kgs</Label>
            <Input
              type="number"
              min="2"
              step="0.01"
              max="300"
              value={user.peso}
              onChange={makeOnChange("peso")}
            />
          </Box>
          <Box m={1} sx={{ width: "200px" }}>
            <Label>Estatura en cm</Label>
            <Input
              type="number"
              step="0.01"
              min="40"
              max="250"
              value={user.estatura}
              onChange={makeOnChange("estatura")}
            />
          </Box>
        </Flex>
        <Flex
          sx={{
            flexFlow: ["column nowrap", "row wrap"],
            justifyContent: ["center", "space-between"],
            alignItems: "center",
            my: 1,
            p: 2,
          }}
        >
          <Box m={1} sx={{ width: "200px" }}>
            <Label>Tipo de sangre</Label>
            <Select
              styles={styleReactSelect}
              options={tipoSangreOptions}
              value={user.tipoSangre}
              onChange={(tipoSangre) => setUser({ ...user, tipoSangre })}
            />
          </Box>
          <Box m={1} sx={{ width: "200px" }}>
            <Label>Fecha de Nacimiento</Label>
            <Input
              type="date"
              sx={{ width: "100%" }}
              value={dateInputFormat(user.fechaNacimiento)}
              onChange={makeOnChange("fechaNacimiento")}
            />
          </Box>
        </Flex>
        <Flex
          sx={{
            flexFlow: ["column nowrap", "row wrap"],
            justifyContent: ["center", "flex-start"],
            alignItems: "flex-start",
            width: "100%",

            my: 2,
            p: 2,
          }}
        >
          <Flex
            m={1}
            sx={{
              flexFlow: "column nowrap",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "12px",
            }}
            mr={[2, 4]}
          >
            <Box>
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
              onClick={(e) => {
                e.preventDefault();
                setAlergias([...alergias, writtenAlergia]);
                setWrittenAlergia("");
              }}
            >
              Agregar Alergia
            </Button>
          </Flex>
          <Flex sx={{ flexFlow: "row wrap", gap: "6px" }} my={2}>
            {alergias.map((alergia, index) => (
              <Badge
                sx={{
                  display: "flex",
                  flexFlow: "row wrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px",
                  fontSize: "18px",
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
            flexFlow: ["column nowrap", "row wrap"],
            justifyContent: ["center", "flex-start"],
            alignItems: "flex-start",
            width: "100%",

            my: 2,
            p: 2,
          }}
        >
          <Flex
            m={1}
            sx={{
              flexFlow: "column nowrap",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "12px",
              width: "100%",
            }}
          >
            <Box>
              <Label
                sx={{
                  display: "flex",
                  flexFlow: "column nowrap",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                Enfermedades Cronicas
              </Label>
              <Input
                value={writtenEnfermedad}
                onChange={({ target: { value } }) =>
                  setWrittenEnfermedad(value)
                }
              />
            </Box>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setEnfermedades([...enfermedades, writtenEnfermedad]);
                setWrittenEnfermedad("");
              }}
            >
              Agregar Enfermedad
            </Button>
          </Flex>
          <Flex sx={{ flexFlow: "row wrap", width: "100%", gap: "6px" }} my={2}>
            {enfermedades.map((enfermedad, index) => (
              <Badge
                key={index}
                sx={{
                  display: "flex",
                  flexFlow: "row wrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px",
                  fontSize: "18px",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setEnfermedades(enfermedad.filter((item, i) => i !== index));
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
            flexFlow: ["column nowrap", "row wrap"],
            justifyContent: ["center", "space-between"],
            alignItems: "center",
          }}
          m={1}
          my={2}
          onClick={() => setAcepto(!acepto)}
        >
          <Text mr={3}>Acepto terminos y condiciones</Text>
          <Checkbox
            checked={acepto}
            onChange={({ currentTarget: { checked } }) => setAcepto(checked)}
          />
        </Flex>
        <Button
          disabled={
            loading ||
            !Object.values(user).every((prop) => prop !== "") ||
            !acepto
          }
        >
          {loading ? <Spinner /> : "Sign up"}
        </Button>
      </Box>
      {error && <Alert variant="error">{error}</Alert>}
    </Flex>
  );
}

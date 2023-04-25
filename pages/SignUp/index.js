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
  Textarea,
  Alert,
} from "@theme-ui/components";
import { useState } from "react";
import { dateInputFormat, styleReactSelect } from "@/lib/helpers/formatters";
import Select from "react-select";
import { gql, useMutation } from "@apollo/client";
import { signIn } from "next-auth/react";
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
  const [acepto, setAcepto] = useState(false);
  const [user, setUser] = useState(initial);
  const makeOnChange =
    (fieldName) =>
    ({ target: { value } }) =>
      setUser({
        ...user,
        [fieldName]: value.toUpperCase(),
      });
  const [familia, setFamilia] = useState("");

  const [insert, { loading, error }] = useMutation(MUTATION, {
    variables: {
      input: {
        ...user,
        email: user.email.toLowerCase(),
        peso: parseFloat(user.peso),
        estatura: parseFloat(user.estatura),
        alergias: user.alergias?.split(",").map((alergia) => alergia.trim()),
        enfermedades: user.enfermedades
          ?.split(",")
          .map((enfermedad) => enfermedad.trim()),
        tipoSangre: user.tipoSangre.value,
      },
      familia: familia,
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
          minWidth: "300px",
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
          <Box m={1} sx={{ width: "200px" }}>
            <Label>Nombre</Label>
            <Input
              type="text"
              value={user.name}
              onChange={makeOnChange("name")}
            />
          </Box>
          <Box m={1} sx={{ width: "200px" }}>
            <Label>Apellido</Label>
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
            alignSelf: ["center", "flex-start"],
          }}
        >
          <Box m={1} sx={{ width: ["200px", "620px"] }}>
            <Label>Apellido Familiar <small>Nombre de tu familia</small></Label>
            <Input
              type="text"
              value={familia}
              onChange={({ currentTarget: { value } }) =>
                setFamilia(value.toUpperCase())
              }
            />
          </Box>
        </Flex>
        <Flex
          sx={{
            flexFlow: ["column nowrap", "row wrap"],
            justifyContent: ["center", "space-between"],
            alignItems: "center",
          }}
        >
          <Box m={1} sx={{ width: "200px" }}>
            <Label>Fecha de Nacimiento</Label>
            <Input
              type="date"
              sx={{ width: "100%" }}
              value={dateInputFormat(user.fechaNacimiento)}
              onChange={makeOnChange("fechaNacimiento")}
            />
          </Box>
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
          }}
        >
          <Box m={1} sx={{ width: "300px" }}>
            <Label>Curp</Label>
            <Input
              type="text"
              value={user.curp}
              onChange={makeOnChange("curp")}
            />
          </Box>
          <Box m={1} sx={{ width: "300px" }}>
            <Label>RFC</Label>
            <Input
              type="text"
              value={user.rfc}
              onChange={makeOnChange("rfc")}
            />
          </Box>
          <Box m={1} sx={{ width: "200px" }}>
            <Label>Tipo de sangre</Label>
            <Select
              styles={styleReactSelect}
              options={tipoSangreOptions}
              value={user.tipoSangre}
              onChange={(tipoSangre) => setUser({ ...user, tipoSangre })}
            />
          </Box>
        </Flex>
        <Flex
          sx={{
            flexFlow: ["column nowrap", "row wrap"],
            justifyContent: ["center", "space-between"],
            alignItems: "center",
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
              <p>
                <small>separar con comas " , " cada alergia</small>
              </p>
            </Label>
            <Textarea
              rows={3}
              sx={{ minWidth: "300px" }}
              value={user.alergias}
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
              Enfermedades Crónicas
              <p>
                <small>separar con comas " , " cada enfermedad</small>
              </p>
            </Label>
            <Textarea
              rows={3}
              sx={{ minWidth: "300px" }}
              value={user.enfermedades}
              onChange={makeOnChange("enfermedades")}
            />
          </Box>
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

import Modal from "../../components/atoms/Modal";
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

export default function AgregarFamiliar({ display, setDisplay }) {
  const initialValues = {
    name: "",
    lastName: "",
    roles: ["familiar"],
    peso: 0,
    estatura: 0,
    alergias: [],
    enfermedades: [],
    familias: [],
    tipoSangre: "",
  };
  const [values, setValues] = useState(initialValues);
  const makeOnChange =
    (fieldName) =>
    ({ target: { value } }) =>
      setValues({
        ...values,
        [fieldName]: value.toUpperCase(),
      });
  return (
    <Modal display={display} setDisplay={setDisplay}>
      <Heading as="h2">Agregar familiar</Heading>
      <Flex
        sx={{
          flexFlow: "column nowrap",
          justifyContent: "flex-start",
          alignContent: "center",
          alignItems: "baseline",
        }}
        my={2}
        p={2}
      >
        <Flex sx={{ flexFlow: "row wrap" }}>
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
            <Label>Tipo de Sangre</Label>
            <Input
              type="text"
              value={values.tipoSangre}
              onChange={makeOnChange("tipoSangre")}
            />
          </Box>
        </Flex>
        <Flex sx={{ flexFlow: "row wrap" }}>
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
                <small>seperar con " , " - comas - cada alergia</small>
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
                <small>seperar con " , " - comas - cada enfermedad</small>
              </p>
            </Label>
            <Textarea
              rows={3}
              sx={{ minWidth: "300px" }}
              value={values.alergias}
              onChange={makeOnChange("enfermedad")}
            />
          </Box>
        </Flex>
      </Flex>
    </Modal>
  );
}

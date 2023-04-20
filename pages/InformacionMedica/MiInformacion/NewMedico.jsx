import { Flex, Input, Label, Box, Text, Heading } from "@theme-ui/components";

export default function NewMedico({ newDoctor, setNewDoctor }) {
  const makeOnChange =
    (fieldName) =>
    ({ target: { value } }) =>
      setNewDoctor({
        ...newDoctor,
        [fieldName]: value.toUpperCase(),
      });
  return (
    <>
      <Heading>Agregar Médico</Heading>
      <Flex
        sx={{
          flexFlow: "row wrap",
          justifyContent: "space-around",
          alignItems: "flex-end",
          backgroundColor: "#bababa",
          borderRadius: "5px",
        }}
      >
        <Box m={2}>
          <Label>Nombre</Label>
          <Input
            required
            type="text"
            value={newDoctor.nombre}
            onChange={makeOnChange("nombre")}
          />
        </Box>
        <Box m={2}>
          <Label>Apellido</Label>
          <Input
            required
            type="text"
            value={newDoctor.apellido}
            onChange={makeOnChange("apellido")}
          />
        </Box>
        <Box m={2}>
          <Label>Email</Label>
          <Input
            type="email"
            value={newDoctor.email}
            onChange={makeOnChange("email")}
          />
        </Box>
        <Box m={2}>
          <Label>
            <Flex sx={{ flexFlow: "column nowrap" }}>
              <Text>Telefonos</Text>
              <Text sx={{ fontSize: "12px" }}>separar por comas ' , '</Text>
            </Flex>
          </Label>
          <Input
            type="text"
            required
            value={newDoctor.telefonos}
            onChange={makeOnChange("telefonos")}
          />
        </Box>
        <Box m={2}>
          <Label>Especialidad</Label>
          <Input
            required
            type="text"
            value={newDoctor.especialidad}
            onChange={makeOnChange("especialidad")}
          />
        </Box>
        <Box m={2}>
          <Label>Direccion</Label>
          <Input
            type="text"
            value={newDoctor.direccion}
            onChange={makeOnChange("direccion")}
          />
        </Box>
      </Flex>
    </>
  );
}

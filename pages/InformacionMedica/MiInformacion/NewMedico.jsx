import {
  Flex,
  Input,
  Label,
  Box,
  Text,
  Button,
  Heading,
} from "@theme-ui/components";
import { styleReactSelect } from "@/lib/helpers/formatters";
import Select from "react-select";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineDelete } from "react-icons/ai";
const tiposTel = [
  { value: "CELULAR", label: "Celular" },
  { value: "CONSULTORIO", label: "Consultorio" },
];

export default function NewMedico({ newDoctor, setNewDoctor }) {
  const makeOnChange =
    (fieldName) =>
    ({ target: { value } }) =>
      setNewDoctor({
        ...newDoctor,
        [fieldName]: value.toUpperCase(),
      });
  const [newTel, setNewTel] = useState({
    _id: "",
    telefono: "",
    tipo: { value: null, label: "Selecciona tipo" },
  });
  return (
    <>
      <Heading>Agregar Médico</Heading>
      <Flex
        sx={{
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#bababa",
          borderRadius: "5px",
        }}
      >
        <Flex
          sx={{
            flexFlow: "row wrap",
            justifyContent: "center",
            alignContent: "center",
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
        </Flex>
        <Text sx={{ fontWeight: "bold" }}>Telefono</Text>
        <Flex
          m={2}
          sx={{
            flexFlow: "row wrap",
            justifyContent: "space-between",
            alignContent: "center",
            width: "100%",
          }}
        >
          <Box m={1}>
            <Label>Tipo</Label>
            <Select
              styles={styleReactSelect}
              options={tiposTel}
              value={newTel.tipo}
              onChange={(e) => setNewTel({ ...newTel, tipo: e })}
            />
          </Box>
          <Box m={1}>
            <Label>Telefono</Label>
            <Input
              type="tel"
              value={newTel.telefono}
              onChange={(e) =>
                setNewTel({ ...newTel, telefono: e.currentTarget.value })
              }
            />
          </Box>
          <Button
            m={1}
            onClick={(e) => {
              e.preventDefault();
              setNewDoctor({
                ...newDoctor,
                telefonos: [
                  ...newDoctor.telefonos,
                  { ...newTel, _id: uuidv4(), tipo: newTel.tipo.value },
                ],
              });
              setNewTel({
                _id: "",
                telefono: "",
                tipo: { value: null, label: "Selecciona tipo" },
              });
            }}
          >
            Agregar Telefono
          </Button>
        </Flex>
        <Text sx={{ fontWeight: "bold" }}>Telefonos agregados</Text>
        <Flex
          my={2}
          sx={{ flexFlow: "row wrap", justifyContent: "center", gap: "4px" }}
        >
          {newDoctor.telefonos.map((tel) => (
            <Box
              className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded flex flex-col flex-nowrap justify-center items-center"
              key={tel._id}
              onClick={() => {
                setNewDoctor({
                  ...newDoctor,
                  telefonos: newDoctor.telefonos.filter(
                    (t) => t._id !== tel._id
                  ),
                });
              }}
            >
              {tel.tipo} - {tel.telefono}
              <AiOutlineDelete />
            </Box>
          ))}
        </Flex>
        <Flex
          sx={{
            flexFlow: "row wrap",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
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
      </Flex>
    </>
  );
}

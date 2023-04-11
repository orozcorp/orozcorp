import React from "react";
import Modal from "../../../components/atoms/Modal";
import { Heading, Button, Label, Input, Flex, Box } from "@theme-ui/components";
import { dateInputFormat } from "../../../lib/helpers/formatters";

const MUTATION_PESO_ESTATURA = gql`
  mutation UpdateUserWeightHeight(
    $idUser: String!
    $estatura: Float!
    $peso: Float!
    $fecha: Date!
  ) {
    updateUserWeightHeight(
      idUser: $idUser
      estatura: $estatura
      peso: $peso
      fecha: $fecha
    ) {
      code
      message
      success
    }
  }
`;

export default function AgregarPeso({
  userInfo,
  minor,
  setDisplay,
  display,
  query,
}) {
  const [fecha, setFecha] = useState(new Date());
  const [peso, setPeso] = useState(0);
  const [estatura, setEstatura] = useState(userInfo.profile.estatura);
  //Add the mutation to the component and call it
  // when complete close the modal and refetch the query
  return (
    <Modal display={display} setDisplay={setDisplay}>
      <Heading as="h3" sx={{ textAlign: "center" }}>
        Agregar peso {minor ? "y estatura" : ""}
      </Heading>
      <Flex sx={{ flexFlow: "column nowrap", alignItems: "center" }}>
        <Box>
          <Label>Fecha</Label>
          <Input
            type="date"
            value={dateInputFormat(fecha)}
            onChange={(e) => setFecha(e.currentTarget.value)}
          />
        </Box>
        <Box>
          <Label>Peso en kg</Label>
          <Input
            type="number"
            step="0.01"
            value={peso}
            onChange={(e) => setPeso(e.currentTarget.value)}
          />
        </Box>
        {minor && (
          <Box>
            <Label>Estatura en cm</Label>
            <Input
              type="number"
              step="0.01"
              value={estatura}
              onChange={(e) => setEstatura(e.currentTarget.value)}
            />
          </Box>
        )}
      </Flex>
    </Modal>
  );
}

import { useState } from "react";
import Modal from "../../../components/atoms/Modal";
import {
  Heading,
  Button,
  Label,
  Input,
  Flex,
  Box,
  Spinner,
} from "@theme-ui/components";
import { dateInputFormat } from "../../../lib/helpers/formatters";
import { gql, useMutation } from "@apollo/client";
import { useGlobalData } from "../../../components/context/GlobalContext";
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
  const { setAlert } = useGlobalData();
  const [update, { loading, error }] = useMutation(MUTATION_PESO_ESTATURA, {
    variables: {
      idUser: userInfo._id,
      estatura: Number(estatura),
      peso: Number(peso),
      fecha,
    },
    onCompleted: () => {
      setFecha(new Date());
      setPeso(0);
      setEstatura(0);
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
        variables: { idUser: userInfo._id, oldMed: false },
      },
    ],
    awaitRefetchQueries: true,
  });
  return (
    <Modal display={display} setDisplay={setDisplay}>
      <Heading as="h2" sx={{ textAlign: "center" }} my={2}>
        Agregar peso {minor ? "y estatura" : ""}
      </Heading>
      <Flex
        sx={{ flexFlow: "column nowrap", alignItems: "center" }}
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          update();
        }}
      >
        <Box m={1} sx={{ width: "300px" }}>
          <Label>Fecha</Label>
          <Input
            type="date"
            value={dateInputFormat(fecha)}
            onChange={(e) => setFecha(e.currentTarget.value)}
          />
        </Box>
        <Box m={1} sx={{ width: "300px" }}>
          <Label>Peso en kg</Label>
          <Input
            type="number"
            step="0.01"
            value={peso}
            onChange={(e) => setPeso(e.currentTarget.value)}
          />
        </Box>
        {minor && (
          <Box m={1} sx={{ width: "300px" }}>
            <Label>Estatura en cm</Label>
            <Input
              type="number"
              step="0.01"
              value={estatura}
              onChange={(e) => setEstatura(e.currentTarget.value)}
            />
          </Box>
        )}
        {peso > 0 && estatura > 0 && (
          <Button disabled={loading}>
            {loading ? <Spinner /> : "Agregar"}
          </Button>
        )}
      </Flex>
    </Modal>
  );
}

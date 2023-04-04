import { useState } from "react";
import Modal from "../../../components/atoms/Modal";
import { Heading, Flex, Box, Label, Input, Button } from "@theme-ui/components";
import { dateInputFormat } from "../../../lib/helpers/formatters";
import Upload from "../../../components/atoms/Upload";
import { gql, useMutation } from "@apollo/client";
import { useGlobalData } from "../../../components/context/GlobalContext";

const MUTATION = gql`
  mutation Mutation($idUser: String!, $seguro: SeguroInput!) {
    updateUserSeguro(idUser: $idUser, seguro: $seguro) {
      code
      message
      success
    }
  }
`;

export default function AgregarTuSeguro({ user, setDisplay, display }) {
  const { setAlert } = useGlobalData();
  const [tarjetaSeguro, setTarjetaSeguro] = useState("");
  const [caratulaSeguro, setCaratulaSeguro] = useState("");
  const [fechaVencimientoSeguro, setFechaVencimientoSeguro] = useState(
    new Date()
  );
  const [updateUserSeguro, { loading }] = useMutation(MUTATION, {
    variables: {
      idUser: user._id,
      seguro: {
        tarjetaSeguro,
        caratulaSeguro,
        fechaVencimientoSeguro,
      },
    },
    onCompleted: (data) => {
      setTarjetaSeguro("");
      setCaratulaSeguro("");
      setFechaVencimientoSeguro(new Date());
      setDisplay("none");
    },
    onError: (error) => {
      setAlert({
        message: error.message,
        display: "box",
        variant: "orange",
      });
    },
  });
  return (
    <Modal display={display} setDisplay={setDisplay}>
      <Heading>Agregar tu seguro</Heading>
      <Flex
        sx={{
          flexFlow: "row wrap",
          justifyContent: ["center", "center", "flex-start"],
          alignContent: "center",
          alignItems: ["center"],
        }}
        as="form"
        my={2}
        p={2}
        onSubmit={(e) => {
          e.preventDefault();
          updateUserSeguro();
        }}
      >
        <Upload
          setFoto={setTarjetaSeguro}
          location="tarjetaSeguro"
          user={user}
          heading="Tarjeta de seguro"
          accept="image/*"
        />
        <Upload
          setFoto={setCaratulaSeguro}
          location="caratulaSeguro"
          user={user}
          heading="Caratula de seguro"
          accept="application/pdf , image/*"
        />
        <Box my={2}>
          <Label htmlFor="fechaVencimientoSeguro">Fecha de vencimiento</Label>
          <Input
            type="date"
            value={dateInputFormat(fechaVencimientoSeguro)}
            onChange={(e) => setFechaVencimientoSeguro(new Date(e))}
          />
        </Box>
        <Button
          m={2}
          type="submit"
          disabled={loading}
          sx={{ alignSelf: "end" }}
        >
          Agregar
        </Button>
      </Flex>
    </Modal>
  );
}

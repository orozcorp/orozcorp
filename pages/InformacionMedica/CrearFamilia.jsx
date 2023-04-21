import Modal from "@/components/atoms/Modal";
import {
  Heading,
  Flex,
  Input,
  Label,
  Button,
  Box,
  Checkbox,
  Alert,
  Text,
} from "@theme-ui/components";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { gql, useMutation } from "@apollo/client";
import { useGlobalData } from "@/components/context/GlobalContext";

const MUTATION = gql`
  mutation Mutation($idUser: String!, $familia: FamiliaInput!) {
    insertUserFamilia(idUser: $idUser, familia: $familia) {
      code
      message
      success
    }
  }
`;

export default function CrearFamilia({ display, setDisplay }) {
  const { data: session, status } = useSession();
  const { setAlert } = useGlobalData();
  const initialValues = {
    name: "",
    administradorId: session?.user?.id,
    administradorName: session?.user?.name,
    nuclear: false,
  };
  const [values, setValues] = useState(initialValues);
  const [insertFamilia, { loading, error }] = useMutation(MUTATION, {
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
      <Heading as="h2">Crear familia</Heading>
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
          insertFamilia();
        }}
      >
        <Flex sx={{ flexFlow: "row wrap", justifyContent: "space-between" }}>
          <Box m={1}>
            <Label>Nombre</Label>
            <Input
              type="text"
              value={values.name}
              onChange={(e) => {
                setValues({
                  ...values,
                  name: e.currentTarget.value.toUpperCase(),
                });
              }}
            />
          </Box>
          <Flex
            sx={{
              flexFlow: "row wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
            m={1}
            my={2}
            onChange={({ currentTarget: { checked } }) =>
              setValues({ ...values, nuclear: checked })
            }
          >
            <Text mr={3}>Familia nuclear</Text>
            <Checkbox
              checked={values.nuclear}
              onChange={({ currentTarget: { checked } }) =>
                setValues({ ...values, nuclear: checked })
              }
            />
          </Flex>
          {Object.values(values).every((prop) => prop !== "") && (
            <Button disabled={loading}>
              {loading ? <Spinner /> : "Guardar familia"}
            </Button>
          )}
        </Flex>
        {error && <Alert variant="error">{error}</Alert>}
      </Flex>
    </Modal>
  );
}

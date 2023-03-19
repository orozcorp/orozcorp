import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { Flex, Heading, Label, Input, Button, Textarea, Box } from "theme-ui";
import { useGlobalData } from "../context/GlobalContext";
import useLocalStorage from "../hooks/useLocalData";

const MUTATION = gql`
  mutation SendContact($email: String!, $name: String!, $message: String!) {
    sendContact(email: $email, name: $name, message: $message) {
      code
      message
      success
      data
    }
  }
`;

export default function Contactanos() {
  const [enviadoMensaje, setEnviadoMensaje] = useState(false);
  const [sentMessage, setSentMessage] = useLocalStorage("sentMessage", false);
  const [sentMessageId, setSentMessageID] = useLocalStorage(
    "setMessageId",
    null
  );
  const initial = {
    name: "",
    email: "",
    message: "",
  };
  useEffect(() => {
    if (!sentMessage) {
      return;
    }
    setEnviadoMensaje(true);
  }, [sentMessage]);
  const [values, setValues] = useState(initial);
  const { setAlert } = useGlobalData();
  const [sendReport, { loading }] = useMutation(MUTATION, {
    variables: { ...values },
    onCompleted: ({ sendContact }) => {
      setValues(initial);
      setAlert({
        message: "Se guardó tu informacion",
        display: "box",
        variant: "orange",
      });
      setSentMessage(true);
      setSentMessageID(sendContact.data);
    },
  });
  return (
    <Flex
      mt={4}
      p={3}
      sx={{
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      {enviadoMensaje ? (
        <Heading
          mt={4}
          mb={2}
          as="h1"
          sx={{
            fontSize: ["36px", "50px"],
            width: ["100%", "60%"],
            textAlign: "center",
          }}
        >
          Ya recibimos tu información estaremos contactándonos pronto
        </Heading>
      ) : (
        <>
          <Heading mt={4} mb={2} as="h1" sx={{ fontSize: ["36px", "50px"] }}>
            Contáctanos
          </Heading>
          <Flex
            my={2}
            as="form"
            p={2}
            sx={{
              width: ["100%", "60%"],
              flexFlow: "column nowrap",
              justifyContent: "center",
              alignContent: "stretch",
              alignItems: "center",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              sendReport();
            }}
          >
            <Flex sx={{ flexFlow: "row wrap" }}>
              <Box sx={{ width: ["100%", "200px"] }} m={2}>
                <Label>Nombre</Label>
                <Input
                sx={{ width: ["100%", "200px"] }}
                  type="text"
                  value={values.name}
                  aria-label="name"
                  onChange={(e) =>
                    setValues({
                      ...values,
                      name: e.currentTarget.value.toUpperCase(),
                    })
                  }
                />
              </Box>
              <Box sx={{ width: ["100%", "200px"] }} m={2}>
                <Label>Email</Label>
                <Input
                sx={{ width: ["100%", "200px"] }}
                  type="email"
                  value={values.email}
                  aria-label="email"
                  onChange={(e) =>
                    setValues({
                      ...values,
                      email: e.currentTarget.value.toUpperCase(),
                    })
                  }
                />
              </Box>
            </Flex>
            <Box sx={{ width: ["200px", "400px"] }} m={2}>
              <Label>Mensaje</Label>
              <Textarea
              p={[2,0]}
              sx={{ width: ["100%", "200px"] }}
                value={values.message}
                aria-label="message"
                onChange={(e) =>
                  setValues({ ...values, message: e.currentTarget.value })
                }
              />
            </Box>
            <Button type="submit" disabled={loading}>
              Enviar
            </Button>
          </Flex>
        </>
      )}
    </Flex>
  );
}

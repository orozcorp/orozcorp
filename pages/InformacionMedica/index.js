import { gql, useQuery } from "@apollo/client";
import { Flex, Heading } from "@theme-ui/components";
import { useSession } from "next-auth/react";
import { FamiliarContainer } from "../../components/context/FamiliarContext";

const QUERY = gql`
  query GetUserProfile($idUser: String!) {
    getUserProfile(idUser: $idUser) {
      _id
      profile {
        alergias
        caratulaSeguro
        enfermedades
        estatura
        fechaNacimiento
        lastName
        medicamentos {
          _id
          dosis
          active
          fechaFin
          fechaInicio
          frecuencia
          medicoId
          nombre
          observaciones
          recetadaPor
        }
        medicos {
          _id
          apellido
          direccion
          especialidad
          nombre
          telefonos
        }
        name
        peso
        tarjetaSeguro
      }
    }
  }
`;

export default function InformacionMedica() {
  const { data: session, status } = useSession();
  const idUser = session?.user?.id;
  const { data, loading } = useQuery(QUERY, {
    variables: { idUser },
  });
  return (
    <FamiliarContainer>
      <Flex
        sx={{
          flexFlow: "column nowrap",
          justifyContent: "flex-start",
          alignContent: "center",
          alignItems: "flex-start",
        }}
        my={2}
        p={2}
      >
        <Heading as="h2" sx={{ textDecoration: "red underline" }}>
          Información Médica
        </Heading>
      </Flex>
    </FamiliarContainer>
  );
}

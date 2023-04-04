import { gql, useQuery } from "@apollo/client";
import { Flex, Heading, Text, Button } from "@theme-ui/components";
import { format_date } from "../../../lib/helpers/formatters";
import { useMemo, useState } from "react";
import { uniqueId } from "lodash";
import AgregarTuSeguro from "./AgregarTuSeguro";

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
        tipoSangre
        fechaVencimientoSeguro
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
        minor
      }
    }
  }
`;

function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  const months = (today.getMonth() + 12 - birthDate.getMonth()) % 12;
  return { years: age, months: months };
}
export default function Informacion({ user }) {
  const { data, loading, error } = useQuery(QUERY, {
    variables: { idUser: user },
  });
  const [displaySeguro, setDisplaySeguro] = useState("none");
  const miInfo = data?.getUserProfile?.profile;
  const age = useMemo(
    () => calculateAge(miInfo?.fechaNacimiento),
    [miInfo?.fechaNacimiento]
  );
  const seguroVencido = useMemo(
    () => new Date(miInfo?.fechaVencimientoSeguro) < new Date(),
    [miInfo?.fechaVencimientoSeguro]
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Flex m={2} p={2} sx={{ flexFlow: "column nowrap" }}>
      <AgregarTuSeguro
        user={data?.getUserProfile?._id}
        display={displaySeguro}
        setDisplay={setDisplaySeguro}
      />
      <Flex
        my={2}
        sx={{
          flexFlow: "row wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Heading as="h3">
          {miInfo.name} {miInfo.lastName}
          <small style={{ margin: "12px" }}> Info </small>
        </Heading>
        {miInfo.minor ? (
          <Button variant="outline">Agregar estatura y peso</Button>
        ) : (
          <Button variant="outline">Agregar Peso</Button>
        )}
        <Button variant="outline">Editar informacion</Button>
      </Flex>
      <Flex my={2} sx={{ flexFlow: "row wrap", alignItems: "flex-start" }}>
        <Flex
          sx={{
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "flex",
          }}
          m={2}
        >
          <Text sx={{ fontWeight: "bold" }}>Peso:</Text>
          <Text> {miInfo.peso} kg</Text>
        </Flex>
        <Flex
          m={2}
          sx={{
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text sx={{ fontWeight: "bold" }}>Estatura:</Text>
          <Text> {miInfo.estatura} cm</Text>
        </Flex>
        <Flex
          m={2}
          sx={{
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text sx={{ fontWeight: "bold" }}>Tipo de Sangre:</Text>
          <Text> {miInfo.tipoSangre}</Text>
        </Flex>
        <Flex
          m={2}
          sx={{
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text sx={{ fontWeight: "bold" }}>Fecha de Nacimiento: </Text>{" "}
          <Text> {format_date(miInfo.fechaNacimiento)} </Text>
          <Text>
            {age.years} años {age.months} meses
          </Text>
        </Flex>
        <Flex
          m={2}
          sx={{
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text sx={{ fontWeight: "bold" }}>Alergias: </Text>
          {miInfo.alergias?.length > 0 && (
            <>
              {miInfo.alergias.map((alergia) => (
                <Text m={1} key={uniqueId()}>
                  {alergia}
                </Text>
              ))}
            </>
          )}
        </Flex>
        <Flex
          m={2}
          sx={{
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text sx={{ fontWeight: "bold" }}>Enfermedades: </Text>
          {miInfo.enfermedades?.length > 0 && (
            <>
              {miInfo.enfermedades.map((enfermedad) => (
                <Text m={1} key={uniqueId()}>
                  {enfermedad}
                </Text>
              ))}
            </>
          )}
        </Flex>
      </Flex>
      <Heading as="h4">Seguro</Heading>
      <Flex my={2} sx={{ flexFlow: "column nowrap", alignItems: "flex-start" }}>
        <Flex my={1} sx={{ flexFlow: "row wrap", alignItems: "flex-start" }}>
          {!miInfo.tarjetaSeguro && (
            <Button
              variant="danger"
              m={1}
              onClick={() => setDisplaySeguro("box")}
            >
              Agregar tu seguro
            </Button>
          )}
          {seguroVencido && (
            <Button variant="danger" m={1}>
              Tu seguro ha vencido Actualizalo
            </Button>
          )}
        </Flex>
        {miInfo.tarjetaSeguro && (
          <Flex my={1} sx={{ flexFlow: "row wrap", alignItems: "flex-start" }}>
            <Box>
              <Image
                src={miInfo.tarjetaSeguro}
                alt="Tarjeta Seguro"
                width={300}
                height={300}
              />
            </Box>
            <Box>
              <a href={miInfo.caratualSeguro} target="_blank">
                {" "}
                Descargar Caratula
              </a>
            </Box>
            <Box>
              <Text>Vence: {format_date(miInfo.fechaVencimientoSeguro)}</Text>
            </Box>
          </Flex>
        )}
      </Flex>
      <Heading as="h4">Medicamentos</Heading>
      <Flex
        my={2}
        sx={{ flexFlow: "row wrap", alignItems: "flex-start" }}
      ></Flex>
      <Heading as="h4">Médicos</Heading>
      <Flex
        my={2}
        sx={{ flexFlow: "row wrap", alignItems: "flex-start" }}
      ></Flex>
    </Flex>
  );
}

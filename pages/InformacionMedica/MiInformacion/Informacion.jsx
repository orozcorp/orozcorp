import { gql, useQuery } from "@apollo/client";
import { Flex, Heading, Text, Button, Badge } from "@theme-ui/components";
import { format_date } from "../../../lib/helpers/formatters";
import { useMemo, useState } from "react";
import { uniqueId } from "lodash";

import Seguro from "./Seguro";
import Medicamentos from "./Medicamentos";
import Medicos from "./Medicos";
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
        rfc
        curp
        medicamentos {
          _id
          dosis
          fechaFin
          fechaInicio
          frecuencia
          medicoId
          nombre
          observaciones
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
export default function Informacion({ user, familia }) {
  const { data, loading, error } = useQuery(QUERY, {
    variables: { idUser: user },
  });
  const [display, setDisplay] = useState("");
  const miInfo = useMemo(() => data?.getUserProfile?.profile, [data]);

  const age = useMemo(
    () => calculateAge(miInfo?.fechaNacimiento),
    [miInfo?.fechaNacimiento]
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Flex p={2} sx={{ flexFlow: "column nowrap" }}>
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
          <Button m={1} variant="outline">
            Agregar estatura y peso
          </Button>
        ) : (
          <Button m={1} variant="outline">
            Agregar Peso
          </Button>
        )}
        <Button m={1} variant="outline">
          Editar informacion
        </Button>
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
          <Text sx={{ fontWeight: "bold" }}>RFC:</Text>
          <Text> {miInfo.rfc}</Text>
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
          <Text sx={{ fontWeight: "bold" }}>CURP:</Text>
          <Text> {miInfo.curp}</Text>
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
                <Badge m={1} key={uniqueId()}>
                  {enfermedad}
                </Badge>
              ))}
            </>
          )}
        </Flex>
      </Flex>
      <Flex
        my={2}
        sx={{
          flexFlow: "row wrap",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Heading
          as="h4"
          onClick={() => setDisplay("Seguro")}
          mx={2}
          sx={{
            textDecoration: "underline",
            fontWeight: display === "Seguro" ? "bold" : "normal",
            fontSize: display === "Seguro" ? "1.5em" : "1em",
          }}
        >
          Seguro
        </Heading>
        <Heading
          onClick={() => setDisplay("Medicamentos")}
          as="h4"
          mx={2}
          sx={{
            textDecoration: "underline",
            fontWeight: display === "Medicamentos" ? "bold" : "normal",
            fontSize: display === "Medicamentos" ? "1.5em" : "1em",
          }}
        >
          Medicamentos
        </Heading>
        <Heading
          onClick={() => setDisplay("Medicos")}
          as="h4"
          mx={2}
          sx={{
            textDecoration: "underline",
            fontWeight: display === "Medicos" ? "bold" : "normal",
            fontSize: display === "Medicos" ? "1.5em" : "1em",
          }}
        >
          Médicos
        </Heading>
      </Flex>
      {{
        Seguro: () => (
          <Seguro
            user={data?.getUserProfile?._id}
            miInfo={miInfo}
            query={QUERY}
          />
        ),
        Medicamentos: () => (
          <Medicamentos
            user={data?.getUserProfile?._id}
            miInfo={miInfo}
            query={QUERY}
          />
        ),
        Medicos: () => (
          <Medicos
            user={data?.getUserProfile?._id}
            miInfo={miInfo}
            query={QUERY}
            familia={familia}
          />
        ),
      }[display]?.()}
    </Flex>
  );
}

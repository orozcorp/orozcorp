import { gql, useQuery } from "@apollo/client";
import { Flex, Heading, Text, Button, Badge } from "@theme-ui/components";
import { format_date } from "../../../lib/helpers/formatters";
import { useMemo, useState } from "react";
import { uniqueId } from "lodash";

import Seguro from "./Seguro";
import Medicamentos from "./Medicamentos";
import Medicos from "./Medicos";
import HistorialDePeso from "./HistorialDePeso";
import HistorialMedico from "./HistorialMedico";
import AgregarPeso from "./AgregarPeso";
const QUERY = gql`
  query GetUserProfile($idUser: String!, $oldMed: Boolean!) {
    getUserProfile(idUser: $idUser, oldMed: $oldMed) {
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
        historialPeso {
          _id
          user
          fecha
          peso
          estatura
        }
        historialMedico {
          _id
          fecha
          descripcion
          medicoName
          medicoId
        }
        medicamentos {
          _id
          dosis
          fechaFin
          fechaInicio
          frecuencia
          medicoName
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
  const [oldMed, setOldMed] = useState(false);
  const { data, loading, error } = useQuery(QUERY, {
    variables: { idUser: user, oldMed },
  });
  const [display, setDisplay] = useState("");
  const [displayPeso, setDisplayPeso] = useState("none");
  const miInfo = useMemo(() => data?.getUserProfile?.profile, [data]);

  const age = useMemo(
    () => calculateAge(miInfo?.fechaNacimiento),
    [miInfo?.fechaNacimiento]
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Flex p={2} sx={{ flexFlow: "column nowrap" }}>
      <AgregarPeso
        display={displayPeso}
        setDisplay={setDisplayPeso}
        userInfo={{
          _id: user,
          profile: miInfo,
        }}
        minor={miInfo.minor}
        query={QUERY}
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
        <Button m={1} variant="outline" onClick={() => setDisplayPeso("box")}>
          Agregar peso {miInfo.minor ? "y estatura" : ""}
        </Button>
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
          m={2}
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
          m={2}
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
          m={2}
          sx={{
            textDecoration: "underline",
            fontWeight: display === "Medicos" ? "bold" : "normal",
            fontSize: display === "Medicos" ? "1.5em" : "1em",
          }}
        >
          Médicos
        </Heading>
        <Heading
          onClick={() => setDisplay("Historial")}
          as="h4"
          m={2}
          sx={{
            textDecoration: "underline",
            fontWeight: display === "Historial" ? "bold" : "normal",
            fontSize: display === "Historial" ? "1.5em" : "1em",
          }}
        >
          Historial Médico
        </Heading>
        <Heading
          onClick={() => setDisplay("HistorialPeso")}
          as="h4"
          m={2}
          sx={{
            textDecoration: "underline",
            fontWeight: display === "HistorialPeso" ? "bold" : "normal",
            fontSize: display === "HistorialPeso" ? "1.5em" : "1em",
          }}
        >
          Historial de Peso {miInfo.minor ? "y Estatura" : ""}
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
            oldMedicamento={{
              oldMed,
              setOldMed,
            }}
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
        Historial: () => (
          <HistorialMedico
            user={data?.getUserProfile?._id}
            miInfo={miInfo}
            query={QUERY}
            familia={familia}
          />
        ),
        HistorialPeso: () => (
          <HistorialDePeso
            user={data?.getUserProfile?._id}
            miInfo={miInfo}
            query={QUERY}
          />
        ),
      }[display]?.()}
    </Flex>
  );
}

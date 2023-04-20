import { gql, useQuery } from "@apollo/client";
import { Flex, Heading, Box, Text, Badge } from "@theme-ui/components";
import { useMemo } from "react";
import {
  format_date,
  format_dateMed,
  calculateAge,
} from "../../../lib/helpers/formatters";
const QUERY = gql`
  query GetInformacionForDoctors($idUser: String!) {
    getInformacionForDoctors(idUser: $idUser) {
      _id
      alergias
      enfermedades
      estatura
      estudios {
        _id
        descripcion
        estudio
        fecha
        medicoName
      }
      familiares {
        _id
        alergias
        enfermedades
        name
      }
      fechaNacimiento
      historialMedico {
        _id
        descripcion
        fecha
        medicoName
      }
      lastName
      medicamentos {
        _id
        dosis
        fechaInicio
        fechaFin
        frecuencia
        medicoName
        nombre
      }
      name
      peso
      tipoSangre
    }
  }
`;

export default function MiInformacionPDF({ user, setDisplay }) {
  const { loading, error, data } = useQuery(QUERY, {
    variables: { idUser: user },
  });
  console.log(data);
  const miInfo = data?.getInformacionForDoctors;
  const age = useMemo(
    () => calculateAge(miInfo?.fechaNacimiento),
    [miInfo?.fechaNacimiento]
  );
  const sortedHistorialMedico = useMemo(() => {
    const historialCopy = [...(miInfo?.historialMedico || [])];
    return historialCopy.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }, [miInfo]);
  const sortedHistorialEstudios = useMemo(() => {
    const historialCopy = [...(miInfo?.estudios || [])];
    return historialCopy.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  }, [miInfo]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Flex id="pdf-content" p={2} sx={{ flexFlow: "column nowrap" }}>
      <Flex
        my={2}
        sx={{
          flexFlow: "row wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Heading as="h3">
          {miInfo.name} {miInfo.lastName} - INFORMACION MEDICA
        </Heading>
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
              {miInfo.alergias.map((alergia, index) => (
                <Text m={1} key={index}>
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
              {miInfo.enfermedades.map((enfermedad, index) => (
                <Text m={1} key={index}>
                  {enfermedad}
                </Text>
              ))}
            </>
          )}
        </Flex>
      </Flex>
      <Flex m={2} sx={{ flexFlow: "column nowrap", overflowX: "auto" }}>
        <Heading as="h4">Historial Médico</Heading>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Descripcion</th>
              <th>Medico</th>
            </tr>
          </thead>
          <tbody>
            {sortedHistorialMedico?.map((peso) => (
              <tr key={peso._id}>
                <td>{format_date(peso.fecha)}</td>
                <td>{peso.descripcion}</td>
                <td>{peso.medicoName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Flex>
      <Box sx={{ overflowX: "auto" }} my={2}>
        <Heading as="h4">Historial Medicamentos</Heading>
        <table style={{ marginTop: "24px", marginBotton: "60px" }}>
          <thead>
            <tr>
              <th>Fechas</th>
              <th>Medicamento</th>
              <th>Dosis</th>
              <th>Frecuencia</th>
              <th>Observaciones</th>
              <th>Recetada por</th>
            </tr>
          </thead>
          <tbody>
            {miInfo?.medicamentos?.map((medicamento) => (
              <tr key={medicamento._id}>
                <td>{`${format_dateMed(
                  medicamento.fechaInicio
                )} - ${format_dateMed(medicamento.fechaFin)} `}</td>
                <td>{medicamento.nombre}</td>
                <td>{medicamento.dosis}</td>
                <td>{medicamento.frecuencia}</td>
                <td>{medicamento.observaciones}</td>
                <td>{medicamento.medicoName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
      <Flex m={2} sx={{ flexFlow: "column nowrap", overflowX: "auto" }}>
        <Heading as="h4">Historial Estudios</Heading>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Descripcion</th>
              <th>Medico</th>
              <th>Descargar</th>
            </tr>
          </thead>
          <tbody>
            {sortedHistorialEstudios?.map((peso) => (
              <tr key={peso._id}>
                <td>{format_date(peso.fecha)}</td>
                <td>{peso.descripcion}</td>
                <td>{peso.medicoName}</td>
                <td>
                  <a href={peso.estudio} target="_blank">
                    Descargar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Flex>
      <Flex m={2} sx={{ flexFlow: "column nowrap", overflowX: "auto" }}>
        <Heading as="h4">Familiares</Heading>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Alergias</th>
              <th>Enfermedades</th>
            </tr>
          </thead>
          <tbody>
            {miInfo?.familiares?.map((familiar) => (
              <tr key={familiar._id}>
                <td>{familiar.name}</td>
                <td>
                  {familiar.alergias?.length > 0 && (
                    <>
                      {familiar.alergias.map((alergia, index) => (
                        <Text m={1} key={index}>
                          {alergia}
                        </Text>
                      ))}
                    </>
                  )}
                </td>
                <td>
                  {familiar.enfermedades?.length > 0 && (
                    <>
                      {familiar.enfermedades.map((enfermedad, index) => (
                        <Text m={1} key={index}>
                          {enfermedad}
                        </Text>
                      ))}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Flex>
    </Flex>
  );
}

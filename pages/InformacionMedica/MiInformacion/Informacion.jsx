import { gql, useQuery } from "@apollo/client";
import {
  Flex,
  Heading,
  Text,
  Button,
  Badge,
  Spinner,
  Box,
  Alert,
} from "@theme-ui/components";
import Image from "next/image";
import { calculateAge, format_date } from "../../../lib/helpers/formatters";
import { useMemo, useState } from "react";
import Seguro from "./Seguro";
import Medicamentos from "./Medicamentos";
import Medicos from "./Medicos";
import HistorialDePeso from "./HistorialDePeso";
import HistorialMedico from "./HistorialMedico";
import AgregarPeso from "./AgregarPeso";
import EditarInformacion from "./EditarInformacionModal";
import Estudios from "./Estudios";
import MiInformacionPDF from "./MiInformacionPDF";
const QUERY = gql`
  query GetUserProfile($idUser: String!, $oldMed: Boolean!) {
    getUserProfile(idUser: $idUser, oldMed: $oldMed) {
      _id
      email
      profile {
        alergias
        picture
        caratulaSeguro
        enfermedades
        estatura
        fechaNacimiento
        lastName
        telefono
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
        estudios {
          _id
          fecha
          descripcion
          medicoName
          medicoId
          estudio
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
          telefonos {
            _id
            telefono
            tipo
          }
          cabecera
        }
        name
        peso
        tarjetaSeguro
        minor
      }
    }
  }
`;

export default function Informacion({ user, familia }) {
  const [oldMed, setOldMed] = useState(false);
  const { data, loading, error } = useQuery(QUERY, {
    variables: { idUser: user, oldMed },
  });
  const [display, setDisplay] = useState("");
  const [displayPeso, setDisplayPeso] = useState("none");
  const [displayEdit, setDisplayEdit] = useState("none");
  const miInfo = useMemo(() => data?.getUserProfile?.profile, [data]);
  const age = useMemo(
    () => calculateAge(miInfo?.fechaNacimiento),
    [miInfo?.fechaNacimiento]
  );
  const [displayEnvInfo, setDisplayEnvInfo] = useState(false);
  const downloadPDF = async () => {
    setDisplayEnvInfo(true);
    setTimeout(async () => {
      const element = document.getElementById("pdf-content");
      if (!element) return console.log("No se encontro el elemento");
      const options = {
        filename: `${miInfo.name} ${miInfo.lastName} - Información Médica.pdf`,
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: {
          avoid: [
            "#historialMedico",
            "#historialMedicamentos",
            "#historialEstudios",
            "#Familiares",
          ],
        },
      };
      const html2pdf = (await import("html2pdf.js")).default;

      html2pdf()
        .from(element)
        .set(options)
        .save()
        .then(() => {
          setDisplayEnvInfo(false);
        });
    }, 500); // Adjust the delay as needed (e.g., 500 ms)
  };
  if (loading)
    return (
      <Flex
        sx={{
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spinner />
      </Flex>
    );
  if (error)
    return (
      <Flex
        sx={{
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Alert variant="error">Error: {error.message}</Alert>
      </Flex>
    );
  return (
    <Flex
      sx={{
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
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
      <EditarInformacion
        display={displayEdit}
        setDisplay={setDisplayEdit}
        query={QUERY}
        user={{
          _id: user,
          email: data?.getUserProfile?.email,
          ...miInfo,
        }}
      />
      <Flex
        sx={{
          flexFlow: "row wrap",
          width: ["100%", "80%"],
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Flex
          sx={{
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Flex
            sx={{
              flexFlow: "column nowrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Flex
              my={[3, 2]}
              sx={{
                flexFlow: "row wrap",
                justifyContent: "space-around",
                alignItems: ["center", "flex-end"],
              }}
            >
              <Button m={1} onClick={() => setDisplayPeso("box")}>
                Agregar peso {miInfo.minor ? "y estatura" : ""}
              </Button>
              <Button m={1} onClick={() => setDisplayEdit("box")}>
                Editar informacion
              </Button>

              <Button
                m={1}
                onClick={downloadPDF}
                sx={{ alignSelf: "flex-end", backgroundColor: "#003471" }}
                disabled={displayEnvInfo}
              >
                {displayEnvInfo ? <Spinner /> : "Descargar mi informacion"}
              </Button>
              {displayEnvInfo && (
                <MiInformacionPDF user={user} setDisplay={setDisplayEnvInfo} />
              )}
            </Flex>
            <Flex
              sx={{
                flexFlow: "column nowrap",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                width: ["90%", "500px"],
                gap: "1em",
                borderRadius: "12px",
                p: 2,
                backgroundColor: "#0093E9",
                backgroundImage:
                  "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
              }}
            >
              <Flex
                sx={{
                  flexFlow: "row wrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {miInfo.picture ? (
                  <Image
                    src={miInfo.picture}
                    alt="profile picture"
                    width={80}
                    height={80}
                    style={{
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      border: "1px solid rgb(7 89 133)",
                      boxShadow: "6px 6px 3px 0px rgba(7, 89, 133,0.75)",
                    }}
                  />
                )}
                <Flex
                  sx={{
                    flexFlow: "column nowrap",
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    flex: 1,
                    mx: 2,
                  }}
                  p={2}
                >
                  <Heading as="h2" sx={{ color: "#fff" }}>
                    {miInfo.name} {miInfo.lastName}
                  </Heading>
                </Flex>
              </Flex>
              <Flex
                sx={{
                  flexFlow: "column nowrap",
                  width: "100%",
                }}
              >
                <Flex
                  sx={{
                    flexFlow: "row wrap",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Flex
                    m={2}
                    sx={{
                      flexFlow: "column nowrap",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text sx={{ fontWeight: "bold", color: "white" }}>
                      Tipo de Sangre:
                    </Text>
                    <Text sx={{ fontSize: "20px", color: "white" }}>
                      {" "}
                      {miInfo.tipoSangre}
                    </Text>
                  </Flex>
                  <Flex
                    m={2}
                    sx={{
                      flexFlow: "column nowrap",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "flex-end",
                    }}
                  >
                    <Text sx={{ fontWeight: "bold", color: "white" }}>
                      Fecha de Nacimiento:{" "}
                    </Text>{" "}
                    <Text sx={{ color: "white" }}>
                      {" "}
                      {format_date(miInfo.fechaNacimiento)}{" "}
                    </Text>
                    <Text sx={{ color: "white" }}>
                      {age.years} años{" "}
                      <>{age.years < 3 && <>{age.months} meses</>}</>
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  sx={{
                    flexFlow: "row wrap",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Flex
                    sx={{
                      flexFlow: "column nowrap",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "flex",
                    }}
                    m={2}
                  >
                    <Text sx={{ fontWeight: "bold", color: "white" }}>
                      Peso:
                    </Text>
                    <Text sx={{ color: "white" }}> {miInfo.peso} kg</Text>
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
                    <Text sx={{ fontWeight: "bold", color: "white" }}>
                      Estatura:
                    </Text>
                    <Text sx={{ color: "white" }}> {miInfo.estatura} cm</Text>
                  </Flex>
                </Flex>
                <Flex
                  sx={{
                    flexFlow: "row wrap",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Flex
                    m={2}
                    sx={{
                      flexFlow: "column nowrap",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text sx={{ fontWeight: "bold", color: "white" }}>
                      Alergias:{" "}
                    </Text>
                    {miInfo.alergias?.length > 0 && (
                      <>
                        {miInfo.alergias.map((alergia, index) => (
                          <Badge m={1} key={index}>
                            {alergia}
                          </Badge>
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
                      alignItems: "flex-end",
                    }}
                  >
                    <Text sx={{ fontWeight: "bold", color: "white" }}>
                      Enfermedades:{" "}
                    </Text>
                    {miInfo.enfermedades?.length > 0 && (
                      <>
                        {miInfo.enfermedades.map((enfermedad, index) => (
                          <Badge m={1} key={index}>
                            {enfermedad}
                          </Badge>
                        ))}
                      </>
                    )}
                  </Flex>
                </Flex>
                <Flex
                  sx={{
                    flexFlow: "row wrap",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Flex
                    m={2}
                    sx={{
                      flexFlow: "column nowrap",
                      justifyContent: "flex-start",
                      alignContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text sx={{ fontWeight: "bold", color: "white" }}>
                      RFC:
                    </Text>
                    <Text sx={{ color: "white" }}> {miInfo.rfc}</Text>
                  </Flex>
                  <Flex
                    m={2}
                    sx={{
                      flexFlow: "column nowrap",
                      justifyContent: "flex-end",
                      alignContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    <Text sx={{ fontWeight: "bold", color: "white" }}>
                      CURP:
                    </Text>
                    <Text sx={{ color: "white" }}> {miInfo.curp}</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            my={4}
            sx={{
              flexFlow: "row wrap",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Heading
              as="h4"
              onClick={() => setDisplay("Seguro")}
              m={2}
              sx={{
                backgroundColor: display === "Seguro" ? "#003471" : "white",
                color: display === "Seguro" ? "white" : "#003471",
                border: "1px solid #003471",
                borderRadius: "12px",
                fontWeight: display === "Seguro" ? "bold" : "normal",
                fontSize: "1em",
              }}
              p={2}
            >
              Seguro
            </Heading>
            <Heading
              onClick={() => setDisplay("Medicamentos")}
              as="h4"
              m={2}
              sx={{
                backgroundColor:
                  display === "Medicamentos" ? "#003471" : "white",
                color: display === "Medicamentos" ? "white" : "#003471",
                border: "1px solid #003471",
                borderRadius: "12px",
                fontWeight: display === "Medicamentos" ? "bold" : "normal",
                fontSize: "1em",
                p: 2,
              }}
            >
              Medicamentos
            </Heading>
            <Heading
              onClick={() => setDisplay("Medicos")}
              as="h4"
              m={2}
              sx={{
                backgroundColor: display === "Medicos" ? "#003471" : "white",
                color: display === "Medicos" ? "white" : "#003471",
                border: "1px solid #003471",
                borderRadius: "12px",
                fontWeight: display === "Medicos" ? "bold" : "normal",
                fontSize: "1em",
                p: 2,
              }}
            >
              Médicos
            </Heading>
            <Heading
              onClick={() => setDisplay("Historial")}
              as="h4"
              m={2}
              sx={{
                backgroundColor: display === "Historial" ? "#003471" : "white",
                color: display === "Historial" ? "white" : "#003471",
                border: "1px solid #003471",
                borderRadius: "12px",
                fontWeight: display === "Historial" ? "bold" : "normal",
                fontSize: "1em",
                p: 2,
              }}
            >
              Historial Médico
            </Heading>
            <Heading
              onClick={() => setDisplay("HistorialPeso")}
              as="h4"
              m={2}
              sx={{
                backgroundColor:
                  display === "HistorialPeso" ? "#003471" : "white",
                color: display === "HistorialPeso" ? "white" : "#003471",
                border: "1px solid #003471",
                borderRadius: "12px",
                fontWeight: display === "HistorialPeso" ? "bold" : "normal",
                fontSize: "1em",
                p: 2,
              }}
            >
              Historial de Peso {miInfo.minor ? "y Estatura" : ""}
            </Heading>
            <Heading
              onClick={() => setDisplay("Estudios")}
              as="h4"
              m={2}
              sx={{
                backgroundColor: display === "Estudios" ? "#003471" : "white",
                color: display === "Estudios" ? "white" : "#003471",
                border: "1px solid #003471",
                borderRadius: "12px",
                fontWeight: display === "Estudios" ? "bold" : "normal",
                fontSize: "1em",
                p: 2,
              }}
            >
              Estudios
            </Heading>
          </Flex>
          <Box mb={6}>
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
                />
              ),
              HistorialPeso: () => (
                <HistorialDePeso
                  user={data?.getUserProfile?._id}
                  miInfo={miInfo}
                  query={QUERY}
                />
              ),
              Estudios: () => (
                <Estudios
                  user={data?.getUserProfile?._id}
                  miInfo={miInfo}
                  query={QUERY}
                />
              ),
            }[display]?.()}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

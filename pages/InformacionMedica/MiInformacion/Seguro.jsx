import { Flex, Text, Button, Box } from "@theme-ui/components";
import { useMemo, useState } from "react";
import { format_date } from "../../../lib/helpers/formatters";
import AgregarTuSeguro from "./AgregarTuSeguro";
import Image from "next/image";
export default function Seguro({ user, miInfo }) {
  const [displaySeguro, setDisplaySeguro] = useState("none");
  const seguroVencido = useMemo(
    () => new Date(miInfo?.fechaVencimientoSeguro) < new Date(),
    [miInfo?.fechaVencimientoSeguro]
  );
  return (
    <>
      <AgregarTuSeguro
        user={user}
        display={displaySeguro}
        setDisplay={setDisplaySeguro}
      />
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
          <Flex
            my={1}
            sx={{
              flexFlow: "column nowrap",
              alignItems: "center",
              justifyContent: "center",
            }}
            variant="styles.boxGlass"
          >
            <Box m={2}>
              <Image
                src={miInfo.tarjetaSeguro}
                alt="Tarjeta Seguro"
                width={300}
                height={250}
                style={{ borderRadius: "30px" }}
              />
            </Box>
            <Box m={2}>
              <Button variant="outline">
                <a
                  href={miInfo.caratulaSeguro}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Descargar caratula "
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Descargar Caratula
                </a>
              </Button>
            </Box>
            <Box m={2}>
              <Text>Vence: {format_date(miInfo.fechaVencimientoSeguro)}</Text>
            </Box>
          </Flex>
        )}
      </Flex>
    </>
  );
}

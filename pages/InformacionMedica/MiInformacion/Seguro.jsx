import { Flex, Text, Button, Box } from "@theme-ui/components";
import { useMemo, useState } from "react";
import { format_date } from "../../../lib/helpers/formatters";
import AgregarTuSeguro from "./AgregarTuSeguro";
import Image from "next/image";
export default function Seguro({ user, miInfo, query }) {
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
        query={query}
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
            <Button
              variant="danger"
              m={1}
              onClick={() => setDisplaySeguro("box")}
            >
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
              <Button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <a
                  href={miInfo.caratulaSeguro}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Descargar caratula "
                  style={{ textDecoration: "none", color: "#fff" }}
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

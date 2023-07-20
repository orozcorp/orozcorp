import { Flex, Heading, Text, Box } from "@theme-ui/components";
import dynamic from "next/dynamic";
const Sec2Box = dynamic(() => import("./Sec2Box"), { ssr: false });
export default function Section2() {
  return (
    <Flex
      mt={4}
      id="crearProductos"
      sx={{
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Heading
        as="h1"
        sx={{ fontSize: ["30px", "48px"], textAlign: "center", width: "60%" }}
        my={3}
      >
        ¡Prepárate para aterrizar tu idea con nuestro método infalible!
      </Heading>
      <Flex
        my={3}
        sx={{
          flexFlow: "row wrap",
          justifyContent: "space-around",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Sec2Box
          title={"Descubrimiento"}
          text="Nuestros estrategas trabajan para definir el problema, hallar
            oportunidades de negocios y usuarios meta. Ayúdamos a transformar tu
            visión en el producto digital planeado"
        />
        <Sec2Box
          title={"Diseño relámpago"}
          text="Un proceso por paso para resolver problemas gigantescos, crear
            nuevos productos, mejorar productos existentes. Comprimimos meses de
            trabajo en pocas semanas, resultando en un prototipo de alta
            fidelidad y probado por usuarios reales."
        />
        <Sec2Box
          title={"Versión 1"}
          text="Desarrollo eficiente y veloz de un nuevo producto digital con un
            equipo dedicado a tu proyecto. Con un equipo multidisciplinario para
            un resultado óptimo."
        />
        <Sec2Box
          title={"Equipo de desarrollo"}
          text="Un equipo dedicado de mercadólogos, desarrolladores, y empresarios,
            te llevan de la mano para mejorar e iterar sobre las versiones ya
            establecidas. Para un rendimiento y funcionalidad óptima."
        />
        <Sec2Box
          title={"Mantenimiento y soporte"}
          text=" ¿No requieres más desarrollo? No hay problema, a través de contratos
            anuales continuamos ofreciéndote soporte en todo momento."
        />
      </Flex>
    </Flex>
  );
}

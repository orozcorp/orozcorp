import { Flex, Heading, Box } from "@theme-ui/components";
import { useEffect, useState } from "react";
import ResenaSingle from "./ResenaSingle";

const resenasClientes = [
  {
    _id: "0",
    cliente: "Sterling Fashion",
    mensaje:
      "Nos ayudó a integrar toda nuestra empresa. Se creó un ERP, CRM, POS y control de producción a la medida. Facilitando la comunicación entre equipos y optimizando nuestro flujo de información.",
    logo: "https://res.cloudinary.com/sterling-generation/image/upload/v1607010626/home/STERLINGWhite.svg",
  },
  {
    _id: "1",
    cliente: "Sterling Plasma",
    mensaje:
      "Increíble, entendieron todos nuestros procesos y nos ayudaron a crear un flujo continuo de información entre nuestros clientes, hasta proveedores. ",
    logo: "https://stgfinal.s3.amazonaws.com/plasma/SterlingPlasmaGreen.svg",
  },
  {
    _id: "2",
    cliente: "Club AC",
    mensaje:
      "Confiable, rápido y lógico. Nos ayudó con un landing page super eficiente que nos ha hecho crecer un 25% vs el año pasado.",
    logo: "https://stgfinal.s3.amazonaws.com/clubac/LOGOCLUBAC.svg",
  },
  {
    _id: "3",
    cliente: "Gym Juice Yoga",
    mensaje:
      "Se fue adaptando a nuestra manera de hacer las cosas. Rápido y sencillo",
    logo: "https://stgfinal.s3.amazonaws.com/gjy/GJYLONG_j8cubo.svg",
  },
  {
    _id: "4",
    cliente: "Kumbhaka Coyoacan",
    mensaje: "Respuesta rápida, siempre atentos a cualquier cambio. ",
    logo: "https://res.cloudinary.com/dthb0w8uh/image/upload/v1621895887/KUMBHAKA/TIEMPO_YOGA_LOGO_p8zox7.svg",
  },
];

export default function Resenas() {
  const resenasLength = resenasClientes.length - 1;
  const [resenaActive, setResenaActive] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setResenaActive(resenasLength === resenaActive ? 0 : resenaActive + 1);
    }, 4000);
  }, []);
  return (
    <Flex
      my={4}
      p={3}
      sx={{
        backgroundColor: "#000",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Heading as="h1" my={4} sx={{ color: "#fff", fontSize: "48px" }}>
        Reseñas
      </Heading>
      <ResenaSingle data={resenasClientes[resenaActive]} />
      <Flex
        sx={{
          flexFlow: "row wrap",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
        mb={4}
      >
        {resenasClientes.map((val, index) => (
          <Box
            m={2}
            key={val._id}
            sx={{
              backgroundColor: resenaActive === index ? "#fff" : "#424242",
              height: "20px",
              width: "20px",
              borderRadius: "999px",
            }}
            onClick={() => setResenaActive(index)}
          />
        ))}
      </Flex>
    </Flex>
  );
}

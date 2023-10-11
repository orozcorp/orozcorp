import Image from "next/image";
import { motion } from "framer-motion";
import Contactanos from "../../../components/landing/Contactanos";
import { NextSeo } from "next-seo";
import ProductFeatures from "./ProductFeatures";
import ProductInformation from "../WhatsBlast/ProductInformation";
import ImagesCarousel from "../WhatsBlast/ImagesCarousel";
import Products from "../../../components/landing/Products";
export default function index() {
  return (
    <>
      <NextSeo
        title="WhatsCRM: Integra WhatsApp en Tu CRM y Aumenta Tus Ventas"
        description="WhatsCRM integra WhatsApp con tu CRM para una comunicación fluida y eficiente. Envía y recibe mensajes, accede al inventario en tiempo real, y más."
        canonical="https://orozcorp.live/Products/WhatsCRM"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Integración de CRM, WhatsApp, Historial de Conversaciones, Inventario en Tiempo Real, Registro de Ventas, Seguridad End-to-End, Asignación de Agentes, Etiquetas de Conversación",
          },
        ]}
        openGraph={{
          url: "https://orozcorp.live/Products/WhatsCRM",
          title: "WhatsCRM: Integra WhatsApp en Tu CRM y Aumenta Tus Ventas",
          description:
            "WhatsCRM integra WhatsApp con tu CRM para una comunicación fluida y eficiente. Envía y recibe mensajes, accede al inventario en tiempo real, y más.",
          images: [
            {
              url: "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/handshake2.png",
              alt: "Logo de WhatsCRM",
            },
          ],
          siteName: "Orozcorp",
        }}
        twitter={{
          handle: "@orozcorp_io",
          site: "@orozcorp_io",
          cardType: "summary_large_image",
        }}
      />

      <div className="flex flex-col md:flex-row flex-nowrap md:flex-wrap items-center justify-center gap-8 md:gap-20 mb-12 py-12">
        <motion.button
          initial={{ scale: 0, opacity: 0.3 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Image
            className="rounded-t-lg"
            src="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/handshake2.png"
            alt="WhatsCRM: Conecta, Comunica, Cierra Ventas"
            width={300}
            height={300}
          />
        </motion.button>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">WhatsCRM</h1>
          <p className="text-xl md:text-3xl my-2 md:my-8">
            Conecta, Comunica, Cierra Ventas
          </p>
        </div>
      </div>
      <ProductFeatures />
      <ImagesCarousel
        initialImages={[
          "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-11+at+7.22.18%E2%80%AFAM.png",
          "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-11+at+7.31.08%E2%80%AFAM.png",
          "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-11+at+7.22.00%E2%80%AFAM.png",
        ]}
      />
      <div className="flex flex-col flex-nowrap md:flex-row md:flex-wrap bg-black justify-around items-stretch gap-16 mt-8 p-8 md:p-20">
        <ProductInformation
          head="🛠️ Integración Flexible"
          description="¿Ya tienes un CRM? ¡Perfecto! WhatsCRM se integra fácilmente con cualquier CRM que tenga un API. Si no, no te preocupes, también funciona de maravilla como una solución independiente."
        />

        <ProductInformation
          head="📜 Historial Completo"
          description="Nunca pierdas el hilo de tus conversaciones. Guardamos todo en WhatsCRM, pero si prefieres, podemos sincronizarlo con tu CRM principal."
        />

        <ProductInformation
          head="🛒 Inventario al Alcance de tu Mano"
          description="Ya sea que cargues tu inventario en WhatsCRM o te conectes con tu propio sistema de gestión, siempre tendrás la info que necesitas para cerrar ventas al instante."
        />

        <ProductInformation
          head="📁 Comparte lo que Quieras"
          description="Envía documentos, imágenes y videos de hasta 50 MB. Todo lo que necesitas para convencer a tus clientes."
        />

        <ProductInformation
          head="📊 Registro de Ventas"
          description="Guardamos todas tus ventas en nuestro sistema, pero si tienes un ERP con API, también podemos conectarlo."
        />

        <ProductInformation
          head="🔒 Seguridad de Primera"
          description="Tus conversaciones están seguras con nosotros gracias al cifrado de extremo a extremo."
        />

        <ProductInformation
          head="👥 Trabajo en Equipo"
          description="Asigna conversaciones a diferentes agentes o equipos para un flujo de trabajo más eficiente."
        />

        <ProductInformation
          head="🏷️ Etiquetas para un Seguimiento Fácil"
          description="Organiza tus conversaciones con etiquetas para un seguimiento más sencillo y efectivo."
        />
      </div>
      <Contactanos />
      <Products />
    </>
  );
}

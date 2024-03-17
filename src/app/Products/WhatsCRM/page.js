"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Contactanos from "../../(landing)/Contactanos";
import ProductFeatures from "./ProductFeatures";
import ProductInformation from "../WhatsBlast/ProductInformation";
import ImagesCarousel from "../WhatsBlast/ImagesCarousel";
import Products from "../../(landing)/Products";
export default function index() {
  const schema = {
    productName: "WhatsCRM: Integra WhatsApp en Tu CRM y Aumenta Tus Ventas",
    images: [
      "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/handshake2.png",
      "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-11+at+7.22.18%E2%80%AFAM.png",
      "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-11+at+7.31.08%E2%80%AFAM.png",
      "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-11+at+7.22.00%E2%80%AFAM.png",
    ],
    description:
      "WhatsCRM transforma tu gestión de relaciones con clientes integrando WhatsApp en tu CRM. Ya sea que tengas o no un CRM, WhatsCRM se adapta a tus necesidades, permitiéndote enviar documentos, imágenes y videos, además de ofrecer un registro detallado de ventas y una seguridad de nivel superior.",
    brand: "Orozcorp",
    slogan: "Integración Flexible: Tu CRM, Nuestro Poder",
    disambiguatingDescription:
      "WhatsCRM se caracteriza por su integración flexible con cualquier CRM que tenga API, ofreciendo también la posibilidad de funcionar como una solución independiente. Permite llevar un registro de ventas, garantiza la seguridad de las conversaciones con cifrado de extremo a extremo, y facilita la organización de conversaciones con etiquetas.",
    releaseDate: "2023-02-05T08:00:00+08:00",
    productionDate: "2023-02-05T08:00:00+08:00",
    reviews: [
      {
        author: "Elena",
        datePublished: "2023-04-10T12:00:00Z",
        reviewBody:
          "WhatsCRM ha revolucionado la forma en que gestionamos nuestras relaciones con clientes. La integración con nuestro CRM existente fue sencilla y nos ha permitido una comunicación más fluida y eficiente. El cifrado de extremo a extremo nos da la tranquilidad que necesitábamos respecto a la seguridad de las conversaciones.",
        name: "Transformación en la Gestión de Clientes con WhatsCRM",
        reviewRating: {
          bestRating: "5",
          ratingValue: "5",
          worstRating: "1",
        },
        publisher: {
          type: "Organization",
          name: "TechReviews",
        },
      },
    ],
    aggregateRating: {
      ratingValue: "5",
      reviewCount: "1",
    },
    offers: [
      {
        price: "3000",
        priceCurrency: "USD",
        priceValidUntil: "2034-01-01",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        url: "https://orozcorp.live/Products/WhatsCRM",
        seller: {
          name: "Orozcorp",
        },
      },
    ],
  };
  return (
    <>
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <div className="flex flex-col md:flex-row flex-nowrap md:flex-wrap items-center justify-center h-[70vh] gap-8 md:gap-20 lightBackground py-12">
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
              priority
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
        <div className="flex flex-col flex-nowrap md:flex-row md:flex-wrap darkBackground justify-around items-stretch gap-16 mt-8 p-8 md:p-20">
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
      </section>
      <Products />
    </>
  );
}

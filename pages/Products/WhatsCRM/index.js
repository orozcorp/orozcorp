import Image from "next/image";
import { motion } from "framer-motion";
import Contactanos from "../../../components/landing/Contactanos";
import { NextSeo, ProductJsonLd } from "next-seo";
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
        keywords="Integración de WhatsApp y CRM, Gestión de Conversaciones en WhatsApp, Inventario en Tiempo Real, CRM para WhatsApp,Ventas a través de WhatsApp "
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
      <ProductJsonLd
        productName="ChatDigest: Tu Resumen Diario de Conversaciones en WhatsApp"
        images={[
          "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-11+at+12.03.41%E2%80%AFPM.png",
          "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-11+at+12.03.30%E2%80%AFPM.png",
          "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-11+at+12.03.55%E2%80%AFPM.png",
        ]}
        description="Con ChatDigest, recibe un resumen diario de todas tus interacciones con los clientes en WhatsApp. Identifica oportunidades, analiza el tono de la conversación y toma decisiones más inteligentes."
        brand="Orozcorp"
        slogan="Conecta Más, Esfuerzate Menos: Mensajería Masiva Simplificada con WhatsBlast"
        disambiguatingDescription="WhatsBlast es una herramienta digital diseñada para enviar mensajes masivos en WhatsApp. Permite a los usuarios enviar mensajes personalizados a múltiples destinatarios al mismo tiempo, lo que la hace ideal para empresas y organizaciones que desean interactuar con su base de clientes. Entre sus características clave se incluyen la capacidad de enviar hasta 5,000 mensajes por día, estadísticas en tiempo real sobre la entrega y respuesta de mensajes, y la habilidad de segmentar clientes para comunicaciones dirigidas. Adicionalmente, WhatsBlast ofrece funcionalidades para programar mensajes y es accesible desde cualquier dispositivo con conexión a internet. Este servicio simplifica el proceso de comunicación masiva en WhatsApp, facilitando las interacciones de los usuarios y mejorando el compromiso con los clientes"
        releaseDate="2023-02-05T08:00:00+08:00"
        productionDate="2023-02-05T08:00:00+08:00"
        review={[
          {
            author: "Brandon",
            datePublished: "2023-03-06T03:37:40Z",
            reviewBody:
              "He estado utilizando WhatsBlast durante varios meses para las necesidades de comunicación de mi empresa y ha sido una experiencia transformadora. La capacidad de enviar mensajes personalizados a gran escala ha mejorado significativamente nuestra interacción con los clientes. Lo que más destaco es la facilidad de uso; configurar y enviar campañas es intuitivo y rápido. La función de programación de mensajes nos permite organizar nuestras campañas de marketing con anticipación, lo que es una gran ventaja. Además, las estadísticas en tiempo real nos ofrecen una visión clara del rendimiento de nuestros mensajes, ayudándonos a ajustar nuestras estrategias en consecuencia. Otro punto a favor es la capacidad de segmentar a los clientes, lo que nos ha permitido dirigir nuestros mensajes de manera más efectiva. En general, WhatsBlast ha sido una herramienta invaluable para mejorar la comunicación y el compromiso con nuestros clientes. Definitivamente lo recomendaría a cualquier negocio que busque optimizar su estrategia de mensajería masiva en WhatsApp.",
            name: "Comunicación Masiva Eficaz y Fácil con WhatsBlast",
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
            publisher: {
              type: "Organization",
              name: "Sterling Fashion",
            },
          },
          {
            author: "Alan",
            datePublished: "2023-03-06T03:37:40Z",
            reviewBody:
              "Utilizo WhatsBlast desde hace meses para gestionar los mensajes masivos de mi empresa, y la experiencia ha sido excepcional. La capacidad de enviar mensajes personalizados a una gran audiencia ha revolucionado nuestra forma de comunicarnos con los clientes. Destaco sobre todo la facilidad de uso; configurar y lanzar campañas es increíblemente intuitivo y rápido. La programación de mensajes nos permite planificar nuestras estrategias de marketing con antelación, lo que representa una ventaja considerable. Las estadísticas en tiempo real proporcionan una visión detallada del impacto de nuestros mensajes, ayudándonos a optimizar nuestras tácticas. La segmentación de clientes es otra gran ventaja, permitiéndonos dirigir nuestros esfuerzos de forma más efectiva. WhatsBlast se ha convertido en una herramienta fundamental para mejorar nuestra comunicación y relación con los clientes. Sin duda, lo recomendaría a cualquier empresa que busque mejorar su estrategia de mensajería masiva en WhatsApp.",
            name: "Comunicación Masiva Eficaz y Fácil con WhatsBlast",
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
            publisher: {
              type: "Organization",
              name: "Club Ac",
            },
          },
        ]}
        aggregateRating={{
          ratingValue: "5",
          reviewCount: "2",
        }}
        offers={[
          {
            price: "3000",
            priceCurrency: "USD",
            priceValidUntil: "2020-11-05",
            itemCondition: "https://schema.org/NewCondition",
            availability: "https://schema.org/InStock",
            url: "https://orozcorp.live/Products/WhatsBlast",
            seller: {
              name: "Orozcorp",
            },
          },
        ]}
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

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ProductFeatures from "./ProductFeatures";
import ProductInformation from "./ProductInformation";
import Contactanos from "../../(landing)/Contactanos";
import { ProductJsonLd } from "next-seo";
import ImagesCarousel from "./ImagesCarousel";
import Products from "../../(landing)/Products";

export default function WhatsBlast() {
  return (
    <>
      <ProductJsonLd
        productName="WhatsBlast: Tu Asistente de Mensajería Masiva en WhatsApp"
        images={[
          "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/orozcorp_envelopes.png",
          "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-10+at+5.16.02%E2%80%AFPM.png",
          "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-10+at+4.21.58%E2%80%AFPM.png",
          "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-10+at+5.28.05%E2%80%AFPM.png",
        ]}
        description="WhatsBlast te permite enviar mensajes de WhatsApp personalizados a todos tus clientes en un solo clic. Ofrece estadísticas en tiempo real, segmentación de clientes, y más."
        brand="Orozcorp"
        slogan="Conecta Más, Esfuerzate Menos: Mensajería Masiva Simplificada con WhatsBlast"
        disambiguatingDescription="WhatsBlast es una herramienta digital diseñada para enviar mensajes masivos en WhatsApp. Permite a los usuarios enviar mensajes personalizados a múltiples destinatarios al mismo tiempo, lo que la hace ideal para empresas y organizaciones que desean interactuar con su base de clientes. Entre sus características clave se incluyen la capacidad de enviar hasta 5,000 mensajes por día, estadísticas en tiempo real sobre la entrega y respuesta de mensajes, y la habilidad de segmentar clientes para comunicaciones dirigidas. Adicionalmente, WhatsBlast ofrece funcionalidades para programar mensajes y es accesible desde cualquier dispositivo con conexión a internet. Este servicio simplifica el proceso de comunicación masiva en WhatsApp, facilitando las interacciones de los usuarios y mejorando el compromiso con los clientes"
        releaseDate="2023-02-05T08:00:00+08:00"
        productionDate="2023-02-05T08:00:00+08:00"
        reviews={[
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
      <div className="flex flex-col md:flex-row flex-nowrap md:flex-wrap h-[70vh] items-center justify-center gap-8 md:gap-20  py-12 lightBackground">
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
            src="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/orozcorp_envelopes.png"
            alt="WhatsBlast: Tu Asistente de Mensajería Masiva"
            width={300}
            height={300}
            priority
          />
        </motion.button>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">WhatsBlast</h1>
          <p className="text-xl md:text-3xl my-2 md:my-8">
            Tu Asistente de Mensajería Masiva
          </p>
        </div>
      </div>
      <ProductFeatures />
      <ImagesCarousel
        initialImages={[
          "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-10+at+5.16.02%E2%80%AFPM.png",
          "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-10+at+4.21.58%E2%80%AFPM.png",
          "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-10+at+5.28.05%E2%80%AFPM.png",
        ]}
      />
      <div className="flex flex-col flex-nowrap md:flex-row md:flex-wrap darkBackground justify-around items-stretch gap-16 mt-8 p-8 md:p-20">
        <ProductInformation
          head="🌟 Haz que cada cliente se sienta único"
          description="Con WhatsBlast, olvídate de enviar mensajes uno por uno. Envía mensajes de WhatsApp personalizados a todos tus clientes en un solo clic. Haz que cada cliente se sienta especial y único, mejorando así la relación con ellos."
        />
        <ProductInformation
          head="📊 Estadísticas que te hablan"
          description="¿Quieres saber qué tan efectivos son tus mensajes? WhatsBlast te ofrece estadísticas en tiempo real. Descubre cuántos mensajes has enviado, quiénes los han abierto y quiénes han respondido. Y si quieres ir más allá, tenemos análisis de tono y resumen de respuestas ."
        />
        <ProductInformation
          head="🎯 Segmentación Inteligente"
          description="Segmenta a tus clientes según tus necesidades y los atributos que tu CRM te proporciona. Envía mensajes que hablen directo al corazón de tus clientes, mejorando la efectividad de tus campañas."
        />
        <ProductInformation
          head="💌  Mensajes sin límites... casi"
          description="¿Tienes algo grande que decir? Con WhatsBlast puedes enviar hasta 5,000 mensajes al día. Así que no te cortes y llega a todos tus clientes."
        />
        <ProductInformation
          head="☕ Programa y relájate"
          description="¿Quieres más tiempo para ti? Programa tus mensajes para que se envíen cuando tú quieras. Así podrás disfrutar de tu café mientras WhatsBlast hace el trabajo duro por ti."
        />
        <ProductInformation
          head="🔒 Seguridad que puedes confiar"
          description="Utilizamos el API de WhatsApp para garantizar la máxima seguridad en cada mensaje que envías."
        />

        <ProductInformation
          head="🌐 Accesible desde cualquier lugar"
          description="Ya sea desde tu computadora o tu celular, accede a WhatsBlast desde cualquier dispositivo con internet y un navegador."
        />
        <ProductInformation
          head="🛠️  Integraciones y más"
          description="WhatsBlast es una aplicación independiente, pero si lo prefieres, se integra perfectamente con plataformas open source de CRM. Además, podemos integrarlo directamente en tu webapp para una personalización completa."
        />
      </div>
      <Contactanos />
      <Products />
    </>
  );
}

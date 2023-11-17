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
        title="ChatDigest: Tu Resumen Diario de Conversaciones en WhatsApp"
        description="Con ChatDigest, recibe un resumen diario de todas tus interacciones con los clientes en WhatsApp. Identifica oportunidades, analiza el tono de la conversación y toma decisiones más inteligentes."
        canonical="https://orozcorp.live/Products/ChatDigest"
        keywords="Resumen Diario de WhatsApp, Resumen de Conversaciones en WhatsApp, Análisis de Tono, Programación de Resúmenes, Exportación de Datos, Integración con WhatsCRM"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Resumen Diario, WhatsApp, Inteligencia Artificial, Análisis de Tono, Métricas Personalizadas, Programación de Resúmenes, Exportación de Datos, Integración con WhatsCRM",
          },
        ]}
        openGraph={{
          url: "https://orozcorp.live/Products/ChatDigest",
          title: "ChatDigest: Tu Resumen Diario de Conversaciones en WhatsApp",
          description:
            "Con ChatDigest, recibe un resumen diario de todas tus interacciones con los clientes en WhatsApp. Identifica oportunidades, analiza el tono de la conversación y toma decisiones más inteligentes.",
          images: [
            {
              url: "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/botreading2.png",
              alt: "Logo de ChatDigest",
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
        description="ChatDigest es tu asistente virtual para WhatsApp, proporcionando resúmenes diarios personalizados de tus conversaciones. Descubre oportunidades y analiza el tono de las conversaciones para una mejor gestión de la comunicación con tus clientes."
        brand="Orozcorp"
        slogan="Resúmenes a la Carta para una Gestión Inteligente"
        disambiguatingDescription="ChatDigest ofrece resúmenes personalizados que eliminan el caos de la bandeja de entrada, destacando oportunidades clave y analizando el tono emocional de las conversaciones. Su integración con WhatsCRM lleva la gestión de conversaciones a un nuevo nivel, y la función de traducción rompe las barreras del idioma en negocios globales."
        releaseDate="2023-03-15T08:00:00+08:00"
        productionDate="2023-03-15T08:00:00+08:00"
        reviews={[
          {
            author: "Carlos",
            datePublished: "2023-04-20T15:00:00Z",
            reviewBody:
              "ChatDigest me ha ayudado a mantenerme al día con todas mis conversaciones de WhatsApp. La personalización de los resúmenes es fantástica, y el análisis del tono de las conversaciones me ha permitido entender mejor a mis clientes.",
            name: "Eficiencia y Claridad en la Comunicación con ChatDigest",
            reviewRating: {
              bestRating: "5",
              ratingValue: "5",
              worstRating: "1",
            },
            publisher: {
              type: "Organization",
              name: "Comunicaciones Modernas",
            },
          },
        ]} // Include reviews as per your data
        aggregateRating={{
          ratingValue: "5",
          reviewCount: "1",
        }}
        offers={[
          {
            price: "3000",
            priceCurrency: "USD",
            priceValidUntil: "2024-01-01",
            itemCondition: "https://schema.org/NewCondition",
            availability: "https://schema.org/InStock",
            url: "https://orozcorp.live/Products/ChatDigest",
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
            src="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/botreading2.png"
            alt="ChatDigest: Tu Asistente Virtual para Conversaciones de WhatsApp"
            width={300}
            height={300}
          />
        </motion.button>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">ChatDigest</h1>
          <p className="text-xl md:text-3xl my-2 md:my-8">
            Tu Asistente Virtual para Conversaciones de WhatsApp
          </p>
        </div>
      </div>
      <ProductFeatures />
      <ImagesCarousel
        initialImages={[
          "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-11+at+12.03.41%E2%80%AFPM.png",
          "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-11+at+12.03.30%E2%80%AFPM.png",
          "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-11+at+12.03.55%E2%80%AFPM.png",
        ]}
      />
      <div className="flex flex-col flex-nowrap md:flex-row md:flex-wrap bg-black justify-around items-stretch gap-16 mt-8 p-8 md:p-20">
        <ProductInformation
          head="📑 Resumen Diario Personalizado"
          description="¿Te sientes abrumado con la cantidad de chats que tienes que revisar cada día? No te preocupes. ChatDigest te envía un resumen diario directamente a tu bandeja de entrada. Y no es cualquier resumen; es un resumen que puedes personalizar para que se ajuste a tus necesidades. Elige las métricas que más te importan y recibe solo la información que realmente necesitas."
        />
        <ProductInformation
          head="🔗 Integración con WhatsCRM"
          description="Si ya estás usando WhatsCRM, tenemos buenas noticias para ti. ChatDigest se integra perfectamente, permitiéndote llevar tu gestión de conversaciones a un nivel completamente nuevo."
        />
        <ProductInformation
          head="🌍 Traduce al Instante"
          description="¿Tienes un equipo global o clientes en diferentes partes del mundo? No hay problema. Ahora puedes traducir todo el resumen de las conversaciones al idioma que prefieras, haciendo que la comunicación sea más fluida que nunca."
        />

        <ProductInformation
          head="📊 Análisis de Tono"
          description="¿Tu cliente está feliz, frustrado o simplemente indiferente? ChatDigest utiliza tecnología de IA para analizar el tono de cada conversación. Esto te permite ajustar tu estrategia de comunicación para cada cliente, mejorando así la satisfacción y la lealtad del cliente."
        />

        <ProductInformation
          head="⏰ Programa tu Resumen"
          description="¿Prefieres recibir tu resumen a primera hora de la mañana o justo antes de cerrar el día? Con ChatDigest, puedes programar cuándo recibir tu resumen diario. Así, siempre tendrás la información fresca cuando más la necesites."
        />

        <ProductInformation
          head="📤 Exporta y Comparte"
          description="¿Necesitas compartir tus hallazgos con el equipo o exportar los datos para un análisis más profundo? ChatDigest te permite hacer ambas cosas con facilidad. Y si estás usando WhatsCRM, la integración es tan suave como la seda."
        />

        <ProductInformation
          head="🔗 Integración con WhatsCRM"
          description="Si ya estás usando WhatsCRM, tenemos buenas noticias para ti. ChatDigest se integra perfectamente, permitiéndote llevar tu gestión de conversaciones a un nivel completamente nuevo."
        />
      </div>
      <Contactanos />
      <Products />
    </>
  );
}

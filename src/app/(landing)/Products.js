"use client";
import ProductsSingle from "./ProductsSingle";

const products = [
  {
    id: 0,
    name: "WhatsBlast: Tu Asistente de Mensajería Masiva",
    descripcion:
      "¿Cansado de enviar mensajes uno por uno?  \n\nCon WhatsBlast, envía mensajes de WhatsApp personalizados a todos tus clientes en un solo clic. 🚀  \n\nMejora la relación con tus clientes haciéndoles sentir únicos y especiales. 🌟  \n\nAnaliza la eficacia de tus campañas con estadísticas en tiempo real.  \n\nYa sea un comunicado importante o un simple saludo, hazlo todo desde un solo panel. 🎯",
    image:
      "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/orozcorp_envelopes.png",
    url: "/Products/WhatsBlast",
    schema: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "WhatsBlast",
      image:
        "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/orozcorp_envelopes.png",
      description:
        "WhatsBlast te permite enviar mensajes de WhatsApp personalizados a todos tus clientes en un solo clic. Ofrece estadísticas en tiempo real, segmentación de clientes, y más.",
      brand: {
        "@type": "Brand",
        name: "Orozcorp",
      },
      reviews: [
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
      ],
      aggregateRating: {
        ratingValue: "5",
        reviewCount: "2",
      },
      offers: {
        "@type": "Offer",
        url: "https://orozcorp.live/Products/WhatsBlast",
        priceCurrency: "USD",
        price: "9000.99",
        priceValidUntil: "2032-12-31",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "Orozcorp",
        },
      },
    },
  },
  {
    id: 1,
    name: "WhatsCRM: Conecta, Comunica, Cierra Ventas",
    descripcion:
      "Integra WhatsApp directamente en tu CRM con WhatsCRM. 🤝  \n\nEnvía y recibe mensajes desde cualquier dispositivo, y nunca pierdas el hilo de la conversación gracias al historial completo. 📜  \n\nAccede a tu inventario en tiempo real para cerrar ventas al instante. 🛒  \n\nComparte documentos, imágenes y videos aprobados por tu empresa. 📁  \n\nY lo mejor, lleva un registro de todas tus ventas. 📊",
    image:
      "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/handshake2.png",
    url: "/Products/WhatsCRM",
    schema: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "WhatsCRM",
      image:
        "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/handshake2.png",
      description:
        "WhatsCRM integra WhatsApp con tu CRM para una comunicación fluida y eficiente. Envía y recibe mensajes, accede al inventario en tiempo real, y más.",
      brand: {
        "@type": "Brand",
        name: "Orozcorp",
      },
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
      offers: {
        "@type": "Offer",
        url: "https://orozcorp.live/Products/WhatsCRM",
        priceCurrency: "USD",
        price: "9000.99",
        priceValidUntil: "2032-12-31",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "Orozcorp",
        },
      },
    },
  },
  {
    id: 2,
    name: "ChatDigest: Tu Resumen Diario de Conversaciones",
    descripcion:
      "¿Demasiadas conversaciones y poco tiempo?  \n\nCon ChatDigest, recibe un resumen diario de todas tus interacciones con los clientes. 📑  \n\nIdentifica oportunidades y acciones potenciales sin tener que leer cada chat. 🎯  \n\nAnaliza el tono de la conversación para ajustar tu estrategia. 📊  \n\nMantente al día, ahorra tiempo y toma decisiones más inteligentes. 🧠",
    image:
      "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/botreading2.png",
    url: "/Products/ChatDigest",
    schema: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "ChatDigest",
      image:
        "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/botreading2.png",
      description:
        "Con ChatDigest, recibe un resumen diario de todas tus interacciones con los clientes en WhatsApp. Identifica oportunidades, analiza el tono de la conversación y toma decisiones más inteligentes.",
      brand: {
        "@type": "Brand",
        name: "Orozcorp",
      },
      reviews: [
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
      ],
      aggregateRating: {
        ratingValue: "5",
        reviewCount: "1",
      },
      offers: {
        "@type": "Offer",
        url: "https://orozcorp.live/Products/ChatDigest",
        priceCurrency: "USD",
        price: "9000.99",
        priceValidUntil: "2032-12-31",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "Orozcorp",
        },
      },
    },
  },
];

export default function Products() {
  return (
    <div className=" py-20 flex flex-row flex-wrap justify-center items-center darkBackground">
      <div className="flex flex-col flex-nowrap w-full md:w-[95%]">
        <h2 className="text-white text-center text-6xl font-bold">
          Nuestros productos clave
        </h2>
        <div className="flex flex-col md:flex-row flex-nowrap md:flex-wrap gap-8 my-16 w-full justify-center items-center lg:justify-around p-4 ">
          {products.map((product) => (
            <div key={product.id}>
              <ProductsSingle product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { ProductJsonLd } from "next-seo";
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
    offers: [
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
    ],
  },
  {
    id: 1,
    name: "WhatsCRM: Conecta, Comunica, Cierra Ventas",
    descripcion:
      "Integra WhatsApp directamente en tu CRM con WhatsCRM. 🤝  \n\nEnvía y recibe mensajes desde cualquier dispositivo, y nunca pierdas el hilo de la conversación gracias al historial completo. 📜  \n\nAccede a tu inventario en tiempo real para cerrar ventas al instante. 🛒  \n\nComparte documentos, imágenes y videos aprobados por tu empresa. 📁  \n\nY lo mejor, lleva un registro de todas tus ventas. 📊",
    image:
      "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/handshake2.png",
    url: "/Products/WhatsCRM",
    offers: [
      {
        price: "3000",
        priceCurrency: "USD",
        priceValidUntil: "2024-01-01",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        url: "https://orozcorp.live/Products/WhatsCRM",
        seller: {
          name: "Orozcorp",
        },
      },
    ],
  },
  {
    id: 2,
    name: "ChatDigest: Tu Resumen Diario de Conversaciones",
    descripcion:
      "¿Demasiadas conversaciones y poco tiempo?  \n\nCon ChatDigest, recibe un resumen diario de todas tus interacciones con los clientes. 📑  \n\nIdentifica oportunidades y acciones potenciales sin tener que leer cada chat. 🎯  \n\nAnaliza el tono de la conversación para ajustar tu estrategia. 📊  \n\nMantente al día, ahorra tiempo y toma decisiones más inteligentes. 🧠",
    image:
      "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/botreading2.png",
    url: "/Products/ChatDigest",
    offers: [
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
    ],
  },
];

export default function Products() {
  return (
    <div className="bg-[#121212] py-20 flex flex-row flex-wrap justify-center items-center">
      <div className="flex flex-col flex-nowrap w-full md:w-[95%]">
        <h2 className="text-white text-center text-6xl font-bold">
          Nuestros productos clave
        </h2>
        <div className="flex flex-col md:flex-row flex-nowrap md:flex-wrap gap-8 my-16 w-full justify-center items-center lg:justify-around p-4 ">
          {products.map((product) => (
            <div key={product.id}>
              <ProductJsonLd
                productName={product.name}
                description={product.descripcion}
                brand="Orozcorp"
                images={[product.image]}
                offers={product.offers}
              />
              <ProductsSingle product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

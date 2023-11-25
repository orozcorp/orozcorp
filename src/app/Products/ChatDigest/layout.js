export const metadata = {
  metadataBase: new URL("https://orozcorp.live/Products/ChatDigest"),
  title: "ChatDigest: Tu Resumen Diario de Conversaciones en WhatsApp",
  description:
    "Con ChatDigest, recibe un resumen diario de todas tus interacciones con los clientes en WhatsApp. Identifica oportunidades, analiza el tono de la conversación y toma decisiones más inteligentes.",
  canonical: "https://orozcorp.live/Products/ChatDigest",
  keywords:
    "Envío Masivo de WhatsApp, Mensajería Masiva en WhatsApp, WhatsApp para Empresas, Programar Mensajes en WhatsApp, Automatización de WhatsApp, Mensajería Masiva, WhatsApp, Estadísticas en Tiempo Real, Segmentación de Clientes, Programación de Mensajes",
  referrer: "origin-when-cross-origin",
  category: "technology",
  generator: "Orozcorp",
  applicationName: "ChatDigest",
  publisher: "Eduardo Orozco",
  twitter: {
    card: "summary_large_image",
    title: "ChatDigest: Tu Resumen Diario de Conversaciones en WhatsApp",
    creator: "@orozcorp_io",
    images: [
      "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/botreading2.png",
      ,
    ],
  },
  openGraph: {
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
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function layout({ children }) {
  return <>{children}</>;
}

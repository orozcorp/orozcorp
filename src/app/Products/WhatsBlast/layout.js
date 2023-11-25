export const metadata = {
  metadataBase: new URL("https://orozcorp.live/Products/WhatsBlast"),
  title: "WhatsBlast: Tu Asistente de Mensajería Masiva en WhatsApp",
  description:
    "WhatsBlast te permite enviar mensajes de WhatsApp personalizados a todos tus clientes en un solo clic. Ofrece estadísticas en tiempo real, segmentación de clientes, y más.",
  canonical: "https://orozcorp.live/Products/WhatsBlast",
  keywords:
    "Envío Masivo de WhatsApp, Mensajería Masiva en WhatsApp, WhatsApp para Empresas, Programar Mensajes en WhatsApp, Automatización de WhatsApp, Mensajería Masiva, WhatsApp, Estadísticas en Tiempo Real, Segmentación de Clientes, Programación de Mensajes",
  referrer: "origin-when-cross-origin",
  category: "technology",
  generator: "Orozcorp",
  applicationName: "WhatsBlast",
  publisher: "Eduardo Orozco",
  twitter: {
    card: "summary_large_image",
    title: "WhatsBlast: Tu Asistente de Mensajería Masiva en WhatsApp",
    creator: "@orozcorp_io",
    images: [
      "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/orozcorp_envelopes.png",
    ],
  },
  openGraph: {
    url: "https://orozcorp.live/Products/WhatsBlast",
    title: "WhatsBlast: Tu Asistente de Mensajería Masiva en WhatsApp",
    description:
      "WhatsBlast te permite enviar mensajes de WhatsApp personalizados a todos tus clientes en un solo clic. Ofrece estadísticas en tiempo real, segmentación de clientes, y más.",
    images: [
      {
        url: "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/orozcorp_envelopes.png",
        alt: "Logo de WhatsBlast",
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

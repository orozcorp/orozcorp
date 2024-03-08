export const metadata = {
  metadataBase: new URL("https://orozcorp.live/Products/WhatsBlast"),
  title: "WhatsBlast: Revoluciona la Mensajería Masiva en WhatsApp | Orozcorp",
  description:
    "Descubre WhatsBlast, tu solución definitiva para la mensajería masiva en WhatsApp. Envía mensajes personalizados a escala, disfruta de estadísticas detalladas y segmenta tus clientes eficazmente. Aprovecha al máximo cada conversación.",
  canonical: "https://orozcorp.live/Products/WhatsBlast",
  keywords:
    "Mensajería Masiva WhatsApp, Automatización WhatsApp, Segmentación de Clientes WhatsApp, Envío Masivo WhatsApp, Gestión de Clientes WhatsApp, Marketing WhatsApp, Análisis de Conversaciones WhatsApp, CRM para WhatsApp, Herramientas WhatsApp Business",
  referrer: "origin-when-cross-origin",
  category: "Technology, Business, Marketing",
  generator: "Orozcorp",
  applicationName: "WhatsBlast",
  publisher: "Eduardo Orozco",
  schemaType: "SoftwareApplication",
  twitter: {
    card: "summary_large_image",
    title: "WhatsBlast: Eleva tu Mensajería Masiva en WhatsApp con Orozcorp",
    creator: "@orozcorp_io",
    images: [
      "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/orozcorp_envelopes.png",
    ],
  },
  openGraph: {
    type: "website",
    url: "https://orozcorp.live/Products/WhatsBlast",
    title: "WhatsBlast: Mensajería Masiva Inteligente en WhatsApp | Orozcorp",
    description:
      "Escala tu comunicación en WhatsApp con WhatsBlast. Envíos masivos, análisis avanzados y segmentación precisa. Transforma tu estrategia de comunicación ahora.",
    images: [
      {
        url: "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/orozcorp_envelopes.png",
        alt: "WhatsBlast - Innovación en Mensajería Masiva para WhatsApp",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Orozcorp",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false, // Assuming you'd like images to be indexed
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://orozcorp.s3.us-east-2.amazonaws.com/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#317EFB",
    },
  ],
};

export default function layout({ children }) {
  return <>{children}</>;
}

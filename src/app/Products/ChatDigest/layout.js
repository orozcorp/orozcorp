export const metadata = {
  metadataBase: new URL("https://orozcorp.live/Products/ChatDigest"),
  title:
    "ChatDigest: Tu Resumen Diario de Conversaciones en WhatsApp | Orozcorp",
  description:
    "Maximiza tu eficiencia en WhatsApp con ChatDigest. Recibe resúmenes diarios de tus chats, analiza interacciones y mejora tu estrategia de comunicación con clientes. ¡Descubre oportunidades y optimiza tu servicio al cliente hoy!",
  canonical: "https://orozcorp.live/Products/ChatDigest",
  keywords:
    "WhatsApp Business, Automatización de WhatsApp, Envío Masivo de WhatsApp, CRM WhatsApp, Análisis de Conversaciones, WhatsApp para Empresas, Gestión de Clientes, Engagement de Clientes, Marketing en WhatsApp, Soporte al Cliente en WhatsApp",
  referrer: "origin-when-cross-origin",
  category: "Technology, Business, Customer Support",
  generator: "Orozcorp",
  applicationName: "ChatDigest",
  publisher: "Eduardo Orozco",
  schemaType: "SoftwareApplication",
  twitter: {
    card: "summary_large_image",
    title: "ChatDigest: Optimiza tus Conversaciones en WhatsApp con Orozcorp",
    creator: "@orozcorp_io",
    images: [
      "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/botreading2.png",
    ],
  },
  openGraph: {
    type: "website",
    url: "https://orozcorp.live/Products/ChatDigest",
    title:
      "ChatDigest: Tu Resumen Diario de Conversaciones en WhatsApp | Orozcorp",
    description:
      "Maximiza tu eficiencia en WhatsApp con ChatDigest. Recibe resúmenes diarios, analiza interacciones y mejora tu comunicación con clientes.",
    images: [
      {
        url: "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/botreading2.png",
        alt: "ChatDigest - Optimización de Conversaciones en WhatsApp",
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
      noimageindex: false, // Assuming you want images indexed now, else keep as true
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

export const metadata = {
  metadataBase: new URL("https://orozcorp.live/Products/WhatsCRM"),
  title: "WhatsCRM: Integra WhatsApp en Tu CRM y Aumenta Tus Ventas",
  description:
    "WhatsCRM integra WhatsApp con tu CRM para una comunicación fluida y eficiente. Envía y recibe mensajes, accede al inventario en tiempo real, y más.",
  canonical: "https://orozcorp.live/Products/WhatsCRM",
  keywords:
    "Integración de WhatsApp y CRM, Gestión de Conversaciones en WhatsApp, Inventario en Tiempo Real, CRM para WhatsApp,Ventas a través de WhatsApp ",
  referrer: "origin-when-cross-origin",
  category: "technology",
  generator: "Orozcorp",
  applicationName: "WhatsCRM",
  publisher: "Eduardo Orozco",
  twitter: {
    card: "summary_large_image",
    title: "WhatsCRM: Integra WhatsApp en Tu CRM y Aumenta Tus Ventas",
    creator: "@orozcorp_io",
    images: [
      "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/handshake2.png",
      ,
    ],
  },
  openGraph: {
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

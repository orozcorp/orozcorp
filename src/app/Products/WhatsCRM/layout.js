export const metadata = {
  metadataBase: new URL("https://orozcorp.live/Products/WhatsCRM"),
  title:
    "WhatsCRM: Maximiza Tus Ventas Integrando WhatsApp con Tu CRM | Orozcorp",
  description:
    "Con WhatsCRM, une WhatsApp a tu CRM y transforma la comunicación con tus clientes. Gestiona conversaciones, accede a inventarios en tiempo real y potencia tus ventas con eficiencia inigualable.",
  canonical: "https://orozcorp.live/Products/WhatsCRM",
  keywords:
    "Integración WhatsApp CRM, CRM para WhatsApp, Comunicación Cliente WhatsApp, Automatización CRM WhatsApp, Gestión de Clientes, Ventas WhatsApp, Mejora de Ventas con WhatsApp, Eficiencia en Comunicaciones, Inventario en Tiempo Real",
  referrer: "origin-when-cross-origin",
  category: "Technology, Sales, Customer Relationship Management",
  generator: "Orozcorp",
  applicationName: "WhatsCRM",
  publisher: "Eduardo Orozco",
  schemaType: "SoftwareApplication",
  twitter: {
    card: "summary_large_image",
    title:
      "WhatsCRM: Revoluciona tu Estrategia de Ventas con la Integración de WhatsApp",
    creator: "@orozcorp_io",
    images: [
      "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/handshake2.png",
    ],
  },
  openGraph: {
    type: "website",
    url: "https://orozcorp.live/Products/WhatsCRM",
    title: "WhatsCRM: Maximiza Tus Ventas Integrando WhatsApp con Tu CRM",
    description:
      "Con WhatsCRM, transforma tu gestión de clientes y ventas integrando WhatsApp directamente en tu CRM. Descubre una eficiencia comunicativa sin precedentes.",
    images: [
      {
        url: "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/handshake2.png",
        alt: "Transforma tu CRM con WhatsCRM",
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
      noimageindex: false, // Changed to false to allow image indexing
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

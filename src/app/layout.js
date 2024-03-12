import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NextAuthSessionProvider from "../providers/sessionProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import QCProvider from "../config/QCProvider";
export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export const metadata = {
  title: "Orozcorp: Tu Partner en Desarrollo Web y Aplicaciones Móviles",
  description:
    "Orozcorp es tu socio de confianza en el desarrollo de aplicaciones web y móviles. Especializados en Next JS, GraphQL, y JS, transformamos tu visión en soluciones digitales efectivas.",
  "apple-mobile-web-app-capable": "yes",
  fragment: "!",
  charSet: "utf-8",
  openGraph: {
    type: "website",
    url: "https://orozcorp.live",
    title: "Orozcorp: Tu Partner en Desarrollo Web y Aplicaciones Móviles",
    description:
      "Orozcorp es tu socio de confianza en el desarrollo de aplicaciones web y móviles. Especializados en Next JS, GraphQL, y JS, transformamos tu visión en soluciones digitales efectivas.",
    image: "https://orozcorp.live/api/og",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="es">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <QCProvider>
          <NextAuthSessionProvider>
            <main
              style={{
                position: "relative",
                display: "flex",
                flexFlow: "column nowrap",
                minHeight: "100vh",
              }}
            >
              <Navbar />
              <div style={{ flex: 1 }}>{children}</div>
              <Footer />
            </main>
          </NextAuthSessionProvider>
        </QCProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
    </html>
  );
}

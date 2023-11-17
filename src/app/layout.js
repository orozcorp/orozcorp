import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";
import NextAuthSessionProvider from "../providers/sessionProvider";
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
  "og:image": "https://orozcorp.live/api/og",
};
export default async function RootLayout({ children }) {
  return (
    <html lang="es">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <Script id="google-analytics" strategy="lazyOnload" async>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H6EDP81J4D');
        `}
      </Script>
      <body>
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
      </body>
    </html>
  );
}

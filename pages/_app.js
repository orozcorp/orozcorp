import theme from "../src/layout/theme";
import { ThemeProvider } from "theme-ui";

import Navbar from "./Navbar";
import { Inter } from "next/font/google";
import Footer from "./Footer";
import { ApolloProvider } from "@apollo/client";
import withApolloClient from "../apollo/config/withApolloClient";
import { GlobalContainer } from "../components/context/GlobalContext";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
const customFont = Inter({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default withApolloClient(({ pageProps, Component, apollo }) => {
  return (
    <>
      <Head>
        <title>Orozcorp | webapp, ecommerce, catalogo , landing</title>
        <meta
          name="description"
          content="Orozcorp, webapps, ecommerce, Next JS, Graph Ql, JS, Meteor JS, Finanzas, Logística "
        />
        <meta property="og:image" content="https://www.orozcorp.live/api/og" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="fragment" content="!" />
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={pageProps?.session}>
        <ApolloProvider client={apollo}>
          <ThemeProvider theme={theme}>
            <GlobalContainer>
              <main
                style={{
                  position: "relative",
                  display: "flex",
                  flexFlow: "column nowrap",
                  minHeight: "100vh",
                }}
                className={customFont.className}
              >
                <Navbar />
                <div style={{ flex: 1 }}>
                  <Component {...pageProps} />
                </div>
                <Footer />
              </main>
            </GlobalContainer>
          </ThemeProvider>
        </ApolloProvider>
      </SessionProvider>
      <>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H6EDP81J4D"
          strategy="lazyOnload"
          async
        />
        <Script id="google-analytics" strategy="lazyOnload" async>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H6EDP81J4D');
        `}
        </Script>
      </>
    </>
  );
});

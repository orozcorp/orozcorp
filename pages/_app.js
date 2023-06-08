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
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
const customFont = Inter({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default withApolloClient(({ pageProps, Component, apollo }) => {
  return (
    <>
      <Head>
        <title>
          Orozcorp - Digital Product Development & Strategy Consulting
        </title>
        <meta
          name="description"
          content="Orozcorp specializes in creating and launching digital products. From app creation and web development to strategic consulting and ongoing support, our dedicated team can transform your idea into a successful digital product. Start your digital journey with us today."
        />
        <meta
          name="keywords"
          content="Orozcorp, Eduardo Orozco, Eduardo Orozco Mendoza, Digital Product Development, App Creation Services, Digital Strategy Consulting, Web App Development, Custom App Development, High Fidelity Prototyping, Product Discovery Services, Rapid Design Process, Business Plan Analysis, User Research Services, Javascript, Node JS, React, Next JS Development, Hosting and Maintenance Services, Cost Optimization Services, Database Analysis Services, Wireframing and Branding Services, Agile Development Team, Dedicated Development Team, Multidisciplinary Development Team, Digital Transformation Services, Custom ERP, CRM, POS Development"
        />
        <meta
          name="ahrefs-site-verification"
          content="c4041087b3a4ebd2b0b1c0236e0b7cbfcf7bfba0ede4c67d59b5b5b4a9ee9b56"
        />
        <meta property="og:image" content="https://orozcorp.live/api/og" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="fragment" content="!" />
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script id="google-analytics" strategy="lazyOnload" async>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H6EDP81J4D');
        `}
      </Script>
      <DefaultSeo {...SEO} />
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

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-H6EDP81J4D"
        strategy="lazyOnload"
        async
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=G-H6EDP81J4D"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </>
  );
});

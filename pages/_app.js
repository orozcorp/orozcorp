import theme from "../src/layout/theme";
import { ThemeProvider } from "theme-ui";

import Navbar from "./Navbar";
import { Catamaran } from "@next/font/google";
import Footer from "./Footer";
import { ApolloProvider } from "@apollo/client";
import withApolloClient from "../apollo/config/withApolloClient";
import { GlobalContainer } from "../components/context/GlobalContext";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Head from "next/head";
const customFont = Catamaran({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default withApolloClient(({ pageProps, Component, apollo }) => {
  return (
    <>
      <Head>
        <title>Orozcorp</title>
        <meta name="description" content="Orozcorp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="fragment" content="!" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={pageProps?.session}>
        <ApolloProvider client={apollo}>
          <ThemeProvider theme={theme}>
            <GlobalContainer>
              <main
                style={{ position: "relative" }}
                className={customFont.className}
              >
                <Navbar />
                <Component {...pageProps} />
                <Footer />
              </main>
            </GlobalContainer>
          </ThemeProvider>
        </ApolloProvider>
      </SessionProvider>
    </>
  );
});

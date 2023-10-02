import { LocalBusinessJsonLd, NextSeo } from "next-seo";
import { Box } from "@theme-ui/components";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";

const Contactanos = dynamic(() => import("../components/landing/Contactanos"));
const Resenas = dynamic(() => import("../components/landing/Resenas"));
const Section1 = dynamic(() => import("../components/landing/Section1"));
const Section2 = dynamic(() => import("../components/landing/Section2"));
const Section3 = dynamic(() => import("../components/landing/Section3"));
const Section0 = dynamic(() => import("../components/landing/Section0"));
const Products = dynamic(() => import("../components/landing/Products"));

export default function index() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "loading" && session) {
      router.push("/InformacionMedica");
    }
  }, [session, status, router]);
  return (
    <Box sx={{ height: "100%", marginBottom: "200px" }}>
      <NextSeo
        title="Orozcorp"
        description="Consultoria de webapps, ecommerce, Next JS, Graph Ql, JS, Meteor JS"
        canonical="https://orozcorp.live/"
        openGraph={{
          url: "https://orozcorp.live",
          title: "Orozcorp",
          description:
            "Consultoria de webapps, ecommerce, Next JS, Graph Ql, JS, Meteor JS",
          images: [
            {
              url: "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/TECBOY+FACE.svg",
            },
          ],
          image:
            "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/TECBOY+FACE.svg",
          siteName: "Orozcorp",
        }}
        twitter={{
          handle: "@orozcorp_io",
          site: "@orozcorp_io",
          cardType: "summary_large_image",
        }}
      />
      <LocalBusinessJsonLd
        type="Consulting Firm"
        id="https://orozcorp.live"
        name="Orozcorp"
        description="webapps, ecommerce, Next JS, Graph Ql, JS, Meteor JS"
        url="http://orozcorp.live"
        telephone="+525536554893"
        address={{
          streetAddress: "General Miguel Aleman 32 loc d",
          addressLocality: "Col Centro Del Cuauhtemoc",
          addressRegion: "CDMX",
          postalCode: "06000",
          addressCountry: "MX",
        }}
        images={[
          "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/TECBOY+FACE.svg",
        ]}
        sameAs={["www.orozcorp.live"]}
        openingHours={[
          {
            opens: "08:00",
            closes: "23:59",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            validFrom: "2019-12-23",
            validThrough: "2030-04-02",
          },
        ]}
        makesOffer={[
          {
            priceSpecification: {
              type: "UnitPriceSpecification",
              priceCurrency: "MXN",
              price: "10000-1000000",
            },
            itemOffered: {
              name: "WebApp Creation",
              description: "Web App Creation",
            },
          },
        ]}
      />
      <Section0 />
      <Section1 />
      <Section2 />
      <Products />
      <Section3 />
      <Resenas />
      <Contactanos />
    </Box>
  );
}

export const getServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {},
  };
};

import { LocalBusinessJsonLd } from "next-seo";
import { Box } from "@theme-ui/components";
import Contactanos from "../components/landing/Contactanos";
import Resenas from "../components/landing/Resenas";
import Section1 from "../components/landing/Section1";
import Section2 from "../components/landing/Section2";
import Section3 from "../components/landing/Section3";

export default function index() {
  return (
    <Box sx={{ height: "100%", marginBottom: "200px" }}>
      <LocalBusinessJsonLd
        type="Consulting Firm"
        id="https://www.orozcorp.live"
        name="Orozcorp"
        description="Orozcorp, webapps, ecommerce, Next JS, Graph Ql, JS, Meteor JS"
        url="http://www.example.com/store-locator/sl/San-Jose-Westgate-Store/1427"
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
        rating={{
          ratingValue: "5",
          ratingCount: "4",
        }}
        review={[
          {
            author: "Catalina Ley",
            datePublished: "2023-03-01",
            name: "Desarrollo rápido y eficiente",
            reviewBody: "Desarrollo, fácil, eficiente y rápido",
            reviewRating: {
              bestRating: "5",
              worstRating: "1",
              reviewAspect: "Ambiance",
              ratingValue: "5",
            },
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
      <Section1 />
      <Section2 />
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

import { LocalBusinessJsonLd } from "next-seo";
import About from "../components/landing/about";
import Contact from "../components/landing/Contact";
import Portfolio from "../components/landing/portfolio";
import Services from "../components/landing/Services";
import Stacks from "../components/landing/Stacks";

export default function index() {
  return (
    <>
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
      <About />
      <Portfolio />
      <Stacks />
      <Contact />
      <Services />
    </>
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

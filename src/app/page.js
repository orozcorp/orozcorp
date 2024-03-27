import dynamic from "next/dynamic";
import Spinner from "../components/atoms/Spinner";

const Section0 = dynamic(() => import("./(landing)/Section0"));
const Section1 = dynamic(() => import("./(landing)/Section1"));
const Section2 = dynamic(() => import("./(landing)/Section2"));
const Products = dynamic(() => import("./(landing)/Products"));
const Section3 = dynamic(() => import("./(landing)/Section3"));
const Resenas = dynamic(() => import("./(landing)/Resenas"));
const Contactanos = dynamic(() => import("./(landing)/Contactanos"));
const Articles = dynamic(() => import("./(landing)/Articles"), {
  loading: () => <Spinner />,
});
const Quienes = dynamic(() => import("./(landing)/Quienes"));

export default function index() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Orozcorp",
    address: {
      addressCountry: "MX",
      addressLocality: "Ciudad de Mexico",
      addressRegion: "CDMX",
      postalCode: "06000",
      streetAddress: "General Miguel Aleman 32 loc d y e",
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section0 />
      <Section1 />
      <Section2 />
      <Products />
      <Section3 />
      <Resenas />
      <Contactanos />
      <Articles />
      <Quienes />
    </>
  );
}

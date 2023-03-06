import About from "../components/landing/about";
import Contact from "../components/landing/Contact";
import Portfolio from "../components/landing/portfolio";
import Stacks from "../components/landing/Stacks";

export default function index() {
  return (
    <>
      <About />

      <Stacks />

      <Contact />
      <Portfolio />
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

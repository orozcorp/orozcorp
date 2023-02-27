import About from "../components/landing/about";
import Portfolio from "../components/landing/portfolio";
import Stacks from "../components/landing/Stacks";

export default function index() {
  return (
    <>
      <About />
      <Portfolio />
      <Stacks />
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

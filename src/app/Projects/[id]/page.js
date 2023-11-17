import Carousel from "./Carousel";
import { format_date } from "../../../lib/helpers/formatters";
import dynamic from "next/dynamic";
import { getData } from "../../../lib/helpers/getData";
const Resenas = dynamic(() => import("../../(landing)/Resenas"));
const QUERY = `
  query GetPortfolioById($getPortfolioByIdId: ID!) {
    getPortfolioById(id: $getPortfolioByIdId) {
      _id
      active
      company
      date
      images
      description
      project
    }
  }
`;
export default async function Project({ params }) {
  const { id } = params;
  const portfolioQuery = await getData({
    query: QUERY,
    variables: { getPortfolioByIdId: id },
  });
  const portfolio = portfolioQuery?.getPortfolioById;
  return (
    <>
      <main className="flex flex-col flex-nowrap w-full justify-center items-center">
        <div className="flex flex-row flex-wrap p-4 w-full md:w-3/4 items-center justify-center">
          <div className="flex flex-col flex-nowrap w-full justify-start items-start">
            <h1 className={`text-5xl`}>Proyecto: {portfolio?.project}</h1>
            <h2 className={`text-3xl my-8`}>
              Empresa: {portfolio?.company}{" "}
              <small className="ml-8 text-rose-800">
                {format_date(portfolio?.date)}
              </small>
            </h2>
          </div>
        </div>
      </main>
      <div className="w-full flex flex-col flex-nowrap justify-center items-center">
        <div className="w-[85vw] overflow-scroll flex flex-row flex-nowrap gap-8 ">
          <Carousel images={portfolio?.images} title={portfolio?.project} />
        </div>
      </div>
      <section className="flex flex-col flex-nowrap w-full justify-center items-center">
        <div className="flex flex-row flex-wrap p-4 w-full md:w-3/4 items-center justify-center">
          <div className="flex flex-col flex-nowrap w-full justify-start items-start">
            <p className="my-20 whitespace-pre-line text-justify">
              {portfolio?.description}
            </p>
          </div>
        </div>
      </section>
      <Resenas />
    </>
  );
}

import Mockup from "../atoms/Mockup";
import { gql, useQuery } from "@apollo/client";
const QUERY = gql`
  query GetPortfolios {
    getPortfolios {
      _id
      company
      images
      project
      description
      date
    }
  }
`;

export default function Resenas() {
  const { data, loading, error } = useQuery(QUERY);
  const portfolios = data?.getPortfolios || [];
  return (
    <div
      className="mt-6 flex flex-col flex-nowrap justify-center items-center w-full py-16 px-8 bg-black text-white"
      id="portfolio"
    >
      <h2 className={`text-6xl font-bold mb-4`}>PROYECTOS</h2>
      <div className="font-thin text-3xl my-4">MÁS RECIENTES</div>

      <div className="w-[80vw]">
        <div className="w-full overflow-x-scroll flex flex-row flex-nowrap justify-center mx-14 my-20 h-screen">
          <div
            className="overflow-x-scroll flex gap-20 h-full "
            style={{ scrollBehavior: "smooth" }}
          >
            {portfolios?.map((portfolio) => (
              <Mockup
                key={portfolio?._id}
                img={portfolio?.images[0]}
                title={portfolio?.project}
                description={portfolio?.company}
                link={`/Projects/${portfolio?._id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

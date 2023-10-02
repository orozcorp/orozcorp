import Mockup from "../atoms/Mockup";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
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
  const [hover, setHover] = useState(false);
  return (
    <div
      className="mt-6 flex flex-col flex-nowrap justify-center items-center w-full py-16 px-2 md:px-8 bg-black text-white"
      id="portfolio"
    >
      <h2 className={`text-6xl font-bold mb-4`}>PROYECTOS</h2>
      <div className="font-thin text-3xl my-4">MÁS RECIENTES</div>

      <div className="w-[100vw] md:w-[90vw] ">
        <div className=" overflow-x-scroll flex flex-row flex-nowrap justify-center items-center mx-14 my-20 h-screen z-0">
          <div
            className={`overflow-x-scroll flex gap-16 ${
              hover ? "h-[125%]" : "h-full"
            }  flex-row flex-nowrap justify-start items-center content-end`}
            style={{ scrollBehavior: "smooth" }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
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

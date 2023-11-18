"use client";
import Mockup from "../../components/atoms/Mockup";
import { getData } from "../../lib/helpers/getData";
import { useState, useEffect } from "react";
const QUERY = `
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
  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData({ query: QUERY });
      setPortfolios(data?.getPortfolios || []);
    };
    fetchData();
  }, []);
  const [hover, setHover] = useState(false);
  return (
    <div
      className="mt-6 flex flex-col flex-nowrap justify-center items-center w-full py-16 px-2 md:px-8 bg-[#121212] text-white"
      id="portfolio"
    >
      <h2 className={`text-6xl font-bold mb-4`}>PROYECTOS</h2>
      <div className="font-thin text-3xl my-4">MÁS RECIENTES</div>

      <div className="w-[100vw] md:w-[90vw] ">
        <div className=" overflow-x-scroll flex flex-row flex-nowrap justify-center items-center mx-4 md:mx-14  h-screen z-0 ">
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

"use client";
import Mockup from "../../components/atoms/Mockup";
import { useQuery } from "@tanstack/react-query";
import { getPortfolios } from "../../server/portfolio";
import MockupLoading from "../../components/atoms/MockupLoading";
export default function Resenas() {
  const { data, isFetched } = useQuery({
    queryKey: ["getPortfolios"],
    queryFn: () => getPortfolios(),
  });
  return (
    <div
      className="mt-6 flex flex-col flex-nowrap justify-center items-center w-full py-16 px-2 md:px-8 bg-[#121212] text-white"
      id="portfolio"
    >
      <h2 className={`text-6xl font-bold mb-4 text-center`}>CASOS DE ÉXITO</h2>
      <div className="font-thin text-3xl my-4 text-center">MÁS RECIENTES</div>

      <div className="w-full md:w-[90vw] ">
        <div className=" overflow-x-scroll flex flex-row flex-nowrap justify-center items-center mx-4 md:mx-14  h-screen z-0 ">
          <div
            className={`overflow-x-scroll flex gap-16  h-full
              flex-row flex-nowrap justify-start items-center content-end`}
            style={{ scrollBehavior: "smooth" }}
          >
            {isFetched ? (
              data?.map((portfolio) => (
                <Mockup
                  key={portfolio?._id}
                  img={portfolio?.images[0]}
                  title={portfolio?.project}
                  description={portfolio?.company}
                  link={`/Projects/${portfolio?._id}`}
                />
              ))
            ) : (
              <MockupLoading />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

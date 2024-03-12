"use client";
import Carousel from "./Carousel";
import { format_date } from "../../../lib/helpers/formatters";
import dynamic from "next/dynamic";
import ScrollTop from "../../../components/atoms/ScrollTop";

const Resenas = dynamic(() => import("../../(landing)/Resenas"));

import { useQuery } from "@tanstack/react-query";
import { getPortfolioById } from "../../../server/portfolio";

export default function Project({ params }) {
  const { id } = params;
  const { data, isFetched } = useQuery({
    queryKey: ["blogGetAll"],
    queryFn: () => getPortfolioById({ id }),
  });
  if (!isFetched)
    return (
      <div className="w-40 h-32 border border-white animate-pulse text-white">
        Cargando...
      </div>
    );
  return (
    <>
      <ScrollTop />
      <main className="flex flex-col flex-nowrap w-full justify-center items-center">
        <div className="flex flex-row flex-wrap p-4 w-full md:w-3/4 items-center justify-center">
          <div className="flex flex-col flex-nowrap w-full justify-start items-start">
            <h1 className={`text-5xl`}>Proyecto: {data?.project}</h1>
            <h2 className={`text-3xl my-8`}>
              Empresa: {data?.company}{" "}
              <small className="ml-8 text-rose-800">
                {format_date(data?.date)}
              </small>
            </h2>
          </div>
        </div>
      </main>
      <div className="w-full flex flex-col flex-nowrap justify-center items-center">
        <div className="w-[85vw] overflow-scroll flex flex-row flex-nowrap gap-8 ">
          <Carousel images={data?.images} title={data?.project} />
        </div>
      </div>
      <section className="flex flex-col flex-nowrap w-full justify-center items-center">
        <div className="flex flex-row flex-wrap p-4 w-full md:w-3/4 items-center justify-center">
          <div className="flex flex-col flex-nowrap w-full justify-start items-start">
            <p className="my-20 whitespace-pre-line text-justify">
              {data?.description}
            </p>
          </div>
        </div>
      </section>
      <Resenas />
    </>
  );
}

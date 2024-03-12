"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { blogGetAll } from "../../server/articles";

export default function Articles() {
  const { data, isFetched } = useQuery({
    queryKey: ["blogGetAll"],
    queryFn: () => blogGetAll({ limit: 8 }),
  });

  return (
    <div className="bg-[#121212] text-white p-8 flex flex-col flex-nowrap justify-center items-center">
      <div className="flex flex-col flex-nowrap justify-center items-center gap-4 text-center">
        <div className="text-3xl">Tips y lecturas para impulsar</div>
        <h2 className="text-6xl font-bold mb-8 text-center">tu Negocio</h2>
      </div>
      <div className="flex flex-col lg:flex-row flex-nowrap lg:flex-wrap gap-4 w-full my-8 justify-center lg:justify-between items-center lg:items-stretch">
        {isFetched ? (
          data?.map((blog) => (
            <Link
              href={`/Articles/${blog?._id}`}
              key={blog?._id}
              className="border border-zinc-400 p-4 w-96 min-h-72 shadow-md rounded-md flex flex-col flex-nowrap justify-center items-start gap-4 hover:bg-zinc-100 hover:text-black"
            >
              <h2 className="text-2xl font-bold">{blog?.title}</h2>
              <p>{blog?.description}</p>
            </Link>
          ))
        ) : (
          <div className="w-40 h-32 border border-white animate-pulse text-white">
            Cargando...
          </div>
        )}
      </div>
      <Link href="/Articles" className="text-2xl my-12">
        VE TODOS LOS ARTÍCULOS
      </Link>
    </div>
  );
}

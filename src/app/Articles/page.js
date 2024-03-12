"use client";
import Link from "next/link";
import { format_date } from "../../lib/helpers/formatters";
import { useQuery } from "@tanstack/react-query";
import { blogGetAll } from "../../server/articles";
export default function Articles() {
  const { data, isFetched } = useQuery({
    queryKey: ["blogGetAll"],
    queryFn: () => blogGetAll({ limit: 100 }),
  });
  return (
    <div className="p-4 m-4">
      <h1 className="text-4xl font-bold">Artículos</h1>
      <div className="flex flex-col lg:flex-row flex-nowrap lg:flex-wrap gap-4 w-full my-8 justify-center lg:justify-around items-center lg:items-stretch">
        {isFetched ? (
          data?.map((blog) => (
            <Link
              href={`/Articles/${blog?._id}`}
              key={blog?._id}
              alt={blog?.title}
              className=" p-4 w-96 min-h-72 shadow-lg rounded-md flex flex-col flex-nowrap justify-stretch items-start gap-4 hover:bg-zinc-900 hover:text-white"
            >
              <div>
                <h2 className="text-2xl font-bold">{blog?.title}</h2>
                <small>{format_date(blog?.article?.publishedTime)}</small>
              </div>
              <p>{blog?.description}</p>
            </Link>
          ))
        ) : (
          <div className="w-40 h-32 border border-white animate-pulse text-white">
            Cargando...
          </div>
        )}
      </div>
    </div>
  );
}

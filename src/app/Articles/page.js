import { getData } from "../../lib/helpers/getData";
import Link from "next/link";
import { Badge } from "flowbite-react";
import { format_date } from "../../lib/helpers/formatters";
const QUERY = `
query BlogGetAll($limit: Int!) {
  blogGetAll(limit: $limit) {
    _id
    description
    title
    article {
      tags
      publishedTime
    }
  }
}
`;

export default async function Articles() {
  const data = await getData({ query: QUERY, variables: { limit: 100 } });
  const blogs = data?.blogGetAll || [];
  return (
    <div className="p-4 m-4">
      <h1 className="text-4xl font-bold">Artículos</h1>
      <div className="flex flex-col lg:flex-row flex-nowrap lg:flex-wrap gap-4 w-full my-8 justify-center lg:justify-around items-center lg:items-stretch">
        {blogs.map((blog) => (
          <Link
            href={`/Articles/${blog?._id}`}
            key={blog?._id}
            alt={blog?.title}
            className=" p-4 w-72 min-h-72 shadow-lg rounded-md flex flex-col flex-nowrap justify-stretch items-start gap-4 hover:bg-zinc-900 hover:text-white"
          >
            <div>
              <h2 className="text-2xl font-bold">{blog?.title}</h2>
              <small>{format_date(blog?.article?.publishedTime)}</small>
            </div>
            <p>{blog?.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

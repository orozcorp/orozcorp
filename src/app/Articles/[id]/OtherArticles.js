import { getData } from "../../../lib/helpers/getData";
import Link from "next/link";
const QUERY = `
query BlogGetAll($limit: Int!) {
  blogGetAll(limit: $limit) {
    _id
    description
    title
  }
}
`;

export default async function OtherArticles() {
  const data = await getData({ query: QUERY, variables: { limit: 3 } });
  const blogs = data?.blogGetAll || [];
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold">Articles you might enjoy</h1>
      <div className="flex flex-col lg:flex-row flex-nowrap lg:flex-wrap gap-4 w-full my-8 justify-center lg:justify-between items-center lg:items-stretch">
        {blogs.map((blog) => (
          <Link
            href={`/Articles/${blog?._id}`}
            key={blog?._id}
            className="border border-zinc-400 p-4 w-72 min-h-72 shadow-md rounded-md flex flex-col flex-nowrap justify-start items-start gap-4"
          >
            <h2 className="text-2xl font-bold">{blog?.title}</h2>
            <p className="text-gray-500">{blog?.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

import { getData } from "../../lib/helpers/getData";
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

export default async function Articles() {
  const data = await getData({ query: QUERY, variables: { limit: 8 } });
  const blogs = data?.blogGetAll || [];
  return (
    <div className="bg-[#121212] text-white p-8">
      <h1 className="text-6xl font-bold mb-8 text-center">Artículos</h1>
      <div className="flex flex-col lg:flex-row flex-nowrap lg:flex-wrap gap-4 w-full my-8 justify-center lg:justify-between items-center lg:items-stretch">
        {blogs.map((blog) => (
          <Link
            href={`/Articles/${blog?._id}`}
            key={blog?._id}
            className="border border-zinc-400 p-4 w-72 min-h-72 shadow-md rounded-md flex flex-col flex-nowrap justify-start items-start gap-4 hover:bg-zinc-100 hover:text-black"
          >
            <h2 className="text-2xl font-bold">{blog?.title}</h2>
            <p>{blog?.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

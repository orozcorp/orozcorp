import Link from "next/link";
import { format_date } from "../../lib/helpers/formatters";
import { blogGetAll } from "../../server/articles";
export async function generateMetadata({ params }) {
  const id = params.id;
  const portfolio = await blogGetAll({ id });
  const keywords = [
    "Orozcorp",
    "Desarrollo Web",
    "Next JS",
    "GraphQL",
    "JavaScript",
    "Digital Solutions",
    "Web Development Parnter",
    "CRM",
    "ERP",
  ];
  portfolio?.keywords?.map((val) => keywords.push(val));
  return {
    metadataBase: new URL(`https://orozcorp.live/Projects/${id}`),
    title: `${portfolio?.project} - ${portfolio?.company} -  by Orozcorp`,
    description: portfolio?.descriptionMeta,
    image: portfolio?.images[0],
    date: portfolio?.date,
    type: "article",
    url: `https://orozcorp.live/Projects/${id}`,
    keywords: keywords,
    twitter: {
      card: "summary_large_image",
      title: portfolio?.project,
      creator: "@orozcorp_io",
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: portfolio?.project,
      description: portfolio?.descriptionMeta,
      image: portfolio?.images[0],
      date: portfolio?.date,
      type: "article",
      url: `https://orozcorp.live/Projects/${id}`,
      keywords: keywords,
      article: {
        publishedTime: portfolio?.date,
        modifiedTime: portfolio?.date,
        authors: ["https://www.orozcorp.io"],
        tags: keywords,
      },
    },
  };
}
export default async function Articles() {
  const data = await blogGetAll({ limit: 100 });
  return (
    <div className="p-4 m-4">
      <h1 className="text-4xl font-bold">Artículos</h1>
      <div className="flex flex-col lg:flex-row flex-nowrap lg:flex-wrap gap-4 w-full my-8 justify-center lg:justify-around items-center lg:items-stretch">
        {data?.map((blog) => (
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
        ))}
      </div>
    </div>
  );
}

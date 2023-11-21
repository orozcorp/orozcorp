import parse from "html-react-parser";

import { getData } from "../../../lib/helpers/getData";
import OtherArticles from "./OtherArticles";
const QUERY = `
  query BlogGetById($id: ID!) {
    blogGetById(_id: $id) {
      _id
      article {
        tags
        publishedTime
        modifiedTime
        expirationTime
        authors
      }
      content
      description
      images {
        alt
        height
        url
        width
      }
      title
    }
  }
`;

export async function generateMetadata({ params }) {
  const { id } = params;
  const data = await getData({ query: QUERY, variables: { id } });
  const blog = data?.blogGetById || {};
  return {
    title: blog?.title,
    description: blog?.description,
    metadataBase: new URL(`https://orozcorp.live/Articles/${id}`),
    openGraph: {
      images: blog?.images?.map((image) => image.url),
      title: blog?.title,
      description: blog?.description,
      image: blog?.images?.[0]?.url,
      date: blog?.article?.publishedTime,
      type: "article",
      url: `https://www.orozcorp.live/Articles/${id}`,
      keywords: blog?.article?.tags,
      article: {
        publishedTime: blog?.article?.publishedTime,
        modifiedTime: blog?.article?.modifiedTime,
        expirationTime: blog?.article?.expirationTime,
        authors: blog?.article?.authors,
        tags: blog?.article?.tags,
      },
    },
  };
}

export default async function Article({ params }) {
  const { id } = params;
  const data = await getData({ query: QUERY, variables: { id } });
  const blog = data?.blogGetById || {};
  return (
    <>
      <div className="flex flex-col flex-nowrap w-full justify-start items-start">
        <div className="my-16 w-full break-words text-justify">
          <h1 className="text-4xl font-bold my-6">{blog.title}</h1>
          <div className="my-6 flex flex-row flex-wrap gap-2">
            {blog?.article?.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          {parse(blog?.content || "")}
        </div>
        <OtherArticles />
      </div>
    </>
  );
}

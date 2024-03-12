import { getData } from "../../lib/helpers/getData";
const QUERY = `
  query GetPortfolioById($getPortfolioByIdId: ID!) {
    getPortfolioById(id: $getPortfolioByIdId) {
      _id
      active
      company
      date
      images
      description
      project
      keywords
      descriptionMeta
    }
  }
`;
export async function generateMetadata({ params }) {
  const id = params.id;
  const portfolioQuery = await getData({
    query: QUERY,
    variables: { getPortfolioByIdId: id },
  });
  const portfolio = portfolioQuery?.getPortfolioById;
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

export default function layout({ children }) {
  return <>{children}</>;
}

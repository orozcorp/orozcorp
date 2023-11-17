import { connectToDatabase } from "../lib/mongodb";

const EXTERNAL_DATA_URL = "https://www.orozcorp.live/Projects";

async function generateSiteMap({ projects }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      <url>
        <loc>https://www.orozcorp.live</loc>
      </url>
            <url>
        <loc>https://www.orozcorp.live/Products/ChatDigest</loc>
      </url>
            <url>
        <loc>https://www.orozcorp.live/Products/WhatsBlast</loc>
      </url>
            <url>
        <loc>https://www.orozcorp.live/Products/WhatsCRM</loc>
      </url>
     ${projects
       .map(({ _id }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${_id.toString()}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}
function SiteMap() {
  // getServerSideProps will do the heavy lifting
}
export async function getServerSideProps({ res }) {
  const { db } = await connectToDatabase();
  const projects = await db
    .collection("Portfolio")
    .find({}, { projection: { _id: 1 } })
    .toArray();
  const sitemap = await generateSiteMap({ projects });
  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
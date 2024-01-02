export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/User/",
    },
    sitemap: "https://www.orozcorp.live/sitemap.xml",
  };
}

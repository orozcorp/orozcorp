import { ImageResponse } from "next/og";
import { blogGetById } from "../../../server/articles";
export const runtime = "edge";

export const alt = "Article Orozcorp";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }) {
  const post = await blogGetById({ id: params.id });

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {post.title}
      </div>
    ),
    {
      ...size,
    }
  );
}

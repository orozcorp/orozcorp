import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 40,
          color: "white",
          background: "black",
          width: "100%",
          height: "100%",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/TECBOY+FACE.svg"
          width="256"
          height="256"
          alt="Orzcorp"
        />
        <p>Orozcorp</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

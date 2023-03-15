import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 40,
          color: 'white',
          background: 'black',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/TECBOY+FACE.svg"  width="256"
          height="256"/>
        <p>Orozcorp</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

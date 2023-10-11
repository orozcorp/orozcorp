import { useState } from "react";

import useWindowSize from "../../../components/hooks/useWindowSize";
import ImageDesktop from "./ImageDesktop";
import ImageMobile from "./ImageMobile";

export default function ImagesCarousel() {
  const [images, setImages] = useState([
    "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-10+at+5.16.02%E2%80%AFPM.png",
    "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-10+at+4.21.58%E2%80%AFPM.png",
    "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-10+at+5.28.05%E2%80%AFPM.png",
  ]);
  const size = useWindowSize();
  const width = size.width;

  return (
    <>
      {width < 768 ? (
        <ImageMobile images={images} setImages={setImages} />
      ) : (
        <ImageDesktop images={images} setImages={setImages} />
      )}
    </>
  );
}

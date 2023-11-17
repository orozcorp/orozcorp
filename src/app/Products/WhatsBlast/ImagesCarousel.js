"use client";
import { useState } from "react";

import useWindowSize from "../../../components/hooks/useWindowSize";
import ImageDesktop from "./ImageDesktop";
import ImageMobile from "./ImageMobile";

export default function ImagesCarousel({ initialImages }) {
  const [images, setImages] = useState(initialImages);
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

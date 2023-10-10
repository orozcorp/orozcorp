import Image from "next/image";
import { useState } from "react";

export default function ImagesCarousel() {
  const [images, setImages] = useState([
    "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-10+at+5.16.02%E2%80%AFPM.png",
    "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-10+at+4.21.58%E2%80%AFPM.png",
    "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/Screenshot+2023-10-10+at+5.28.05%E2%80%AFPM.png",
  ]);

  const rotateToMiddle = (index) => {
    let newImages = [...images];
    if (index === 0) {
      newImages = [images[1], images[0], images[2]];
    } else if (index === 2) {
      newImages = [images[0], images[2], images[1]];
    }
    setImages(newImages);
  };

  return (
    <div className="my-24 relative flex flex-row flex-nowwrap justify-center items-center overflowX-auto">
      <Image
        src={images[0]}
        alt="WhatsBlast: Tu Asistente de Mensajería Masiva"
        width={600}
        height={600}
        className="rounded-lg  z-1 absolute left-4 opacity-50 duration-1000 ease-in"
        onClick={() => rotateToMiddle(0)}
      />

      <Image
        src={images[1]}
        alt="WhatsBlast: Tu Asistente de Mensajería Masiva"
        width={800}
        height={800}
        className="rounded-lg shadow-2xl z-50 duration-1000 ease-in"
      />

      <Image
        src={images[2]}
        alt="WhatsBlast: Tu Asistente de Mensajería Masiva"
        width={600}
        height={600}
        className="rounded-lg  z-1 absolute right-4 opacity-50 duration-1000 ease-in"
        onClick={() => rotateToMiddle(2)}
      />
    </div>
  );
}

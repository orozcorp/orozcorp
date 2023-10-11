import Image from "next/image";
export default function ImageMobile({ images, setImages }) {
  return (
    <>
      <div className="my-24 relative gap-8 flex flex-col flex-nowrap justify-center items-center m-4 p-4">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="WhatsBlast: Tu Asistente de Mensajería Masiva"
            width={600}
            height={600}
            className="rounded-lg "
          />
        ))}
      </div>
    </>
  );
}

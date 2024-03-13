import Image from "next/image";
export default function ResenaSingle({ data }) {
  return (
    <div className="mb-4 p-2 flex flex-col flex-nowrap justify-center items-center w-full">
      <h2 className="my-2 text-4xl font-bold text-center">{data.mensaje}</h2>
      <div className="mt-3 flex flex-row flex-nowrap justify-between content-center items-center">
        <Image
          src={data.logo}
          width={40}
          height={40}
          style={{ borderRadius: "999px" }}
          alt={data.cliente}
        />
        <h3 className="mx-2 text-white text-2xl">{data.cliente}</h3>
      </div>
    </div>
  );
}

import Sec1Box from "./Sec1Box";
export default function Section1() {
  return (
    <div className="flex flex-col flex-nowrap bg-zinc-900 pt-12 pb-20">
      <div className="p-8 w-full">
        <h2 className="my-8 text-4xl text-zinc-300 w-full text-center lg:text-left">
          Creamos apps, webs y catálogos digitales que impulsan tu negocio.
          <p className="my-4">Entendiendo tu empresa paso a paso</p>
        </h2>
      </div>
      <div className="p-8  text-zinc-100 text-center text-6xl">
        Nuestro Proceso
      </div>
      <div className="mt-8 flex flex-row flex-wrap justify-evenly items-center gap-12">
        <Sec1Box title="Define Proyecto" number="1" />
        <Sec1Box title="Incrementa Valor" number="2" />
        <Sec1Box title="Genera Resultados" number="3" />
      </div>
    </div>
  );
}

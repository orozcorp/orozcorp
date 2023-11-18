import Sec1Box from "./Sec1Box";
export default function Section1() {
  return (
    <div className="flex flex-col flex-nowrap bg-zinc-900 py-8">
      <div className="p-8 w-full">
        <h2 className="my-8 text-4xl text-zinc-300 w-full text-center lg:text-left lg:max-w-4xl">
          Te ayudamos a crear tu app, tu página, tu catálogo o tu idea. Logramos
          que emprendas, o mejores tu sitio con la mayor facilidad e impacto.
        </h2>
        <div className="my-4 text-8xl text-white text-center lg:text-left">
          Aumenta la eficiencia en cada paso.
        </div>
      </div>
      <div className="p-8  text-zinc-100 text-center text-6xl">
        Nuestro Proceso
      </div>
      <div className="mt-8 flex flex-row flex-wrap justify-evenly items-center gap-6">
        <Sec1Box title="Define Proyecto" number="1" />
        <Sec1Box title="Incrementa Valor" number="2" />
        <Sec1Box title="Genera Resultados" number="3" />
      </div>
    </div>
  );
}

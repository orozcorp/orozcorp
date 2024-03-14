import Link from "next/link";
export default function Section0() {
  return (
    <div className="flex flex-col flex-nowrap min-h-screen items-center justify-center p-4 gap-20 lightBackground">
      <div className="flex flex-row flex-wrap w-full lg:w-3/4 justify-center items-center">
        <h1 className="text-zinc-800 text-center text-8xl py-24">
          Tú lo imaginas, nosotros lo creamos
        </h1>
      </div>
      <h2 className="text-center text-2xl">
        Orozcorp: Tu Partner en Desarrollo Web y Aplicaciones Móviles
      </h2>
      <button className="my-8 text-white bg-red-700 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2">
        <Link href="#crearProductos" passHref>
          Averigua cómo
        </Link>
      </button>
    </div>
  );
}

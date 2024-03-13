export default function Section3() {
  return (
    <div className="mt-8 p-8 flex flex-col flex-nowrap justify-center lg:justify-start items-center lg:items-start w-full">
      <h2 className="text-6xl text-zinc-600 text-center lg:text-left">
        Habilidades y capacidades
      </h2>
      <div className="mt-4 text-4xl text-zinc-900 font-bold text-center lg:text-left">
        Todo lo que necesitas para crear y lanzar un producto digital
      </div>
      <div className="my-16 flex flex-col gap-16 flex-nowrap lg:flex-row lg:flex-wrap justify-center lg:justify-around content-start items-center lg:items-start w-full">
        <div className="w-64 lg:w-[30rem]">
          <div className="flex flex-row flex-wrap content-center items-center bg-zinc-900 rounded-xl p-4">
            <div className="mx-6 text-zinc-400 text-2xl">01</div>
            <div className="text-white text-xl">Estrategia</div>
          </div>
          <ul style={{ marginTop: "24px", fontSize: "24px" }}>
            <li>Estrategia de Producto</li>
            <li>Descubrimiento de Clientes</li>
            <li>Investigación de usuario</li>
            <li>Valoraciones Financieras</li>
            <li>Análisis de Business Plan</li>
          </ul>
        </div>
        <div className="w-64 lg:w-[30rem]">
          <div className="flex flex-row flex-wrap content-center items-center bg-zinc-900 rounded-xl p-4">
            <div className="mx-6 text-zinc-400 text-2xl">02</div>
            <div className="text-white text-xl">Diseño</div>
          </div>
          <ul style={{ marginTop: "24px", fontSize: "24px" }}>
            <li>Diseño relámpago</li>
            <li>Wireframing</li>
            <li>Crear prototipo</li>
            <li>Branding</li>
          </ul>
        </div>
        <div className="w-64 lg:w-[30rem]">
          <div className="flex flex-row flex-wrap content-center items-center bg-zinc-900 rounded-xl p-4">
            <div className="mx-6 text-zinc-400 text-2xl">03</div>
            <div className="text-white text-xl">Desarrollo</div>
          </div>
          <ul style={{ marginTop: "24px", fontSize: "24px" }}>
            <li>Web App</li>
            <li>Data Schema</li>
            <li>Javascript, Node JS</li>
            <li>React, Next JS</li>
            <li>GraphQL, Mongo</li>
          </ul>
        </div>
        <div className="w-64 lg:w-[30rem]">
          <div className="flex flex-row flex-wrap content-center items-center bg-zinc-900 rounded-xl p-4">
            <div className="mx-6 text-zinc-400 text-2xl">04</div>
            <div className="text-white text-xl">Gestión</div>
          </div>
          <ul style={{ marginTop: "24px", fontSize: "24px" }}>
            <li>Roadmapping</li>
            <li>Planeación de ciclos</li>
            <li>Hosting y mantenimiento</li>
            <li>Optimización de costos</li>
            <li>Análisis de base de datos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

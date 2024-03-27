import React from "react";

export default function Quienes() {
  return (
    <div className="flex flex-col flex-nowrap justify-center items-center w-full my-12">
      <div className="flex flex-col flex-nowrap w-[90%]">
        <section>
          <h2 className="text-6xl text-zinc-600 text-center lg:text-left">
            Quiénes Somos
          </h2>
          <p>
            En Orozcorp, creemos en el poder de la tecnología para transformar
            negocios. Somos tu partner estratégico en desarrollo web y
            aplicaciones móviles. Con una trayectoria sólida y un enfoque en la
            innovación, nuestra misión es llevar tu visión al siguiente nivel.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-bold">Nuestra Filosofía</h3>
          <p>
            "Tú lo imaginas, nosotros lo creamos". Esta idea está en el corazón
            de todo lo que hacemos. Nuestro equipo de expertos trabaja codo a
            codo contigo para convertir tus ideas en soluciones digitales de
            alto impacto.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-bold">Nuestro Equipo</h3>
          <p>
            Formado por una comunidad de mercadólogos, desarrolladores y
            empresarios, nuestro equipo no solo construye productos; creamos
            experiencias que conectan y transforman.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-bold">Por Qué Elegirnos</h3>
          <ul className="flex flex-col flex-nowrap gap-4 my-4">
            <li>
              Innovación Continua: Nos mantenemos a la vanguardia de la
              tecnología.
            </li>
            <li>
              Comprensión Profunda del Mercado: Conocemos las tendencias y
              dinámicas.
            </li>
            <li>
              Enfoque en Resultados: Nuestro éxito se mide por el impacto en tu
              negocio.
            </li>
            <li>
              Soporte y Mantenimiento: Ofrecemos soporte continuo para tus
              soluciones digitales.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

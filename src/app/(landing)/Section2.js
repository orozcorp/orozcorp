import dynamic from "next/dynamic";
const Sec2Box = dynamic(() => import("./Sec2Box"), { ssr: false });
export default function Section2() {
  return (
    <div
      className="pt-8 flex flex-col flex-nowrap justify-center items-center lightBackground"
      id="crearProductos"
    >
      <h2 className="text-5xl text-center w-3/4 my-8">
        ¡Prepárate para aterrizar tu idea con nuestro método infalible!
      </h2>
      <div className="my-8 p-2 lg:p-16 flex flex-col flex-nowrap justify-around items-center lg:flex-row lg:flex-wrap lg:justify-evenly lg:items-stretch gap-8">
        <Sec2Box
          title={"Descubrimiento"}
          text="Nuestros estrategas trabajan para definir el problema, hallar
            oportunidades de negocios y usuarios meta. Ayúdamos a transformar tu
            visión en el producto digital planeado"
          textExpanded="En Orozcorp, definimos problemas y hallamos oportunidades de negocio, transformando visiones en productos digitales innovadores con tecnologías avanzadas"
          imageMob="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/landing/descubrimiento-web.jpg"
          image="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/landing/descubrimiento-mobile.jpg"
        />
        <Sec2Box
          title={"Diseño relámpago"}
          text="Un proceso por paso para resolver problemas gigantescos, crear
            nuevos productos, mejorar productos existentes. Comprimimos meses de
            trabajo en pocas semanas, resultando en un prototipo de alta
            fidelidad y probado por usuarios reales."
          textExpanded="Agilizamos la creación de prototipos de alta fidelidad en semanas, solucionando problemas complejos para nuevos o existentes productos"
          image="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/landing/diseno-web.jpg"
          imageMob="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/landing/diseno-mobile.jpg"
        />
        <Sec2Box
          title={"Versión 1"}
          text="Desarrollo eficiente y veloz de un nuevo producto digital con un
            equipo dedicado a tu proyecto. Con un equipo multidisciplinario para
            un resultado óptimo."
          textExpanded="Desarrollo rápido de productos digitales con un equipo multidisciplinario dedicado a tu proyecto para resultados óptimos."
          image="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/landing/version1-web.jpg"
          imageMob="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/landing/version1-mobile.jpg"
        />
        <Sec2Box
          title={"Equipo de desarrollo"}
          text="Un equipo dedicado de mercadólogos, desarrolladores, y empresarios,
            te llevan de la mano para mejorar e iterar sobre las versiones ya
            establecidas. Para un rendimiento y funcionalidad óptima."
          textExpanded="Nuestro equipo especializado te asiste en mejorar e iterar versiones existentes, asegurando rendimiento y funcionalidad óptimos"
          image="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/landing/equipo-web.jpg"
          imageMob="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/landing/equipo-mobile.jpg"
        />
        <Sec2Box
          title={"Mantenimiento y soporte"}
          text=" ¿No requieres más desarrollo? No hay problema, a través de contratos
            anuales continuamos ofreciéndote soporte en todo momento."
          textExpanded="Ofrecemos soporte continuo, incluso sin desarrollo activo, a través de contratos anuales"
          image="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/landing/mantenimiento-web.jpg"
          imageMob="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/landing/mantenimiento-mobile.jpg"
        />
      </div>
    </div>
  );
}

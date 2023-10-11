import Image from "next/image";
import React from "react";

export default function ProductFeatures() {
  const features = [
    {
      name: "Resúmenes a la Carta",
      description:
        "Elimina el caos de tu bandeja de entrada. Con ChatDigest, personaliza tus resúmenes diarios y recibe solo lo que realmente importa. ¡Es como tener un asistente personal para tus chats!",
      image:
        "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/orozcorp_an_android_giving_an_envelope_to_a_human_in_a_well_lit_d2fbac06-1eb0-457e-9dab-a28613ada98c.jpg",
    },
    {
      name: "Oportunidades en el Radar",
      description:
        "Descubre oro en tus conversaciones. Nuestra IA detecta oportunidades y situaciones críticas que necesitan tu atención inmediata. ¡No más oportunidades perdidas!",
      image:
        "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/orozcorp_an_airplane_cockpit_8868ffe8-dc9a-4f39-a889-268da683d9ee.jpg",
    },
    {
      name: "Termómetro Emocional",
      description:
        "Entiende el pulso de tus clientes. ChatDigest analiza el tono de cada conversación para que sepas exactamente cómo abordar a cada cliente.",
      image:
        "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/orozcorp_a_mercury_thermometer_and_emojis_in_the_background_hap_d1ed3529-5d93-4529-8c38-d653cf21b882.jpg",
    },
    {
      name: "Tu Resumen, Tu Horario",
      description:
        "Información fresca cuando la necesitas. Programa la entrega de tu resumen diario para que siempre estés un paso adelante.",
      image:
        "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/orozcorp_clocks_minimalistic_happy_colors_0b523170-dedb-4dbd-9716-32cdf6cd1fc1.jpg",
    },
    {
      name: "Habla el Idioma de Tus Clientes, Sin Esfuerzo",
      description:
        "¿Negocios globales? ¡Desafío aceptado! Con ChatDigest, rompe las barreras del idioma en un instante. Traduce todo el resumen de tus conversaciones al idioma que elijas y conecta con tus clientes como nunca antes. ¡Haz que cada palabra cuente!",
      image:
        "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/orozcorp_conversation_bubbles_in_different_languages__minimalis_9752d96f-264e-4299-8a13-0b405d9aea28.jpg",
    },
  ];
  return (
    <div className="bg-[#121212] py-16">
      <div className="w-full p-4   rounded-lg shadow sm:p-8 ">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-5xl font-bold leading-none text-white my-12 pl-2 md:pl-8">
            Características de WhatsBlast
          </h2>
        </div>
        <div className="flow-root">
          <div className="flex flex-col md:flex-row flex-nowrap md:flex-wrap gap-8 justify-between ">
            {features.map((feature, index) => (
              <div key={index} className="py-3 sm:py-4  rounded px-8 max-w-lg ">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      className="w-20 h-20 rounded-full shadow-md shadow-gray-600"
                      src={feature.image}
                      alt={`${feature.name} image`}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-2xl  text-white  font-bold">
                      {feature.name}
                    </p>
                    <p className="text-sm text-gray-50  ">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

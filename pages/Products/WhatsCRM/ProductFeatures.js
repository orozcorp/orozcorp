import Image from "next/image";
import React from "react";

export default function ProductFeatures() {
  const features = [
    {
      name: "Integración Flexible: Tu CRM, Nuestro Poder",
      description:
        "¿Ya tienes un CRM? Genial. ¿No tienes? También genial. WhatsCRM se adapta a ti, no al revés. Conéctate con cualquier CRM que tenga API y lleva tus ventas al siguiente nivel.",
      image:
        "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/orozcorp_a_phone_surrounded_by_icons_of_envelopes_minimalistic__cc70657c-5e76-4943-9046-549d1b8a031d.jpg",
    },
    {
      name: "Inventario al Alcance de tu Mano: Cierra Ventas en un Pestañeo",
      description:
        "¿Necesitas saber qué tienes en stock? ¡Boom! Ahí lo tienes. Con WhatsCRM, tu inventario está siempre a un clic de distancia. Cierra ventas al instante y deja a tus clientes boquiabiertos.",
      image:
        "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/orozcorp_a_dashboard_with_graphs_minimalistic__japanese_style_92be781d-6a1b-4014-a634-dcedf2317323.jpg",
    },
    {
      name: "Comparte lo que Quieras: Más que Palabras",
      description:
        "¿Una imagen vale más que mil palabras? Entonces, ¿qué tal un video? Con WhatsCRM, envía documentos, imágenes y videos de hasta 50 MB. Convence, impresiona, cierra la venta.",
      image:
        "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/orozcorp_three_icons_of_users_surrounded_by_circles_that_overla_3d741583-c674-4634-8886-05ea14ee8a68.jpg",
    },
    {
      name: "Registro de Ventas: Tu Éxito, Nuestros Números",
      description:
        "¿Quieres saber cómo vas? Consulta todas tus ventas en un solo lugar. Y si ya tienes un ERP con API, lo conectamos para que no pierdas detalle.",
      image:
        "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/orozcorp_thousands_of_icons_of_users_viewing_their_phone_minima_7f61c608-9c23-4fce-bfe5-9b6163cc1328.jpg",
    },
    {
      name: "Seguridad de Primera: Tus Conversaciones son Sagradas",
      description:
        "¿Preocupado por la seguridad? Descansa tranquilo. Con el cifrado de extremo a extremo de WhatsCRM, tus conversaciones están más seguras que Fort Knox.",
      image:
        "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/orozcorp_a_clock_with_hands_grabing_a_cellphone_minimalistic_35599e59-5d3e-4801-ac12-53f10cdbe509.jpg",
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

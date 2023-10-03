import Image from "next/image";
import { motion } from "framer-motion";
import ProductFeatures from "./ProductFeatures";
import ProductInformation from "./ProductInformation";
import Contactanos from "../../../components/landing/Contactanos";
export default function WhatsBlast() {
  return (
    <>
      <div className="flex flex-col md:flex-row flex-nowrap md:flex-wrap items-center justify-center gap-8 md:gap-20 mb-12 py-12">
        <motion.button
          initial={{ scale: 0, opacity: 0.3 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Image
            className="rounded-t-lg"
            src="https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/orozcorp_envelopes.png"
            alt="WhatsBlast: Tu Asistente de Mensajería Masiva"
            width={300}
            height={300}
          />
        </motion.button>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">WhatsBlast</h1>
          <p className="text-xl md:text-3xl my-2 md:my-8">
            Tu Asistente de Mensajería Masiva
          </p>
        </div>
      </div>
      <ProductFeatures />
      <div className="flex flex-col flex-nowrap md:flex-row md:flex-wrap  justify-between items-stretch gap-16 my-8 p-8 md:p-20">
        <ProductInformation
          head="🌟 Haz que cada cliente se sienta único"
          description="Con WhatsBlast, olvídate de enviar mensajes uno por uno. Envía mensajes de WhatsApp personalizados a todos tus clientes en un solo clic. Haz que cada cliente se sienta especial y único, mejorando así la relación con ellos."
        />
        <ProductInformation
          head="📊 Estadísticas que te hablan"
          description="¿Quieres saber qué tan efectivos son tus mensajes? WhatsBlast te ofrece estadísticas en tiempo real. Descubre cuántos mensajes has enviado, quiénes los han abierto y quiénes han respondido. Y si quieres ir más allá, tenemos análisis de tono y resumen de respuestas por un precio adicional."
        />
        <ProductInformation
          head="❤️ Habla el idioma de tus clientes"
          description="Segmenta a tus clientes según tus necesidades y los atributos que tu CRM te proporciona. Envía mensajes que hablen directo al corazón de tus clientes, mejorando la efectividad de tus campañas."
        />
        <ProductInformation
          head="💌  Mensajes sin límites... casi"
          description="¿Tienes algo grande que decir? Con WhatsBlast puedes enviar hasta 5,000 mensajes al día. Así que no te cortes y llega a todos tus clientes."
        />
        <ProductInformation
          head="☕ Programa y relájate"
          description="¿Quieres más tiempo para ti? Programa tus mensajes para que se envíen cuando tú quieras. Así podrás disfrutar de tu café mientras WhatsBlast hace el trabajo duro por ti. Esta función está disponible por un precio adicional."
        />
        <ProductInformation
          head="🔒 Seguridad que puedes confiar"
          description="Utilizamos el API de WhatsApp para garantizar la máxima seguridad en cada mensaje que envías."
        />
        <ProductInformation
          head="🌐 Accesible desde cualquier lugar"
          description="Ya sea desde tu computadora o tu celular, accede a WhatsBlast desde cualquier dispositivo con internet y un navegador."
        />
        <ProductInformation
          head="🛠️  Integraciones y más"
          description="WhatsBlast es una aplicación independiente, pero si lo prefieres, se integra perfectamente con plataformas open source de CRM. Además, por un precio adicional, podemos integrarlo directamente en tu webapp para una personalización completa."
        />
      </div>
      <Contactanos bgColor="black" />
    </>
  );
}

import Image from "next/image";
import { motion } from "framer-motion";
import ProductFeatures from "./ProductFeatures";
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
    </>
  );
}

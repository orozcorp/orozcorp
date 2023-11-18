"use client";
import React, { memo } from "react";
import Link from "next/link";
import ReactRotatingText from "react-rotating-text";
import { motion } from "framer-motion";

const RotatingText = memo(() => (
  <ReactRotatingText
    items={["Página", "ERP", "CRM", "Tienda"]}
    color="#9f1239"
  />
));

export default function Section0() {
  return (
    <div className="flex flex-col flex-nowrap min-h-screen items-center justify-center p-4 gap-20">
      <div className="flex flex-row flex-wrap justify-center items-basiline">
        <div className="text-8xl text-center">De ideas a tu</div>
        <div className="ml-4 text-8xl font-bold underline text-rose-800">
          <RotatingText />
        </div>
      </div>
      <div className="flex flex-row flex-wrap w-full lg:w-3/4 justify-center items-center">
        <div className="text-zinc-800 text-center text-5xl">
          Tú lo imaginas, nosotros lo creamos
        </div>
      </div>

      <motion.button
        className="my-8 text-white bg-rose-800 hover:bg-rose-900 focus:outline-none focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="#crearProductos" passHref>
          Averigua cómo
        </Link>
      </motion.button>
    </div>
  );
}

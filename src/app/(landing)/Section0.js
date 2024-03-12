"use client";
import React, { memo } from "react";
import Link from "next/link";
import ReactRotatingText from "react-rotating-text";

const RotatingText = memo(() => (
  <ReactRotatingText
    items={["Página", "ERP", "CRM", "Tienda"]}
    color="rgb(185 28 28)"
  />
));

export default function Section0() {
  return (
    <div className="flex flex-col flex-nowrap min-h-screen items-center justify-center p-4 gap-20">
      <div className="flex flex-row flex-wrap justify-center items-basiline">
        <div className="text-8xl text-center">De ideas a tu</div>
        <div className="ml-4 text-8xl font-bold underline text-red-700">
          <RotatingText />
        </div>
      </div>
      <div className="flex flex-row flex-wrap w-full lg:w-3/4 justify-center items-center">
        <h1 className="text-zinc-800 text-center text-5xl">
          Tú lo imaginas, nosotros lo creamos
        </h1>
      </div>

      <button className="my-8 text-white bg-red-700 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2">
        <Link href="#crearProductos" passHref>
          Averigua cómo
        </Link>
      </button>
    </div>
  );
}

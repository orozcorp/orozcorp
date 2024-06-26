"use client";
import Image from "next/image";
import Link from "next/link";
import { rgbDataURL } from "../../lib/helpers/blur";
import { motion } from "framer-motion";
export default function Mockup({ img, title, description, link }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
    >
      <div className="flex flex-col flex-nowrap justify-center items-center my-4 max-w-sm z-50">
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl ">
          <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
            <Image
              src={img}
              className="w-[310px] h-[572px] border overflow-hidden object-cover object-center"
              width={310}
              height={572}
              alt={title}
              blurDataURL={rgbDataURL(0, 0, 0)}
              loading="lazy"
            />
          </div>
        </div>
        {description && <div className="my-4 font-bold">{description}</div>}
        {link && (
          <Link
            href={link}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-zinc-800 rounded-lg hover:bg-zinc-950 focus:ring-4 focus:outline-none focus:ring-zinc-300"
          >
            detalles del proyecto
          </Link>
        )}
      </div>
    </motion.div>
  );
}

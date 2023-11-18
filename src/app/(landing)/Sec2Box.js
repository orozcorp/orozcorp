"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useWindowSize from "../../components/hooks/useWindowSize";
import Image from "next/image";
export default function Sec2Box({
  title,
  text,
  image,
  imageMob,
  textExpanded,
}) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want to trigger again whenever it comes in view
  });
  const [active, setActive] = useState(false);
  const size = useWindowSize();
  const width = size.width;
  const isMobile = width < 640;
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ rotate: inView ? 360 : 0, scale: inView ? 1 : 0 }}
      ref={ref}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setActive(!active)}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={`${active ? "w-[80vw]" : "w-80"}  rounded-2xl shadow-2xl`}
    >
      <div
        className={`p-4 ${
          active ? "lg:p-0" : "lg:p-8"
        } flex flex-row flex-wrap h-full justify-between items-start `}
      >
        <div
          className={`flex flex-col flex-nowrap ${
            active && "max-w-sm p-4 items-center justify-center w-full h-full"
          }`}
        >
          <h3 className="mb-2 text-zinc-800 text-xl font-bold">{title}</h3>
          <div className="text-zinc-800 text-md text-center">{text}</div>
          {active && (
            <div className="text-zinc-400 text-sm text-center my-8">
              {textExpanded}
            </div>
          )}
        </div>
        {active && (
          <Image
            src={isMobile ? imageMob : image}
            width={isMobile ? 300 : 600}
            height={300}
            alt={title}
          />
        )}
      </div>
    </motion.button>
  );
}

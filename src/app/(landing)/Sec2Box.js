"use client";
import { useState, useMemo, useCallback } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
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
  const isMobile = useMemo(() => size.width < 640, [size.width]);
  const toggleActive = useCallback(() => {
    setActive((prevActive) => !prevActive);
  }, []);
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ rotate: inView ? 360 : 0, scale: inView ? 1 : 0 }}
      ref={ref}
      whileTap={{ scale: 0.9 }}
      onClick={toggleActive}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={`${active ? "w-fit" : "w-72"}  rounded-2xl shadow-2xl border`}
    >
      <div
        className={`p-4 ${
          active ? "lg:p-4" : "lg:p-8"
        } flex flex-row flex-wrap h-full  ${
          active && isMobile
            ? "items-center justify-center"
            : "items-start justify-between"
        } `}
      >
        <div
          className={`flex flex-col flex-nowrap h-full justify-between ${
            active && "max-w-sm  items-center  w-full p-4"
          }`}
        >
          <h3 className="mb-2 text-zinc-800 text-xl font-bold">{title}</h3>
          <div className="text-zinc-800 text-md text-center">{text}</div>
          {active && (
            <div className="text-zinc-800 text-md text-center my-8">
              {textExpanded}
            </div>
          )}
          {active ? (
            <AiFillCaretUp className="w-8 h-8 mt-12 self-center" />
          ) : (
            <AiFillCaretDown className="w-8 h-8 mt-12 self-center" />
          )}
        </div>
        {active && (
          <Image
            src={isMobile ? imageMob : image}
            width={isMobile ? 300 : 600}
            height={300}
            alt={title}
            className="rounded-2xl"
          />
        )}
      </div>
    </motion.button>
  );
}

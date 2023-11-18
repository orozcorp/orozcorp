"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Sec1Box({ title, number }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want to trigger again whenever it comes in view
  });
  return (
    <motion.button
      className="border border-zinc-900 rounded-2xl shadow-lg w-72 h-72 bg-zinc-800 shadow-stone-700"
      initial={{ scale: 0 }}
      animate={{ rotate: inView ? 0 : 0, scale: inView ? 1 : 0 }}
      ref={ref}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="m-4 flex flex-col flex-nowrap justify-center items-center  relative">
        <h3 className="text-white text-4xl text-center z-50">{title}</h3>
        <h3 className="absolute  text-zinc-700 text-[14rem] z-0 ">{number}</h3>
      </div>
    </motion.button>
  );
}

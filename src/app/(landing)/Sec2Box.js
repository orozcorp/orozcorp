"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Sec2Box({ title, text }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want to trigger again whenever it comes in view
  });

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ rotate: inView ? 360 : 0, scale: inView ? 1 : 0 }}
      ref={ref}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="w-80  rounded-2xl shadow-2xl"
    >
      <div className="p-4 lg:p-8 m-8">
        <h3 className="mb-2 text-zinc-800 text-3xl font-bold">{title}</h3>

        <div className="text-zinc-400 text-md text-center">{text}</div>
      </div>
    </motion.button>
  );
}

import { Flex, Heading } from "@theme-ui/components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Sec1Box({ title, number }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want to trigger again whenever it comes in view
  });
  return (
    <motion.button
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
      <Flex
        m={2}
        sx={{
          flexFlow: "column nowrap",
          height: "300px",
          width: "320px",
          position: "relative",
          backgroundColor: "#232323",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
        variant="styles.boxGlassBlackBG"
      >
        <Heading
          as="h3"
          sx={{
            color: "#fff",
            fontSize: "48px",
            textAlign: "center",
            zIndex: 999,
          }}
        >
          {title}
        </Heading>
        <Heading
          as="h3"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#414141",
            fontSize: "300px",
            zIndex: -1,
          }}
        >
          {number}
        </Heading>
      </Flex>
    </motion.button>
  );
}

import { Box, Heading, Text } from "@theme-ui/components";
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
    >
      <Box
        m={4}
        p={4}
        sx={{
          width: ["100%", "400px", "500px"],
        }}
        variant="styles.boxGlass"
      >
        <Heading mb={2} sx={{ color: "#000", fontSize: ["24px", "36px"] }}>
          {title}
        </Heading>
        <Text sx={{ color: "#4a4a4a", fontSize: ["18px", "20px"] }}>
          {text}
        </Text>
      </Box>
    </motion.button>
  );
}

// import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
export default function ImageDesktop({ images, setImages }) {
  // const controls = useAnimation();
  const rotateToMiddle = async (index) => {
    let newImages = [...images];
    if (index === 0) {
      newImages = [images[1], images[0], images[2]];
    } else if (index === 2) {
      newImages = [images[0], images[2], images[1]];
    }
    setImages(newImages);
    // await controls.set({ scale: 1, opacity: 0 });
    // controls.start({ scale: 1.1, opacity: 1 });
  };
  return (
    <>
      <div className="my-24 relative flex flex-row flex-wrap justify-center items-center overflowX-auto">
        {/* <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          className="absolute left-4 z-1"
          onClick={() => rotateToMiddle(0)}
        > */}
        <Image
          src={images[0]}
          alt="WhatsBlast: Tu Asistente de Mensajería Masiva"
          width={600}
          height={600}
          className="rounded-lg opacity-75 duration-1000 ease-in"
        />
        {/* </motion.div>

        <motion.div
          initial={{ scale: 1, rotate: 0 }}
          animate={controls}
          className="z-50"
        > */}
        <Image
          src={images[1]}
          alt="Image 2"
          width={800}
          height={800}
          className="rounded-lg shadow-2xl duration-1000 ease-in"
        />
        {/* </motion.div> */}

        {/* <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          className="absolute right-4 z-1"
          onClick={() => rotateToMiddle(2)}
        > */}
        <Image
          src={images[2]}
          alt="WhatsBlast: Tu Asistente de Mensajería Masiva"
          width={600}
          height={600}
          className="rounded-lg opacity-75 duration-1000 ease-in"
        />
        {/* </motion.div> */}
      </div>
    </>
  );
}

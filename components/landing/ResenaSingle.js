import { Flex, Heading, Text } from "@theme-ui/components";
import Image from "next/image";
import { useState } from "react";

export default function ResenaSingle({
  data,
  resenaActive,
  setResenaActive,
  resenasLength,
}) {
  const [touchPosition, setTouchPosition] = useState(null);
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    if (diff > 5) {
      setResenaActive(resenasLength === resenaActive ? 0 : resenaActive + 1);
    }
    if (diff < -5) {
      setResenaActive(0 === resenaActive ? resenasLength : resenaActive - 1);
    }
    setTouchPosition(null);
  };
  return (
    <Flex
      mb={4}
      p={2}
      sx={{
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: ["100%", "400px", "800px"],
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Heading
        as="h2"
        my={2}
        sx={{
          color: "#ababab",
          textAlign: "center",
          fontSize: "30px",
          minHeight: "200px",
        }}
      >
        "{data.mensaje}"
      </Heading>
      <Flex
        mt={3}
        sx={{
          flexFlow: "row wrap",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={data.logo}
          width={40}
          height={40}
          style={{ borderRadius: "999px" }}
          alt={data.cliente}
        />
        <Heading as="h3" mx={2} sx={{ color: "#fff", fontSize: "20px" }}>
          {data.cliente}
        </Heading>
      </Flex>
    </Flex>
  );
}

import { Box, Heading } from "@theme-ui/components";
import { useState } from "react";
export default function ServicesSingle({ service }) {
  const [selectedItem, setSelectedItem] = useState(false);
  return (
    <>
      <Box variant="styles.boxGlass" sx={{ width: "350px" }} p={2} m={2}>
        <Heading
          my={3}
          sx={{ fontSize: "24px", color: "#385a7c", textAlign: "center" }}
          as="h2"
        >
          {service}
        </Heading>
      </Box>
    </>
  );
}

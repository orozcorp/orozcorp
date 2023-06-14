import { Flex, Heading } from "@theme-ui/components";
import { FamiliarContainer } from "../../components/context/FamiliarContext";
import MiFamilia from "./MiFamilia";

export default function InformacionMedica() {
  return (
    <FamiliarContainer>
      <Flex
        sx={{
          flexFlow: "column nowrap",
          justifyContent: "flex-start",
          alignContent: "center",
          alignItems: "flex-start",
        }}
        my={2}
        p={2}
      >
        <Heading as="h2" sx={{ color: "rgb(7 89 133)", fontSize: "30px" }}>
          Mi familia
        </Heading>
        <MiFamilia />
      </Flex>
    </FamiliarContainer>
  );
}

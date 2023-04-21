import { Flex } from "@theme-ui/components";

export default function Custom404() {
  return (
    <>
      <Flex
        style={{
          height: "100vh",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <h1>404 - Página no encontrada</h1>
      </Flex>
    </>
  );
}

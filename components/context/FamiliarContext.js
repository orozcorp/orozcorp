import { useSession } from "next-auth/react";
import { createContext, useContext } from "react";
import { Spinner, Box, Heading, Flex } from "@theme-ui/components";
const FamiliarContext = createContext();

export function FamiliarContainer(props) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <FamiliarContext.Provider value={{ session, status }}>
        <Flex
          m={2}
          p={2}
          sx={{
            height: "100vh",
            flexFlow: "column wrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Heading as="h1">Loading...</Heading>
          <Spinner />
        </Flex>
      </FamiliarContext.Provider>
    );
  }
  if (
    (status === "unauthenticated" && !session) ||
    !session?.roles?.includes("admin")
  ) {
    return (
      <FamiliarContext.Provider value={{ session, status }}>
        <Flex
          m={2}
          p={2}
          sx={{
            height: "100vh",
            flexFlow: "column wrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Heading as="h1">Access Denied</Heading>
        </Flex>
      </FamiliarContext.Provider>
    );
  }
  return (
    <FamiliarContext.Provider value={{ session, status }}>
      <Box m={1} p={1} sx={{ minHeight: "100vh" }}>
        {props.children}
      </Box>
    </FamiliarContext.Provider>
  );
}

export function useFamiliarData() {
  const context = useContext(FamiliarContext);
  if (!context) {
    throw new Error("useFamiliarData must be used in a Familiar provider");
  }
  return context;
}

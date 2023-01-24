import { useSession } from "next-auth/react";
import { createContext, useContext } from "react";
import { Spinner, Box, Heading, Flex } from "@theme-ui/components";
const AdminContext = createContext();

export function AdminContainer(props) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <AdminContext.Provider value={{ session, status }}>
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
      </AdminContext.Provider>
    );
  }
  if (
    (status === "unauthenticated" && !session) ||
    !session?.roles?.includes("admin")
  ) {
    return (
      <AdminContext.Provider value={{ session, status }}>
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
      </AdminContext.Provider>
    );
  }
  return (
    <AdminContext.Provider value={{ session, status }}>
      <Box m={1} p={1} sx={{ minHeight: "100vh" }}>
        {props.children}
      </Box>
    </AdminContext.Provider>
  );
}

export function useAdminData() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useGlobalData must be used in a Admin provider");
  }
  return context;
}

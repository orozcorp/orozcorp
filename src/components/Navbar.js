"use client";
import { useState } from "react";
import { Flex, Spinner, Button, Text } from "@theme-ui/components";
import Menu from "../components/atoms/Menu";
import LateralMenu from "../components/atoms/LateralMenu";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
export default function Navbar() {
  const { data: session, status } = useSession();
  const [toggled, setToggled] = useState(false);
  return (
    <Flex
      as="nav"
      sx={{
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        width: "100%",
      }}
    >
      <LateralMenu
        toggled={toggled}
        setToggled={setToggled}
        session={session}
      />
      <Flex sx={{ flexFlow: "row wrap" }}>
        <Flex
          m={[1, 2]}
          sx={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <Text
              ml={2}
              sx={{
                color: "#000",
                fontSize: "30px",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Orozcorp
            </Text>
          </Link>
        </Flex>
      </Flex>
      <Flex
        sx={{
          justifyContent: "right",
          alignContent: "center",
          alignItems: "center",
        }}
        mr={2}
      >
        {!session && status !== "loading" && (
          <>
            <Button
              onClick={signIn}
              m={1}
              sx={{ backgroundColor: "#fff", color: "#000" }}
            >
              Sign In
            </Button>
          </>
        )}

        {session && status !== "loading" && (
          <Menu toggled={toggled} setToggled={setToggled} />
        )}

        {status === "loading" && <Spinner />}
      </Flex>
    </Flex>
  );
}

"use client";
import { useState } from "react";
import { Flex, Spinner, Button, Heading, Text } from "@theme-ui/components";
import Menu from "../components/atoms/Menu";
import LateralMenu from "../components/atoms/LateralMenu";
import useWindowSize from "../components/hooks/useWindowSize";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
export default function Navbar() {
  const size = useWindowSize();
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
          <Heading ml={2} as="h1" sx={{ color: "#000", fontSize: "30px" }}>
            Orozcorp
          </Heading>
        </Flex>
        {/* {!toggled && size?.width > 700 && (
          <Flex
            ml={4}
            sx={{
              alignSelf: "center",
              flexFlow: "row wrap",
              justifyContent: "space-between",
              width: "auto",
            }}
          >
            <Link
              href="#About"
              style={{
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <Text
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                About
              </Text>
            </Link>
            <Link
              href="#Portfolio"
              style={{
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <Text
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Portfolio
              </Text>
            </Link>
            <Link
              href="#About"
              style={{
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <Text
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                About
              </Text>
            </Link>
            <Link
              href="#StacksAndSkills"
              style={{
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <Text
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Stacks and Skills
              </Text>
            </Link>
            <Link
              href="#Services"
              style={{
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <Text
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Services
              </Text>
            </Link>
            <Link
              href="#Contact"
              style={{
                margin: "15px",
                textDecoration: "none",
              }}
            >
              <Text
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Contact
              </Text>
            </Link>
          </Flex>
        )} */}
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
          <Button
            onClick={signIn}
            m={1}
            sx={{ backgroundColor: "#fff", color: "#000" }}
          >
            Sign In
          </Button>
        )}
        {/* <Menu toggled={toggled} setToggled={setToggled} /> */}
        {status === "loading" && <Spinner />}
      </Flex>
    </Flex>
  );
}

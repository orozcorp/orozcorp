import { Box, Text } from "@theme-ui/components";
import Link from "next/link";
export default function LinksNotSession() {
  return (
    <>
      <Box mt={3}>
        <Link
          href="/About"
          style={{
            marginTop: "15px",
            marginBottom: "15px",
            textDecoration: "none",
          }}
        >
          <Text
            sx={{
              color: "white",
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            About
          </Text>
        </Link>

        <Link
          href="/Portfolio"
          style={{
            marginTop: "15px",
            marginBottom: "15px",
            textDecoration: "none",
          }}
        >
          <Text
            sx={{
              color: "white",
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            Portfolio
          </Text>
        </Link>
        <Link
          href="/StacksAndSkills"
          style={{
            marginTop: "15px",
            marginBottom: "15px",
            textDecoration: "none",
          }}
        >
          <Text
            sx={{
              color: "white",
              textDecoration: "none",

              fontSize: "15px",
            }}
          >
            Stacks and Skills
          </Text>
        </Link>
        <Link
          href="/Contact"
          style={{
            marginTop: "15px",
            marginBottom: "15px",
            textDecoration: "none",
          }}
        >
          <Text
            sx={{
              color: "white",
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            Contact
          </Text>
        </Link>
      </Box>
    </>
  );
}

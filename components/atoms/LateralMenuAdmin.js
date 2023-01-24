import { Flex, Text } from "@theme-ui/components";
import Link from "next/link";
export default function LateralMenuAdmin() {
  return (
    <>
      <Flex
        mt={3}
        sx={{
          flexFlow: "column nowrap",
          height: "40%",
          justifyContent: "space-around",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          href="/Portfolio"
          style={{
            textDecoration: "none",
          }}
        >
          <Text
            sx={{
              color: "white",
              textDecoration: "none",
              fontSize: "25px",
            }}
          >
            Portfolio
          </Text>
        </Link>
      </Flex>
    </>
  );
}

import { gql, useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useMemo, useState } from "react";
import { Flex, Box } from "@theme-ui/components";
import FamilyMember from "./FamilyMember";
import Informacion from "../MiInformacion/Informacion";

const GET_FAMILIARES = gql`
  query GetFamilyMembers($familias: [String]) {
    getFamilyMembers(familias: $familias) {
      _id
      profile {
        lastName
        name
        picture
        familias {
          _id
          nombre
          nuclear
        }
      }
    }
  }
`;

export default function Familiares() {
  const { data: session, status } = useSession();
  const { data, loading, error } = useQuery(GET_FAMILIARES, {
    variables: {
      familias: session?.user?.familias?.map((familia) => familia._id),
    },
  });
  const familiares = useMemo(() => data?.getFamilyMembers, [data]);
  const [active, setActive] = useState({
    _id: session?.user?.id,
    familia: session?.user?.familias,
  });
  return (
    <Flex
      sx={{
        flexFlow: "row wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "90vw",
          overflowX: "scroll",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(7, 89, 133, 0.7) transparent",
          p: 3,
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "3px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(7, 89, 133, 0.7)",
          },
        }}
      >
        <Flex
          sx={{
            flexFlow: "row nowrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            minWidth: "max-content",
          }}
        >
          {familiares?.map((familiar) => (
            <FamilyMember
              key={familiar._id}
              user={familiar}
              active={active}
              setActive={setActive}
            />
          ))}
        </Flex>
      </Box>
      <Informacion user={active._id} familia={active.familia} />
    </Flex>
  );
}

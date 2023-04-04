import { gql, useQuery } from "@apollo/client";
import { Flex, Box, Label } from "@theme-ui/components";
import { useSession } from "next-auth/react";
import { useState, useMemo } from "react";
import Select from "react-select";
import Informacion from "./Informacion";
const QUERY = gql`
  query GetFamilyMembers($idFamilia: String) {
    getFamilyMembers(idFamilia: $idFamilia) {
      _id
      profile {
        lastName
        name
      }
    }
  }
`;

export default function MiInformacion() {
  const { data: session, status } = useSession();
  const [familia, setFamilia] = useState({
    label: "Selecciona una familia",
    value: null,
  });
  const [individual, setIndividual] = useState({
    label: session?.user?.name,
    value: session?.user?.id,
  });
  const { data, loading, error } = useQuery(QUERY, {
    variables: { idFamilia: familia.value },
  });
  const familyMembers = useMemo(() => {
    if (data?.getFamilyMembers) {
      return data.getFamilyMembers.map((member) => ({
        label: `${member.profile.name} ${member.profile.lastName}`,
        value: member._id,
      }));
    }
    return [];
  }, [data]);
  const families = useMemo(() => {
    if (session?.user?.familias) {
      return session?.user?.familias?.map((family) => ({
        label: `${family.nombre}`,
        value: family._id,
      }));
    }
    return [];
  }, [session]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Flex m={2} p={2} sx={{ flexFlow: "column nowrap" }}>
      <Flex
        sx={{
          flexFlow: "row wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Label>Selecciona Familia</Label>
          <Select
            options={families}
            value={familia}
            onChange={(e) => setFamilia(e)}
          />
        </Box>
        <Box>
          <Label>Selecciona miembro</Label>
          <Select
            options={familyMembers}
            value={individual}
            onChange={(e) => setIndividual(e)}
          />
        </Box>
      </Flex>
      {individual.value && <Informacion user={individual.value} />}
    </Flex>
  );
}

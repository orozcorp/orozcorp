import { gql, useQuery } from "@apollo/client";
import { Flex, Box, Label, Spinner, Alert } from "@theme-ui/components";
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
    label: "Selecciona un miembro",
    value: null,
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
  if (loading)
    return (
      <p>
        <Spinner />
      </p>
    );
  if (error)
    return (
      <p>
        <Alert>{error.message}</Alert>
      </p>
    );
  return (
    <Flex sx={{ flexFlow: "column nowrap", paddingBottom: "200px" }}>
      <Flex
        sx={{
          flexFlow: "row wrap",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Box m={2}>
          <Label>Selecciona Familia</Label>
          <Select
            options={families}
            isSearchable
            value={familia}
            onChange={(e) => setFamilia(e)}
          />
        </Box>
        <Box m={2}>
          <Label>Selecciona miembro</Label>
          <Select
            options={familyMembers}
            value={individual}
            isSearchable
            onChange={(e) => setIndividual(e)}
          />
        </Box>
      </Flex>
      {individual.value && (
        <Informacion user={individual.value} familia={familia} />
      )}
    </Flex>
  );
}

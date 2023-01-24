import {
  Heading,
  Label,
  Input,
  Button,
  Flex,
  Box,
  Textarea,
} from "@theme-ui/components";
import Modal from "../../components/atoms/Modal";
import Select from "react-select";
import { useState } from "react";
import { dateInputFormat } from "../../lib/helpers/formatters";
import { tecUsedOptions } from "../../lib/helpers/options";
export default function AddPortfolio({ display, setDisplay }) {
  const initial = {
    startDate: new Date(),
    endDate: new Date(),
    website: "",
    tecUsed: [],
    description: "",
    mainImage: {
      _id: null,
      photo: "",
      description: "",
    },
    images: [],
    designBy: "",
    client: "",
  };
  const [values, setValues] = useState(initial);
  return (
    <Modal display={display} setDisplay={setDisplay}>
      <Heading>Add Portfolio</Heading>
      <Flex
        sx={{
          flexFlow: "row wrap",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Label>Project Name</Label>
          <Input
            type="text"
            value={values.projectName}
            onChange={(e) =>
              setValues({
                ...values,
                projectName: e.currentTarget.value.toUpperCase(),
              })
            }
          />
        </Box>
        <Box>
          <Label>Description</Label>
          <Textarea
            value={values.description}
            onChange={(e) =>
              setValues({
                ...values,
                description: e.currentTarget.value,
              })
            }
          />
        </Box>
        <Box>
          <Label>Start Date</Label>
          <Input
            type="date"
            value={dateInputFormat(values.startDate)}
            onChange={(e) =>
              setValues({
                ...values,
                startDate: new Date(e.currentTarget.value),
              })
            }
          />
        </Box>
        <Box>
          <Label>End Date</Label>
          <Input
            type="date"
            value={dateInputFormat(values.endDate)}
            onChange={(e) =>
              setValues({
                ...values,
                endDate: new Date(e.currentTarget.value),
              })
            }
          />
        </Box>
        <Box>
          <Label> Website</Label>
          <Input
            type="text"
            value={values.website}
            onChange={(e) =>
              setValues({
                ...values,
                website: e.currentTarget.value.toUpperCase(),
              })
            }
          />
        </Box>
        <Box>
          <Label>Tec Used</Label>
          <Select
            isMulti
            options={tecUsedOptions}
            value={values.tecUsed}
            onChange={(e) => setValues({ ...values, tecUsed: e })}
          />
        </Box>
      </Flex>
    </Modal>
  );
}

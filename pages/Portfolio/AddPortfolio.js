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
import { useRef, useState } from "react";
import { dateInputFormat } from "../../lib/helpers/formatters";
import { tecUsedOptions } from "../../lib/helpers/options";
import { v4 as uuidv4 } from "uuid";
import ProgressBar from "../../components/atoms/ProgressBar";
import { useGlobalData } from "../../components/context/GlobalContext";
import { gql, useMutation } from "@apollo/client";
import { uploadFiles } from "s3up-client";
const SIGN_UPLOAD = gql`
  mutation Mutation($key: String!) {
    signFile(key: $key) {
      url
      fields {
        key
        bucket
        xAmzAlgorithm
        xAmzCredential
        xAmzDate
        Policy
        xAmzSignature
      }
    }
  }
`;
const INSERT_MUTATION = gql`
  mutation InsertPortfolio($input: InputPortfolio) {
    insertPortfolio(input: $input) {
      code
      message
      success
    }
  }
`;
export default function AddPortfolio({ display, setDisplay, query }) {
  const initial = {
    projectName: "",
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
    designBy: "",
    client: "",
  };
  const [values, setValues] = useState(initial);
  //UPLOAD
  const [percent, setPercent] = useState(0);
  const { setAlert } = useGlobalData();
  const [descripcionFoto, setDescripcionFoto] = useState("");
  const [mainImage, setMainImage] = useState({});
  const [key, setKey] = useState("");
  const [signUpload] = useMutation(SIGN_UPLOAD, { variables: { key } });
  async function Sign() {
    try {
      const sign = await signUpload();
      const { data } = sign;
      const { signFile } = data;
      const newSignFile = {
        url: signFile.url,
        fields: {
          Policy: signFile.fields.Policy,
          key: signFile.fields.key,
          bucket: signFile.fields.bucket,
        },
      };
      newSignFile.fields["X-Amz-Algorithm"] = signFile.fields.xAmzAlgorithm;
      newSignFile.fields["X-Amz-Credential"] = signFile.fields.xAmzCredential;
      newSignFile.fields["X-Amz-Date"] = signFile.fields.xAmzDate;
      newSignFile.fields["X-Amz-Signature"] = signFile.fields.xAmzSignature;
      return newSignFile;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
  const inputFile = useRef(null);
  function uploadImage() {
    const Ogfile = inputFile.current.files[0];
    setKey(`orozcorp/proyectos/${Date.now()}-${Ogfile.name}`);
    uploadFiles(inputFile.current.files, {
      signer: Sign,
      onProgress: (state) => {
        setMainImage({
          _id: uuidv4(),
          photo: state.list[0].url,
          description: descripcionFoto,
        });
        setPercent(state.percent());
      },
    });
  }
  //!DONE UPLOAD
  //* Insert of the actual portfolio
  const [insert, { loading }] = useMutation(INSERT_MUTATION, {
    variables: {
      input: {
        ...values,
        startDate: new Date(values.startDate),
        endDate: new Date(values.endDate),
        tecUsed: values.tecUsed.map((val) => val.value),
        mainImage,
        _id: uuidv4(),
      },
    },
    onCompleted: () => {
      setValues(initial);
      setMainImage({});
      setDisplay("none");
    },
    onError: (err) => {
      setAlert({
        message: err.message,
        display: "box",
        variant: "orange",
      });
      console.log(err.message);
    },
    refetchQueries: [{ query, variables: { offset: 0, limit: 99 } }],
    awaitRefetchQueries: true,
  });

  return (
    <Modal display={display} setDisplay={setDisplay}>
      <Heading>Add Portfolio</Heading>
      <Flex
        sx={{
          flexFlow: "column nowrap",
          justifyContent: "flex-start",
          alignContent: "center",
          alignItems: "center",
        }}
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log({
            ...values,
            startDate: new Date(values.startDate),
            endDate: new Date(values.endDate),
            tecUsed: values.tecUsed.map((val) => val.value),
            mainImage,
            _id: uuidv4(),
          });
          insert();
        }}
      >
        <Box sx={{ width: "100%" }}>
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
        <Box sx={{ width: "100%" }}>
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
        <Flex
          sx={{
            width: "100%",
            flexFlow: "row wrap",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Box m={1} sx={{ flex: "1 1 300px" }}>
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
          <Box m={1} sx={{ flex: "1 1 300px" }}>
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
        </Flex>
        <Flex
          sx={{
            width: "100%",
            flexFlow: "row wrap",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Box m={1} sx={{ flex: "1 1 300px" }}>
            <Label> Website</Label>
            <Input
              type="text"
              value={values.website}
              onChange={(e) =>
                setValues({
                  ...values,
                  website: e.currentTarget.value,
                })
              }
            />
          </Box>
          <Box m={1} sx={{ flex: "1 1 300px" }}>
            <Label>Tec Used</Label>
            <Select
              isMulti
              options={tecUsedOptions}
              value={values.tecUsed}
              onChange={(e) => setValues({ ...values, tecUsed: e })}
            />
          </Box>
        </Flex>
        <Flex
          sx={{
            width: "100%",
            flexFlow: "row wrap",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Box m={1} sx={{ flex: "1 1 300px" }}>
            <Label m={1}>Design by</Label>
            <Input
              type="text"
              value={values.designBy}
              onChange={(e) =>
                setValues({
                  ...values,
                  designBy: e.currentTarget.value.toUpperCase(),
                })
              }
            />
          </Box>
          <Box m={1} sx={{ flex: "1 1 300px" }}>
            <Label m={1}>Client</Label>
            <Input
              type="text"
              value={values.client}
              onChange={(e) =>
                setValues({
                  ...values,
                  client: e.currentTarget.value.toUpperCase(),
                })
              }
            />
          </Box>
        </Flex>
        <Flex
          sx={{
            width: "100%",
            flexFlow: "row wrap",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Box m={1} sx={{ flex: "1 1 300px" }}>
            <Label m={1}>Photo description</Label>
            <Input
              type="text"
              value={descripcionFoto}
              onChange={(e) =>
                setDescripcionFoto(e.currentTarget.value.toUpperCase())
              }
            />
          </Box>
          {descripcionFoto && (
            <Box m={1} sx={{ flex: "1 1 300px" }}>
              <Label m={1}>Foto</Label>
              <Input
                m={1}
                type="file"
                ref={inputFile}
                onChange={uploadImage}
                accept="image/png, image/gif, image/jpeg"
              />
              {percent > 0 && <ProgressBar completed={percent} />}
            </Box>
          )}
        </Flex>
        <Button type="submit" disabled={loading}>
          Guardar
        </Button>
      </Flex>
    </Modal>
  );
}

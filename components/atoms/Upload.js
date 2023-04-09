import { useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import { Box, Input, Label } from "@theme-ui/components";
import { SIGN_UPLOAD } from "../../apollo/Mutation/UploadsAndOther/gql";
import ProgressBar from "./ProgressBar";
import { uploadFiles } from "s3up-client";
export default function Upload({ setFoto, location, user, heading, accept }) {
  const [percent, setPercent] = useState(0);
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
    setKey(`orozcorp/${user}/${location}/${Date.now()}-${Ogfile.name}`);
    uploadFiles(inputFile.current.files, {
      signer: Sign,
      onProgress: (state) => {
        setFoto(state.list[0].url);
        setPercent(state.percent());
      },
    });
  }
  return (
    <Box m={1} sx={{ width: "300px" }}>
      <Label m={1}>{heading}</Label>
      <Input
        mb={2}
        type="file"
        ref={inputFile}
        onChange={uploadImage}
        accept={accept}
      />
      {percent > 0 && <ProgressBar completed={percent} />}
    </Box>
  );
}

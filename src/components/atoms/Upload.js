"use client";
import { postData } from "../../lib/helpers/getData";
import { useRef, useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import { uploadFiles } from "s3up-client";

export default function Upload({
  setUrl,
  percent,
  setPercent,
  user,
  location,
  heading,
  accept,
}) {
  const [key, setKey] = useState("");

  const inputFile = useRef(null);
  useEffect(() => {
    if (key) {
      async function signUpload() {
        if (!key) return null;
        return await postData({
          query: `
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
          `,
          variables: { key },
        });
      }
      async function Sign() {
        try {
          const sign = await signUpload();
          const { signFile } = sign;
          const newSignFile = {
            url: signFile.url,
            fields: {
              Policy: signFile.fields.Policy,
              key: signFile.fields.key,
              bucket: signFile.fields.bucket,
            },
          };
          newSignFile.fields["X-Amz-Algorithm"] = signFile.fields.xAmzAlgorithm;
          newSignFile.fields["X-Amz-Credential"] =
            signFile.fields.xAmzCredential;
          newSignFile.fields["X-Amz-Date"] = signFile.fields.xAmzDate;
          newSignFile.fields["X-Amz-Signature"] = signFile.fields.xAmzSignature;
          return newSignFile;
        } catch (error) {
          console.log(error);
          throw new Error(error);
        }
      }
      uploadFiles(inputFile.current.files, {
        signer: Sign,
        onProgress: (state) => {
          setUrl(state.list[0].url);
          setPercent(state.percent());
        },
      });
    }
  }, [key, setPercent, setUrl]);

  function uploadImage() {
    const Ogfile = inputFile.current.files[0];
    setKey(`orozcorp/${user}/${location}/${Date.now()}-${Ogfile.name}`);
  }
  return (
    <div className="w-full">
      <label htmlFor={heading} className="text-sm">
        {heading}
      </label>
      <input
        className="border border-zinc-300 rounded-md bg-zinc-500 p-2 w-full mt-2"
        type="file"
        ref={inputFile}
        onChange={uploadImage} // Uncomment this line
        accept={accept}
      />
      <ProgressBar completed={percent} />
    </div>
  );
}

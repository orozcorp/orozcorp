"use client";
import { postData } from "@/lib/helpers/getData";
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
    setKey(`babyballet/${user}/${location}/${Date.now()}-${Ogfile.name}`);
  }
  return (
    <div style={{ width: "100%" }}>
      <label htmlFor={heading} className="text-sm">
        {heading}
      </label>
      <input
        className="border border-rose-300 rounded-md bg-white p-2 w-full mt-2"
        type="file"
        ref={inputFile}
        onChange={uploadImage}
        accept={accept}
      />
      {percent > 0 && <ProgressBar completed={percent} />}
    </div>
  );
}

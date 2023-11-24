"use client";
import { postData } from "../../lib/helpers/getData";
import { useRef, useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import { uploadFiles } from "s3up-client";

export default function UploadMessages({
  setForm,
  percent,
  setPercent,
  user,
  location,
  heading,
  messageType,
  resetUpload,
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
          if (messageType === "Imagen") {
            setForm({ ...form, image: state.list[0].url });
          } else if (messageType === "Documento") {
            setForm({
              ...form,
              document: state.list[0].url,
              documentName: Ogfile.name,
            });
          }
          setPercent(state.percent());
        },
      });
    }
  }, [key, setPercent, setForm]);

  function uploadImage() {
    const Ogfile = inputFile.current.files[0];
    setKey(`orozcorp/${user}/${location}/${Date.now()}-${Ogfile.name}`);
  }
  const reset = () => {
    if (resetUpload) {
      inputFile.current.value = null;
      setPercent(0);
    }
  };
  useEffect(() => {
    reset();
  }, [resetUpload]);
  return (
    <div className="flex flex-col flex-nowrap flex-1">
      <label htmlFor={heading} className="text-md">
        {heading}
      </label>
      <input
        className="border border-zinc-700 rounded-md bg-zinc-100 p-2 w-full"
        type="file"
        ref={inputFile}
        onChange={uploadImage}
      />
      {percent > 0 && <ProgressBar completed={percent} />}
    </div>
  );
}

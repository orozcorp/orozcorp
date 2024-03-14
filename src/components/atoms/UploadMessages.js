"use client";
import { useRef, useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

import { uploadFiles } from "s3up-client";
import { signFile } from "../../server/uploads"; // Ensure this exports a function compatible with your backend
import { useMutation } from "@tanstack/react-query";
export default function UploadMessages({
  setForm,
  form,
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

  const {
    mutate: signUpload,
    isError,
    error,
    data: signedData,
  } = useMutation(
    ([key]) => {
      // Ensure your signFile function is properly implemented to handle this request
      return signFile(key);
    },
    {
      onSuccess: (data) => {
        const { url, fields } = data; // Adjust this based on the actual structure of your response

        const uploadConfig = {
          url,
          fields: {
            ...fields,
            Policy: fields.Policy,
            "X-Amz-Algorithm": fields.xAmzAlgorithm,
            "X-Amz-Credential": fields.xAmzCredential,
            "X-Amz-Date": fields.xAmzDate,
            "X-Amz-Signature": fields.xAmzSignature,
          },
        };

        // Use the signed data for uploading files
        if (inputFile.current.files.length > 0) {
          uploadFiles(inputFile.current.files, {
            signer: () => Promise.resolve(uploadConfig),
            onProgress: (state) => {
              setPercent(state.percent);
              // Example for handling an image upload
              if (messageType === "image") {
                setForm({ ...form, image: state.url });
              }
            },
          })
            .then(() => {
              console.log("Upload successful");
            })
            .catch((uploadError) => {
              console.error("Upload failed:", uploadError);
            });
        }
      },
      onError: (error) => {
        console.error("Error signing the file:", error);
      },
    }
  );

  useEffect(() => {
    if (key) {
      signUpload([key]);
    }
  }, [key, signUpload]);

  function uploadImage() {
    const file = inputFile.current.files[0];
    if (file) {
      const newKey = `orozcorp/${user}/${location}/${Date.now()}-${file.name}`;
      setKey(newKey);
    }
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
        className="border border-zinc-700 rounded-md bg-zinc-100 p-2 w-full mb-2"
        type="file"
        ref={inputFile}
        onChange={uploadImage}
      />
      {percent > 0 && <ProgressBar completed={percent} />}
    </div>
  );
}

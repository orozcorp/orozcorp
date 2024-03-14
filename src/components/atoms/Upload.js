"use client";
import { useRef, useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import { uploadFiles } from "s3up-client";
import { useMutation } from "@tanstack/react-query";
import { signFile } from "../../server/uploads"; // Your backend function to sign the file for upload

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

  // Setup the mutation with useMutation
  const {
    mutate: signUpload,
    isLoading,
    isError,
    error,
  } = useMutation(
    async (key) => {
      // Call your backend's signFile function
      return await signFile(key);
    },
    {
      // On mutation success, receive signed URL and fields
      onSuccess: (data) => {
        // Assuming the data structure matches your expected response
        const { url, fields } = data;

        // Format fields to match the S3 uploader requirements
        const formattedFields = {
          ...fields,
          "X-Amz-Algorithm": fields.xAmzAlgorithm,
          "X-Amz-Credential": fields.xAmzCredential,
          "X-Amz-Date": fields.xAmzDate,
          "X-Amz-Signature": fields.xAmzSignature,
        };

        // Proceed to upload the file using the signed URL and fields
        uploadFiles(inputFile.current.files, {
          signer: () => Promise.resolve({ url, fields: formattedFields }),
          onProgress: (state) => {
            setUrl(state.list[0].url); // Update URL in state
            setPercent(state.percent()); // Update upload progress
          },
        });
      },
      onError: (error) => {
        console.error("Signing error:", error);
        // Handle errors, such as displaying a message to the user
      },
    }
  );

  useEffect(() => {
    // Trigger the signing process when a key is set
    if (key) {
      signUpload(key);
    }
  }, [key, signUpload]);

  function uploadImage() {
    // Get the selected file and generate a key for it
    const Ogfile = inputFile.current.files[0];
    if (Ogfile) {
      setKey(`orozcorp/${user}/${location}/${Date.now()}-${Ogfile.name}`);
    }
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
        onChange={uploadImage}
        accept={accept}
      />
      {percent > 0 && <ProgressBar completed={percent} />}
    </div>
  );
}

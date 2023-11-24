"use client";
import { useState, useEffect } from "react";
import GetContacts from "./GetContacts";
import { getData } from "../../../lib/helpers/getData";

const QUERY_CHECK_STATUS = `query Query {
  getStatus
}`;

export default function Whatsblast() {
  const [status, setStatus] = useState("disconnected");
  const [checking, setChecking] = useState(false);
  const checkStatus = async () => {
    try {
      const data = await getData({
        query: QUERY_CHECK_STATUS,
      });
      setStatus(data.getStatus); // Update status based on GraphQL response
    } catch (error) {
      console.error("Error checking status:", error);
    }
  };

  useEffect(() => {
    checkStatus();
  }, [checking]);

  return (
    <div className="flex flex-col flex-nowrap justify-start items-start">
      {status === "authenticated" && (
        <>
          <GetContacts />
        </>
      )}
    </div>
  );
}

"use client";
import GetContacts from "./GetContacts";
import { useQuery } from "@tanstack/react-query";
import { getStatus } from "../../../server/userInteraction";

export default function Whatsblast() {
  const status = useQuery({
    queryKey: ["status"],
    queryFn: () => getStatus(),
    inictialData: "disconnected",
  });
  return (
    <div className="flex flex-col flex-nowrap justify-start items-start">
      {status.data === "authenticated" && (
        <>
          <GetContacts />
        </>
      )}
    </div>
  );
}

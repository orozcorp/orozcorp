"use client";
import Image from "next/image";
import { useState } from "react";
import { formatPhoneNumber } from "../../lib/helpers/formatters";
import { wa_logOut, getMe } from "../../server/userInteraction";
import { useQuery, useMutation } from "@tanstack/react-query";

const pattern = /@.*/;

export default function MyNumberData() {
  const initial = { id: "", name: "", profile_picture: "" };
  const mequery = useQuery({
    queryKey: ["me"],
    queryFn: () => getMe(),
    initialData: initial,
  });
  const me = mequery.data;
  const [hover, setHovered] = useState(false);
  const logoutMutation = useMutation({
    async mutationFn() {
      const { data, errors } = await wa_logOut();
      if (errors) throw errors;
    },
  });

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`border border-zinc-800 shadow-xl rounded-xl p-4 self-start flex flex-col flex-nowrap justify-center items-center gap-4 ${
        hover && "w-44 h-44 bg-zinc-900"
      }`}
    >
      {hover ? (
        <button
          onClick={() => logoutMutation.mutate()}
          className="focus:outline-none text-white bg-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Log Out
        </button>
      ) : (
        <>
          {me?.profile_picture && (
            <Image
              src={me?.profile_picture}
              alt={me?.name}
              width={50}
              height={50}
              className="rounded-full border"
            />
          )}
          <div className="text-lg font-bold ">{me?.name}</div>
          <div className="text-sm font-bold ">
            {formatPhoneNumber(me?.id?.replace(pattern, ""))}
          </div>
        </>
      )}
    </div>
  );
}

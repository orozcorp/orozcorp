"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getData } from "../../lib/helpers/getData";
import { formatPhoneNumber } from "../../lib/helpers/formatters";
const QUERY = `query GetMe {
  getMe {
    id
    name
    profile_picture
  }
}`;
const pattern = /@.*/;

export default function MyNumberData() {
  const [me, setMe] = useState("");
  useEffect(() => {
    const getMe = async () => {
      try {
        const data = await getData({ query: QUERY });
        console.log("data", data);
        setMe(data.getMe);
      } catch (error) {
        console.error("Error fetching QR code:", error);
        // Optionally set an error state here and display it in the UI
      }
    };
    getMe();
  }, []);
  return (
    <div className="border border-zinc-800 shadow-xl rounded-xl p-4 self-start flex flex-col flex-nowrap justify-center items-center gap-4">
      <Image
        src={me?.profile_picture}
        alt={me?.name}
        width={50}
        height={50}
        className="rounded-full border"
      />
      <div className="text-lg font-bold ">{me?.name}</div>
      <div className="text-sm font-bold ">
        {formatPhoneNumber(me?.id.replace(pattern, ""))}
      </div>
    </div>
  );
}

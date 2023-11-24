"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getData, postData } from "../../lib/helpers/getData";
import { formatPhoneNumber } from "../../lib/helpers/formatters";
const QUERY = `query GetMe {
  getMe {
    id
    name
    profile_picture
  }
}`;
const pattern = /@.*/;

const MUTATION = `
mutation Mutation {
  wa_logOut {
    code
    message
    success
  }
}
`;

export default function MyNumberData() {
  const initial = { id: "", name: "", profile_picture: "" };
  const [me, setMe] = useState(initial);
  const [hover, setHovered] = useState(false);
  useEffect(() => {
    const getMe = async () => {
      try {
        const data = await getData({ query: QUERY });
        setMe(data.getMe);
      } catch (error) {
        console.error("Error fetching QR code:", error);
        // Optionally set an error state here and display it in the UI
      }
    };
    getMe();
  }, []);
  const logOut = async () => {
    try {
      const data = await postData({
        query: MUTATION,
      });
      if (data.wa_logOut.success) {
        setStatus("unauthenticated");
        setMe(initial);
      } else {
        console.error("Error logging out:", data.wa_logOut.message);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
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
          onClick={logOut}
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

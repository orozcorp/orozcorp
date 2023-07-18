import { Flex, Text, Box } from "@theme-ui/components";
import Image from "next/image";
import { useState } from "react";

export default function FamilyMember({ user, setActive, active }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`flex flex-col w-24 flex-nowrap justify-stretch
       shadow-lg shadow-sky-600
                drop-shadow-md text-white
      items-center content-center  hover:bg-sky-800 rounded-full border-2 border-color-sky-400 hover:border-color-sky-800  p-4 m-4
      ${active._id === user._id ? "bg-sky-800" : "bg-sky-200"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setActive(user)}
    >
      {user.profile.picture ? (
        <Image
          src={user.profile.picture}
          width={50}
          height={50}
          alt={user?.profile?.name}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "1px solid rgb(7 89 133)",
          }}
        />
      ) : (
        <Box
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border:
              active._id === user._id && !hovered
                ? "1px solid white"
                : "1px solid rgb(7 89 133)",
          }}
        />
      )}
      <div
        className={`text-sm  text-center  font-bold mt-2 ${
          active._id === user._id || hovered ? "text-white" : "text-sky-800"
        }`}
      >
        {user.profile.name}
      </div>

      <div
        className={`text-sm  text-center  font-bold ${
          active._id === user._id || hovered ? "text-white" : "text-sky-800"
        }`}
      >
        {user.profile.lastName}
      </div>
    </div>
  );
}

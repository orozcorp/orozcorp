"use client";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getMessages } from "../../../../../server/userInteraction";
import SendMessage from "./SendMessage";
import Mensajes from "./Mensajes";
import LoadingMensajes from "./LoadingMensajes";
export default function page({ params }) {
  const { data: messages } = useQuery({
    queryKey: ["messages", params.id],
    queryFn: () => getMessages({ id: params.id }),
    initialData: [],
    refetchInterval: 5000,
  });

  return (
    <div className="flex flex-col flex-nowrap flex-1 h-[85vh] gap-2">
      <div className="bg-zinc-300 p-2 flex flex-row flex-wrap justify-start items-center gap-4">
        <Link href="/User/WhatsCRM" aria-label="back">
          <AiOutlineLeft />
        </Link>
        <div>{decodeURIComponent(params.name)}</div>
      </div>
      {messages.length === 0 ? (
        <LoadingMensajes />
      ) : (
        <Mensajes messages={messages} />
      )}
      <SendMessage idMessage={params.id} />
    </div>
  );
}

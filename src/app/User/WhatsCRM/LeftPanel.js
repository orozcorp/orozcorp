"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getChats, readMessages } from "../../../server/userInteraction";
import Link from "next/link";
import useWindowSize from "../../../components/hooks/useWindowSize";
import { usePathname } from "next/navigation";

export default function LeftPanel({}) {
  const { data: chats } = useQuery({
    queryKey: ["chats"],
    queryFn: () => getChats(),
    initialData: [],
    refetchInterval: 5000,
  });

  const pathname = usePathname();
  const { width } = useWindowSize();
  if (width && width < 900 && pathname !== "/User/WhatsCRM") {
    return null;
  }
  const readMessagesMutation = useMutation({
    async mutationFn({ chatId }) {
      const { data, errors } = await readMessages({ chatId });
    },
  });
  return (
    <div className="flex flex-col flex-nowrap bg-zinc-300 p-4 text-bg-zinc-900 h-[85vh] w-60 overflow-y-auto shadow-2xl border-separateder-zinc-300">
      <div>Crear Mensaje</div>
      <div className="flex flex-col flex-nowrap gap-1 mt-4">
        {chats?.map((chat) => (
          <Link
            href={`/User/WhatsCRM/${chat.id}/${chat.name.replace("/", "")}`}
            onClick={() => {
              readMessagesMutation.mutate({ chatId: chat.id });
            }}
            key={chat.id}
            className="
            flex flex-row flex-wrap justify-between items-center w-full border border-zinc-400 rounded shadow-md p-2
            hover:bg-zinc-700 hover:text-white "
          >
            <div className="max-w-[150px]">{chat.name}</div>
            {chat?.unread > 0 && (
              <div className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                {chat.unread}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

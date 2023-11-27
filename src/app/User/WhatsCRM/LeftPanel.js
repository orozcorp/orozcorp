"use client";
const QUERY = `
  query Query {
    getChats {
      archived
      id
      last_time
      unread
      name
    }
  }
`;
const MUTATION = `
  mutation ReadMessages($chatId: String!) {
    readMessages(chatId: $chatId) {
      code
      message
      success
    }
  }
`;
import Link from "next/link";
import { getData, postData } from "../../../lib/helpers/getData";
import { useState, useEffect } from "react";
import useWindowSize from "../../../components/hooks/useWindowSize";
import { usePathname } from "next/navigation";

export default function LeftPanel({}) {
  const [isActive, setIsActive] = useState(true);
  const [chats, setChats] = useState([]);
  useEffect(() => {
    if (!isActive) return;
    const fetchChats = async () => {
      try {
        const response = await getData({ query: QUERY });
        setChats(response?.getChats || []);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchChats();
    if (isActive) {
      const interval = setInterval(fetchChats, 5000);
      return () => clearInterval(interval);
    }
  }, [isActive]); // Adding an empty dependency array to prevent continuous calls

  const pathname = usePathname();
  const { width } = useWindowSize();
  if (width && width < 900 && pathname !== "/User/WhatsCRM") {
    return null;
  }
  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="flex flex-col flex-nowrap bg-zinc-300 p-4 text-bg-zinc-900 h-[85vh] w-60 overflow-y-auto shadow-2xl border-separateder-zinc-300"
    >
      <div>Crear Mensaje</div>
      <div className="flex flex-col flex-nowrap gap-1 mt-4">
        {chats?.map((chat) => (
          <Link
            href={`/User/WhatsCRM/${chat.id}/${chat.name.replace("/", "")}`}
            onClick={async () => {
              try {
                const response = await postData({
                  query: MUTATION,
                  variables: {
                    chatId: chat.id,
                  },
                });
              } catch (error) {
                console.log(error);
              }
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

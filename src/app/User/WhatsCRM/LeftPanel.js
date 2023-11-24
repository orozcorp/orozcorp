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
import Link from "next/link";
import { getData } from "../../../lib/helpers/getData";
export default async function LeftPanel() {
  const data = await getData({ query: QUERY });
  const chats = data.getChats;
  return (
    <div className="flex flex-col flex-nowrap bg-zinc-300 p-4 text-bg-zinc-900 h-[83vh] w-60 overflow-y-auto">
      <div>Crear Mensaje</div>
      <div className="flex flex-col flex-nowrap gap-1 mt-4">
        {chats?.map((chat) => (
          <Link
            href={`/User/WhatsCRM/${chat.id}`}
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

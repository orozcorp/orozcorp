const QUERY = `
  query GetMessages($getMessagesId: ID!) {
    getMessages(id: $getMessagesId) {
      ack
      author
      body
      filename
      from
      fromMe
      id
      isForwarded
      link
      media
      self
      timestamp
      to
      type
      isMentioned
      mentionedIds
      pushname
      quotedMsg {
        body
        id
        media
      }
    }
  }
`;
function detectLinks(str) {
  const regex = /https?:\/\/[^\s]+/g;
  return str.match(regex);
}
import Link from "next/link";
import { format_dateHrUnix } from "../../../../../lib/helpers/formatters";
import { getData } from "../../../../../lib/helpers/getData";
import SendMessage from "./SendMessage";
export default async function page({ params }) {
  const messagesQuery = await getData({
    query: QUERY,
    variables: { getMessagesId: params.id },
  });
  const messages = messagesQuery?.getMessages;
  return (
    <div className="flex flex-col flex-nowrap flex-1 h-[85vh] gap-2">
      <div className="bg-zinc-300 p-2 text-xl text-center">
        {params.name.replace(/%20/g, " ")}
      </div>
      <div className="mx-4 flex-1 overflow-y-auto  flex flex-col flex-nowrap justify-start items-start gap-1">
        {messages?.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col flex-nowrap max-w-xl border p-2 rounded-lg shadow-md ${
              message.fromMe
                ? "bg-green-100 border-green-100 self-end"
                : "bg-zinc-200 border-zinc-200"
            }`}
          >
            <p>{message.body}</p>
            {message.type === "image" && (
              <div className="w-6 h-6 border border-gray-400 rounded-lg" />
            )}
            <p className="text-xs text-right">
              {format_dateHrUnix(message.timestamp)}
            </p>
            <div className="flex flex-col flex-nowrap text-xs">
              {detectLinks(message.body)?.map((link, index) => (
                <Link
                  key={index}
                  href={link}
                  className="underline text-blue-400"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
}

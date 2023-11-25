"use client";
import Link from "next/link";
import {
  formatPhoneNumber,
  format_dateHrUnix,
} from "../../../../../lib/helpers/formatters";
import { useRef, useEffect } from "react";
function detectLinks(str) {
  const regex = /https?:\/\/[^\s]+/g;
  return str.match(regex);
}
export default function Mensajes({ messages }) {
  const lastMessageRef = useRef(null);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <div className="mx-4 flex-1 overflow-y-auto  flex flex-col flex-nowrap justify-start items-start gap-1">
      {messages?.map((message, index) => (
        <div
          key={message.id}
          ref={index === messages.length - 1 ? lastMessageRef : null}
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
              <Link key={index} href={link} className="underline text-blue-400">
                {link}
              </Link>
            ))}
          </div>
          {!message.fromMe && (
            <div className="bg-zinc-100 text-zinc-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded self-start">
              {formatPhoneNumber(message.author.replace("@c.us", ""))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

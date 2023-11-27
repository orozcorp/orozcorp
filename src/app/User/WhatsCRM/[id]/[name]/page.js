"use client";
import { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
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
import { getData } from "../../../../../lib/helpers/getData";
import SendMessage from "./SendMessage";
import Mensajes from "./Mensajes";
import LoadingMensajes from "./LoadingMensajes";
export default function page({ params }) {
  const [messages, setMessages] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [recheck, setRecheck] = useState(false);
  useEffect(() => {
    if (!isActive && !recheck) return;
    const fetchMessages = async () => {
      try {
        const response = await getData({
          query: QUERY,
          variables: { getMessagesId: params.id },
        });
        setMessages(response?.getMessages || []);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();

    if (isActive) {
      const interval = setInterval(fetchMessages, 5000);
      return () => clearInterval(interval);
    }
  }, [isActive, recheck, params.id]);
  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="flex flex-col flex-nowrap flex-1 h-[85vh] gap-2"
    >
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
      <SendMessage setRecheck={setRecheck} idMessage={params.id} />
    </div>
  );
}

"use client";
import { useRef, useEffect } from "react";

export default function Messages({ messages }) {
  const lastMessageRef = useRef(null);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <div className="flex flex-col flex-nowrap justify-start overflow-y-auto w-full self-start h-full p-4">
      {messages.map((m, index) => (
        <div
          key={m.id}
          ref={index === messages.length - 1 ? lastMessageRef : null}
          className={`flex flex-col flex-nowrap max-w-xl border p-2 rounded-lg shadow-md whitespace-pre-line ${
            m.role === "user"
              ? "bg-green-100 border-green-100 self-end"
              : "bg-zinc-200 border-zinc-200"
          }`}
        >
          {m.content}
        </div>
      ))}
    </div>
  );
}

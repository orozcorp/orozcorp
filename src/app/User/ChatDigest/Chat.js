"use client";
import { useChat } from "ai/react";
import { v4 as uuidv4 } from "uuid";
import Messages from "./Messages";
export default function Chat({ language, conversaciones }) {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat({
      initialMessages: [
        {
          role: "system",
          content: `Actua como un asistente de Orozcorp, llamado ChatDigest, tu trabajo es crear un resumen por dia de los mensajes de WhatsApp. Tambien se tiene que analizar el tono de la conversación y generar ideas para concretar la venta. El resumen tiene que ser corto y al punto. Todo tiene que ser en el lenguaje : ${language}`,
          id: uuidv4(),
          createdAt: new Date(),
        },
        {
          role: "user",
          content: `Ayudame a resumir y convertir en ventas las siguientes conversaciones: ' ${conversaciones}' el lenguaje tiene que ser en ${language}`,
          id: uuidv4(),
          createdAt: new Date(),
        },
        {
          role: "assistant",
          id: uuidv4(),
          content: "Hay algo en especifico para agregar: ",
          createdAt: new Date(),
        },
      ],
    });

  return (
    <>
      <div className="drop-shadow-md shadow-slate-800 w-full border rounded h-[70vh] overflow-y-auto">
        <Messages messages={messages.slice(2)} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="self-end w-full flex flex-row rounded-2xl"
      >
        <label htmlFor="chat" className="sr-only">
          Your message
        </label>
        <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 w-full">
          <textarea
            rows="1"
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your message..."
            required
            value={input}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            disabled={isLoading}
          >
            {isLoading ? (
              "Responding"
            ) : (
              <>
                <svg
                  className="w-5 h-5 rotate-90"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                </svg>
                <span className="sr-only">Send message</span>
              </>
            )}
          </button>
        </div>
      </form>
    </>
  );
}

"use client";
import { useState } from "react";
const MUTATION = `
  mutation Mutation($msgId: ID!, $body: String!) {
    wa_sendTextMessage(msgId: $msgId, body: $body) {
      code
      message
      success
    }
  }
`;
import { postData } from "../../../../../lib/helpers/getData";
import Spinner from "../../../../../components/atoms/Spinner";
import UploadMessage from "./UploadMessage";
export default function SendMessage({ idMessage, setRecheck }) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState("none");
  const sendMessage = async (e) => {
    e.preventDefault();
    console.log("called");
    if (!message) return;
    setLoading(true);
    const response = await postData({
      query: MUTATION,
      variables: {
        msgId: idMessage,
        body: message,
      },
    });
    setLoading(false);
    setMessage("");
    setRecheck(true);
  };
  return (
    <>
      <UploadMessage
        display={display}
        setDisplay={setDisplay}
        chatId={idMessage}
      />
      <form className="bg-zinc-400" onSubmit={sendMessage}>
        <label htmlFor="chat" className="sr-only">
          Tu mensaje
        </label>
        <div className="flex items-center px-3 py-2  bg-zinc-300 ">
          <button
            type="button"
            onClick={() => setDisplay("block")}
            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                fill="currentColor"
                d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
              />
            </svg>
            <span className="sr-only">Upload image</span>
          </button>
          <textarea
            id="chat"
            rows="1"
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Tu Mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 "
          >
            {loading ? (
              <Spinner />
            ) : (
              <svg
                className="w-5 h-5 rotate-90 rtl:-rotate-90"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
              </svg>
            )}
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </form>
    </>
  );
}

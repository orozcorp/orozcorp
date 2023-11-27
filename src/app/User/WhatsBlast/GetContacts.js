"use client";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import Spinner from "../../../components/atoms/Spinner";
import { postData } from "../../../lib/helpers/getData";
import SendMessage from "./SendMessage";
import { formatPhoneNumber, format_qty } from "../../../lib/helpers/formatters";
export default function GetContacts() {
  const [contacts, setContacts] = useState([]);
  const [display, setDisplay] = useState("none");

  const removeContact = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };
  const [loading, setLoading] = useState(false);
  const getContacts = async () => {
    setLoading(true);
    try {
      const data = await postData({
        query: `mutation Mutation {
          getContacts {
            id
            name
            number
            pushname
          }
        }`,
      });
      setContacts(data.getContacts);
      setLoading(false);
    } catch (error) {
      console.error("Error getting contacts:", error);
    }
  };
  return (
    <>
      <SendMessage
        display={display}
        setDisplay={setDisplay}
        contacts={contacts.map((contact) => ({
          value: contact.number,
          label: contact.name || contact.pushname,
        }))}
      />
      <div className="flex flex-row flex-wrap gap-8 justify-between items-center w-full">
        {contacts.length < 1 && (
          <button
            onClick={getContacts}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2"
          >
            Get Contacts
          </button>
        )}
        {contacts.length > 0 && (
          <>
            <h2 className="text-lg my-2">
              Contacts {format_qty(contacts.length)}
            </h2>
            <button
              onClick={() => setDisplay("block")}
              className="text-white bg-zinc-700 hover:bg-zinc-800 focus:outline-none focus:ring-4 focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2"
            >
              Generar Mensaje
            </button>
          </>
        )}
      </div>
      {loading && <Spinner />}
      {!loading && contacts.length > 0 && (
        <div className="relative overflow-x-auto rounded-xl">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 my-8 rounded-xl">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 rounded-xl ">
              <tr>
                <th scope="col" className="px-6 py-2">
                  Name
                </th>
                <th scope="col" className="px-6 py-2">
                  Phone
                </th>
                <th scope="col" className="px-6 py-2">
                  Remove from list
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr className="bg-white border-b" key={contact.id}>
                  <td className="px-6 py-1">
                    {contact.name || contact.pushname}
                  </td>
                  <td className="px-6 py-1">
                    {formatPhoneNumber(contact.number)}
                  </td>
                  <td className="px-6 py-1">
                    <div className="flex flex-row flex-wrap justify-center items-center">
                      <button
                        onClick={() => removeContact(contact.id)}
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2"
                      >
                        <AiOutlineDelete className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

"use client";
import { useState } from "react";
import Modal from "../../../components/atoms/Modal";
import SearcheableSelect from "../../../components/atoms/SearchableSelect";
import SearchableSelectMultiple from "../../../components/atoms/SearchableSelectMultiple";
import UploadMessages from "../../../components/atoms/UploadMessages";
import { useMutation } from "@tanstack/react-query";
import { wa_sendMassiveMessage } from "../../../server/userInteraction";

const typesOfMessages = [
  { label: "Texto", value: "Texto" },
  { label: "Imagen", value: "Imagen" },
  { label: "Documento", value: "Documento" },
];
export default function SendMessage({ display, setDisplay, contacts }) {
  const [percent, setPercent] = useState(0);
  const [contactsToSend, setContactsToSend] = useState([]);
  const [resetUpload, setResetUpload] = useState(false);
  const [loading, setLoading] = useState(false);
  const initial = {
    message: "",
    image: "",
    document: "",
    documentName: "",
    clientsSent: [],
  };
  const [form, setForm] = useState(initial);
  const [messageType, setMessageType] = useState({
    label: "Texto",
    value: "Texto",
  });
  const shouldShowButton = () => {
    switch (messageType.value) {
      case "Texto":
        return form.message.length > 0;
      case "Imagen":
        return form.image.length > 0 && form.message.length > 0;
      case "Documento":
        return form.document.length > 0 && form.message.length > 0;
      default:
        return false;
    }
  };
  const sendMessagesMutation = useMutation({
    async mutationFn({ input }) {
      const { data, errors } = await wa_sendMassiveMessage({ input });
      setLoading(false);
      setResetUpload(true);
      setForm(initial);
      setDisplay("none");
    },
  });
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const input = {
      input: {
        ...form,
        clientsSent: contactsToSend.map((contact) => contact.value),
      },
    };
    sendMessagesMutation.mutate({ input });
  };
  return (
    <Modal display={display} setDisplay={setDisplay}>
      <h2>Enviar Mensajes</h2>
      <form onSubmit={submit}>
        <SearchableSelectMultiple
          options={contacts}
          value={contactsToSend}
          onChange={(e) => setContactsToSend(e)}
          title="Selecciona a que contactos se le enviará esta prueba"
        />
        <div className="form-group w-full">
          <label htmlFor="message">
            Mensaje{" "}
            <small>
              Utiliza "${`{clientName}`}" para personalizar tu mensaje
            </small>
          </label>
          <textarea
            id="message"
            rows="3"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            value={form.message}
          />
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center gap-4 w-full">
          <div className="form-group flex-1 my-2">
            <label htmlFor="level">Tipo de mensaje</label>
            <SearcheableSelect
              options={typesOfMessages}
              value={messageType}
              onChange={(e) => setMessageType(e)}
            />
          </div>
          {messageType.value !== "Texto" && (
            <UploadMessages
              setForm={setForm}
              form={form}
              percent={percent}
              setPercent={setPercent}
              user="orozcorp"
              location="whatsblast"
              heading="Subir Archivo"
              messageType={messageType.value}
              resetUpload={resetUpload}
            />
          )}
        </div>
        {shouldShowButton() && (
          <button
            type="submit"
            disabled={loading}
            className="text-white bg-zinc-700 hover:bg-zinc-800 focus:outline-none focus:ring-4 focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2"
          >
            Enviar
          </button>
        )}
      </form>
    </Modal>
  );
}

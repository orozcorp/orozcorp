"use client";
import { useState } from "react";
import Modal from "../../../components/atoms/Modal";
import SearcheableSelect from "../../../components/atoms/SearchableSelect";
import UploadMessages from "../../../components/atoms/UploadMessages";
const typesOfMessages = [
  { label: "Texto", value: "Texto" },
  { label: "Imagen", value: "Imagen" },
  { label: "Documento", value: "Documento" },
];
export default function SendMessage({ display, setDisplay, contacts }) {
  const [percent, setPercent] = useState(0);
  const [resetUpload, setResetUpload] = useState(false);
  const initial = {
    message: "",
    image: "",
    document: "",
    documentName: "",
    clientsSent: contacts,
  };
  const [form, setForm] = useState({
    message: "",
  });
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
  return (
    <Modal display={display} setDisplay={setDisplay}>
      <h2>Enviar Mensajes</h2>
      <form>
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
            className="text-white bg-zinc-700 hover:bg-zinc-800 focus:outline-none focus:ring-4 focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2"
          >
            Enviar
          </button>
        )}
      </form>
    </Modal>
  );
}

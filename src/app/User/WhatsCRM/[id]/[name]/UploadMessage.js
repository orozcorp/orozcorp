"use client";
import { useState } from "react";
import Modal from "../../../../../components/atoms/Modal";
import UploadMessages from "../../../../../components/atoms/UploadMessages";
import SearchableSelect from "../../../../../components/atoms/SearchableSelect";
const typesOfMessages = [
  { label: "Imagen", value: "image" },
  { label: "Documento", value: "document" },
];
import { useMutation } from "@tanstack/react-query";
import { uploadMessage } from "../../../../../server/userInteraction";

import Spinner from "../../../../../components/atoms/Spinner";
export default function UploadMessage({ display, setDisplay, chatId }) {
  const [form, setForm] = useState({
    type: "image",
    phone: chatId,
  });
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [resetUpload, setResetUpload] = useState(false);
  const [messageType, setMessageType] = useState({
    label: "image",
    value: "Imagen",
  });
  const mutation = useMutation({
    async mutationFn({ input }) {
      const response = await uploadMessage({ input });
      return response;
    },
  });
  const enviarMensaje = async (e) => {
    e.preventDefault();
    if (!form.document && !form.image) return;
    setLoading(true);
    mutation.mutate(
      {
        input: {
          ...form,
          type: messageType.value,
        },
      },
      {
        onSuccess: (response) => {
          if (response.uploadMessage.success) {
            setForm({
              type: "image",
              phone: chatId,
            });
            setLoading(false);
            setPercent(0);
            setResetUpload(true);
            setDisplay("none");
          }
        },
      }
    );
  };
  return (
    <Modal display={display} setDisplay={setDisplay}>
      <h1 className="text-2xl mb-4">Subir documento</h1>
      <form onSubmit={enviarMensaje}>
        <div className="form-group flex-1 my-2">
          <label htmlFor="level">Tipo de mensaje</label>
          <SearchableSelect
            options={typesOfMessages}
            value={messageType}
            onChange={(e) => setMessageType(e)}
          />
        </div>
        <UploadMessages
          user="Msgs"
          location="Messages"
          heading="Subir Documento"
          setForm={setForm}
          percent={percent}
          setPercent={setPercent}
          messageType={messageType.value}
          resetUpload={resetUpload}
          form={form}
        />
        <button
          disabled={percent < 100 || loading}
          className="mt-4 text-white bg-zinc-800 hover:bg-zinc-900 disabled:bg-zinc-400 focus:outline-none focus:ring-4 focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
          type="submit"
        >
          {loading ? <Spinner /> : "Enviar"}
        </button>
      </form>
    </Modal>
  );
}

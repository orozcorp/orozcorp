"use client";

import { useState } from "react";
import { postData } from "../../../lib/helpers/getData";
import SearchableSelect from "../../../components/atoms/SearchableSelect";
import InputSimple from "../../../components/atoms/InputSimple";
import { dateInputFormat } from "../../../lib/helpers/formatters";
import Chat from "./Chat";
const getEndOfDay = (now) => {
  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23,
    59,
    59,
    999
  );
};
const getStartOfDay = (now) => {
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
};

const MUTATION = `
  mutation Wa_getResumen($input: ResumenInput!) {
    wa_getResumen(input: $input)
  }
`;

const languages = [
  { value: "spanish", label: "Español" },
  { value: "english", label: "English" },
  { value: "mandarin", label: "Mandarin" },
  { value: "french", label: "Français" },
  { value: "italian", label: "Italiano" },
];

export default function GenerateInfo({ contactos }) {
  const [contacto, setContacto] = useState({ value: "", label: "" });
  const [fechaInicio, setFechaInicio] = useState(getStartOfDay(new Date()));
  const [fechaFin, setFechaFin] = useState(() => getEndOfDay(new Date()));
  const [language, setLanguage] = useState({
    value: "spanish",
    label: "Español",
  });
  const [conversaciones, setConversaciones] = useState("");
  const getConversations = async (e) => {
    e.preventDefault();
    setConversaciones("");
    const data = await postData({
      query: MUTATION,
      variables: {
        input: {
          contactId: contacto.value,
          startDate: fechaInicio,
          endDate: fechaFin,
        },
      },
    });
    setConversaciones(data.wa_getResumen || "");
  };
  return (
    <>
      <div className="flex flex-row flex-wrap gap-8 w-full items-start mt-8">
        <SearchableSelect
          options={contactos}
          value={contacto}
          onChange={(e) => {
            setConversaciones("");
            setContacto(e);
          }}
          label="Selecciona Contacto"
        />
        <SearchableSelect
          options={languages}
          value={language}
          onChange={(e) => {
            setConversaciones("");
            setLanguage(e);
          }}
          label="Selecciona Lenguaje"
        />
        <InputSimple
          type="date"
          label="Fecha Inicio"
          id="fechaInicio"
          required
          value={dateInputFormat(fechaInicio)}
          onChange={(e) => {
            setFechaInicio(getStartOfDay(new Date(e.currentTarget.value)));
            setConversaciones("");
          }}
        />
        <InputSimple
          type="date"
          label="Fecha Final"
          id="fechaFinal"
          required
          value={dateInputFormat(fechaFin)}
          onChange={(e) => {
            const selectedDate = new Date(e.currentTarget.value);
            const endOfDay = getEndOfDay(selectedDate);
            setFechaFin(endOfDay);
            setConversaciones("");
          }}
        />

        <button
          type="button"
          onClick={getConversations}
          disabled={!contacto.value || !language.value}
          className="self-center text-white bg-zinc-800 hover:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-zinc-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 disabled:bg-zinc-400"
        >
          Generar resumen
        </button>
      </div>
      {conversaciones && (
        <Chat language={language.value} conversaciones={conversaciones} />
      )}
    </>
  );
}

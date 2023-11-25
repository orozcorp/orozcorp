import React from "react";

export default function LoadingMensajes() {
  return (
    <div className="mx-4 flex-1 overflow-y-auto  flex flex-col flex-nowrap justify-start items-start gap-1">
      <div className="flex flex-col flex-nowrap max-w-xl border p-2 rounded-lg shadow-md bg-green-100 border-green-100 self-end">
        <p>Cargando mensajes</p>
      </div>
      <div className="flex flex-col flex-nowrap max-w-xl border p-2 rounded-lg shadow-md bg-zinc-200 border-zinc-200">
        <p>Cargando mensajes</p>
      </div>
    </div>
  );
}

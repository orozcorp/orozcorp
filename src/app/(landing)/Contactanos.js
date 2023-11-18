"use client";
import { useEffect, useState } from "react";
import InputSimple from "../../components/atoms/InputSimple";

const MUTATION = `
  mutation SendContact($email: String!, $name: String!, $message: String!) {
    sendContact(email: $email, name: $name, message: $message) {
      code
      message
      success
      data
    }
  }
`;

export default function Contactanos({ bgColor }) {
  const [enviadoMensaje, setEnviadoMensaje] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);
  const initial = {
    name: "",
    email: "",
    message: "",
  };
  useEffect(() => {
    if (!sentMessage) {
      return;
    }
    setEnviadoMensaje(true);
  }, [sentMessage]);
  const [values, setValues] = useState(initial);
  const sendReport = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await postData({ query: MUTATION, variables: { ...values } });
      setValues(initial);
      setSentMessage(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`p-8 flex flex-col flex-nowrap justify-center items-center bg-${
        bgColor || "white"
      } text-${bgColor ? "white" : "black"}`}
    >
      {enviadoMensaje ? (
        <h2 className="text-center text-4xl font-bold mt-8 mb-4 w-full lg:w-3/4">
          Ya recibimos tu información estaremos contactándonos pronto
        </h2>
      ) : (
        <>
          <h2 className="text-2xl lg:text-4xl mt-8 mb-4 ">Contáctanos</h2>
          <form
            className="flex flex-col flex-nowrap justify-center items-center content-center lg:content-stretch gap-8 w-full"
            onSubmit={sendReport}
          >
            <div className="w-full lg:w-96">
              <InputSimple
                type="text"
                id="name"
                label="Nombre"
                required
                value={values.name}
                onChange={(e) =>
                  setValues({
                    ...values,
                    name: e.currentTarget.value.toUpperCase(),
                  })
                }
              />
            </div>
            <div className="w-full lg:w-96">
              <InputSimple
                type="email"
                id="email"
                label="Email"
                required
                value={values.email}
                onChange={(e) =>
                  setValues({
                    ...values,
                    email: e.currentTarget.value.toUpperCase(),
                  })
                }
              />
            </div>

            <div className="w-full lg:w-96">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                onChange={(e) =>
                  setValues({ ...values, message: e.currentTarget.value })
                }
                value={values.message}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`text-zinc-100 bg-${
                bgColor ? "white" : "black"
              } border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-10 py-3 me-2 mb-2`}
            >
              Enviar
            </button>
          </form>
        </>
      )}
    </div>
  );
}

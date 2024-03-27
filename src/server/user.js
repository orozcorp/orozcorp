"use server";
import createContext from "../config/createContext";
import { fetchFromMongo } from "../lib/mongoAPI";

export async function sendContact({ email, name, message }) {
  const { session } = await createContext();
  if (!session) return "Error";
  try {
    const input = { email, name, message, status: "Not checked" };
    const insert = await fetchFromMongo("Prospectos", "insertOne", {
      document: { ...input },
    });
    return {
      code: 200,
      success: true,
      message: `Se ingreso `,
      data: insert.insertedId,
    };
  } catch (error) {
    console.log(error);
    return {
      code: error.extensions.response.status,
      success: false,
      message: error.extensions.response.body,
    };
  }
}

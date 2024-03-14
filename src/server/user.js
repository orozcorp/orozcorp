"use server";
import createContext from "../config/createContext";
export async function sendContact({ email, name, message }) {
  const { session, db } = await createContext();
  if (!session) return "Error";
  try {
    const input = { email, name, message, status: "Not checked" };
    const insert = await db.collection("Prospectos").insertOne(input);
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

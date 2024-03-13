"use server";
import createContext from "../config/createContext";
import moment from "moment";
import {
  sendImagesParallel,
  sendDocumentsParallel,
  sendTextMessagesParallel,
} from "../apollo/helpers/messages";
export async function getContacts() {
  const { session } = await createContext();
  if (!session) return "Error";
  let url = `https://api.ultramsg.com/${
    process.env.WA_INSTANCE
  }/contacts?token=${encodeURIComponent(process.env.WA_TOKEN)}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const responseData = await response.json();
    const filteredContacts = responseData.filter(
      (contact) =>
        (contact.name || contact.pushname) &&
        !contact.isGroup &&
        !contact.isBlocked &&
        contact.number
    );
    return filteredContacts;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return "Error";
  }
}
export async function wa_getResumen({ input }) {
  const { session } = await createContext();
  if (!session) return "Error";
  const { contactId, startDate, endDate } = input;
  const start = moment(startDate).unix();
  const end = moment(endDate).unix();
  const token = encodeURIComponent(process.env.WA_TOKEN);
  const limit = "1000"; // or any other value you want to set
  let url = `https://api.ultramsg.com/${
    process.env.WA_INSTANCE
  }/chats/messages?token=${token}&chatId=${encodeURIComponent(
    contactId
  )}&limit=${limit}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const responseData = await response.json();
    const filteredMessages = responseData.filter(
      (message) =>
        message.timestamp >= start && message.timestamp <= end && message
    );
    const messageString = filteredMessages
      .map((msg) => {
        if (msg.type !== "chat") {
          return `Se mandó ${msg.type} - ${format_dateHrUnix(msg.timestamp)}`;
        } else {
          const prefix = msg.fromMe ? "Yo dije: " : "El cliente dijo: ";
          return `${prefix}${msg.body} - ${format_dateHrUnix(msg.timestamp)}`;
        }
      })
      .join("\n");
    return messageString;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return "Error";
  }
}
export async function wa_sendMassiveMessage({ input }) {
  const { session } = await createContext();
  if (!session) return "Error";
  const { clientsSent, message, image, document, documentName } = input;
  const type = image ? "image" : document ? "document" : "text";
  switch (type) {
    case "image":
      await sendImagesParallel({ clientsSent, message, image });
      break;
    case "document":
      await sendDocumentsParallel({
        clientsSent,
        message,
        document,
        documentName,
      });
      break;
    default:
      await sendTextMessagesParallel({ clientsSent, message });
      break;
  }
}
export async function getStatus() {
  const { session } = await createContext();
  if (!session) return "Error";

  let url = `https://api.ultramsg.com/${
    process.env.WA_INSTANCE
  }/instance/status?token=${encodeURIComponent(process.env.WA_TOKEN)}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const responseData = await response.json();
    if (responseData?.status?.accountStatus?.status) {
      return responseData?.status?.accountStatus?.status;
    } else {
      return "Error";
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return "Error";
  }
}
export async function getMe() {
  const { session } = await createContext();
  if (!session) return "Error";
  let url = `https://api.ultramsg.com/${
    process.env.WA_INSTANCE
  }/instance/me?token=${encodeURIComponent(process.env.WA_TOKEN)}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return "Error";
  }
}
export async function wa_logOut() {
  const { session } = await createContext();
  if (!session) return "Error";
  const buildUrl = (action) =>
    `https://api.ultramsg.com/${
      process.env.WA_INSTANCE
    }/instance/${action}?token=${encodeURIComponent(process.env.WA_TOKEN)}`;

  const url1 = buildUrl("logout");
  const url2 = buildUrl("clear");

  try {
    const fetchOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      redirect: "follow",
    };

    const response1 = await fetch(url1, fetchOptions);
    if (!response1.ok) throw new Error("Failed to log out.");

    const responseData1 = await response1.json();

    await fetch(url2, fetchOptions); // Assuming clear call doesn't need response validation

    return responseData1.status === "success"
      ? {
          code: 200,
          success: true,
          message: "Sesión cerrada correctamente",
        }
      : { code: 400, success: false, message: "Error al cerrar sesión" };
  } catch (error) {
    console.error("Fetch operation error:", error);
    return { code: 400, success: false, message: "Error al cerrar sesión" };
  }
}
export async function getQR() {
  const { session } = await createContext();
  if (!session) return "Error";
  let url = `https://api.ultramsg.com/${
    process.env.WA_INSTANCE
  }/instance/qrCode?token=${encodeURIComponent(process.env.WA_TOKEN)}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const responseData = await response.json();
    if (responseData.qrCode) {
      return responseData.qrCode;
    } else {
      return "Error";
    }
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return "Error";
  }
}
export async function getChats() {
  const { session } = await createContext();
  if (!session) return "Error";
  let url = `https://api.ultramsg.com/${
    process.env.WA_INSTANCE
  }/chats?token=${encodeURIComponent(process.env.WA_TOKEN)}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return "Error";
  }
}
export async function readMessages({ chatId }) {
  const { session } = await createContext();
  if (!session) return "Error";
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      token,
      chatId,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const response = await fetch(
      `https://api.ultramsg.com/${instance}/chats/read`,
      requestOptions
    );
    const result = await response.text();
    const answer = JSON.parse(result);
    if (answer.error) {
      throw new Error(answer.error);
    }
    return {
      code: 200,
      success: true,
      message: "Mensajes leidos",
    };
  } catch (error) {
    console.log("error", error);
    throw new Error(error); // Optionally, you can throw the error to handle it at a higher level
  }
}

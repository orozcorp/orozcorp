"use server";
import createContext from "../config/createContext";
import moment from "moment";
const instance = process.env.WA_INSTANCE;
const token = process.env.WA_TOKEN;
export async function sendImagesParallel({ clientsSent, message, image }) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // Function to create a fetch request for a given client
  const createFetchRequest = async (client) => {
    const objToInsert = {
      token, // assuming token is available in the scope
      to: client,
      caption: message,
      image,
    };
    var raw = JSON.stringify(objToInsert);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch(
      `https://api.ultramsg.com/${instance}/messages/image`,
      requestOptions
    )
      .then((response) =>
        response.text().then((result) => ({ response, result }))
      )
      .then(({ response, result }) => {
        if (response.ok) {
          return {
            code: 200,
            success: true,
            message: "Mensaje enviado",
            data: result,
          };
        } else {
          const errorResponse = JSON.parse(result);
          return {
            code: errorResponse.code || 400,
            success: false,
            message: errorResponse.message || "Error al enviar el mensaje",
          };
        }
      })
      .catch((error) => {
        console.log("error", error);
        return {
          code: 400,
          success: false,
          message: "Error al enviar el mensaje",
        };
      });
  };

  // Creating an array of promises for each client
  const requests = clientsSent.map((client) => createFetchRequest(client));

  // Using Promise.all to execute all requests in parallel
  try {
    const results = await Promise.all(requests);
    return results; // This will be an array of responses for each request
  } catch (error) {
    console.log("error", error);
    return {
      code: 400,
      success: false,
      message: "Error al enviar el mensaje",
    };
  }
}
export async function sendDocumentsParallel({
  clientsSent,
  message,
  document,
  documentName,
}) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // Function to create a fetch request for a given client
  const createFetchRequest = async (client) => {
    const objToInsert = {
      token, // assuming token is available in the scope
      to: client,
      caption: message,
      document,
      filename: documentName,
    };
    var raw = JSON.stringify(objToInsert);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch(
      `https://api.ultramsg.com/${instance}/messages/document`,
      requestOptions
    )
      .then((response) =>
        response.text().then((result) => ({ response, result }))
      )
      .then(({ response, result }) => {
        if (response.ok) {
          return {
            code: 200,
            success: true,
            message: "Mensaje enviado",
            data: result,
          };
        } else {
          const errorResponse = JSON.parse(result);
          return {
            code: errorResponse.code || 400,
            success: false,
            message: errorResponse.message || "Error al enviar el mensaje",
          };
        }
      })
      .catch((error) => {
        console.log("error", error);
        return {
          code: 400,
          success: false,
          message: "Error al enviar el mensaje",
        };
      });
  };

  // Creating an array of promises for each client
  const requests = clientsSent.map((client) => createFetchRequest(client));

  // Using Promise.all to execute all requests in parallel
  try {
    const results = await Promise.all(requests);
    return results; // This will be an array of responses for each request
  } catch (error) {
    console.log("error", error);
    return {
      code: 400,
      success: false,
      message: "Error al enviar el mensaje",
    };
  }
}
export async function sendTextMessagesParallel({ clientsSent, message }) {
  // Preparing headers and body outside the loop as they remain constant for each request
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  // Function to create a fetch request for a given client
  const createFetchRequest = async (client) => {
    let urlencoded = new URLSearchParams();
    urlencoded.append("token", process.env.WA_TOKEN);
    urlencoded.append("to", client);
    urlencoded.append("body", message);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    return fetch(
      `https://api.ultramsg.com/${process.env.WA_INSTANCE}/messages/chat`,
      requestOptions
    )
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        if (responseData.message !== "ok") {
          console.log("error", responseData);
          return {
            code: 400,
            success: false,
            message: "Error al enviar el mensaje",
          };
        }
        return {
          code: 200,
          success: true,
          message: "Mensaje enviado correctamente",
        };
      })
      .catch((error) => {
        console.log("error", error);
        return {
          code: 400,
          success: false,
          message: "Error al enviar el mensaje",
        };
      });
  };

  // Creating an array of promises for each client
  const requests = clientsSent.map((client) => createFetchRequest(client));

  // Using Promise.all to execute all requests in parallel
  try {
    const results = await Promise.all(requests);
    return results; // This will be an array of responses for each request
  } catch (error) {
    console.log("error", error);
    return {
      code: 400,
      success: false,
      message: "Error al enviar el mensaje",
    };
  }
}

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
export async function uploadMessage({ input }) {
  const { session } = await createContext();
  if (!session) return "Error";
  const { type, phone } = input;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const objToInsert = {
    token,
    to: phone.replace("%40", "@"),
    caption: `Adjunto ${type}`,
  };

  if (type === "image") objToInsert[type] = input.image;
  if (type === "document") {
    objToInsert[type] = input.document;
    objToInsert["filename"] = input.documentName;
  }
  var raw = JSON.stringify(objToInsert);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://api.ultramsg.com/${instance}/messages/${type}`,
      requestOptions
    );

    const result = await response.text();
    if (response.ok) {
      return {
        code: 200,
        success: true,
        message: "Mensaje enviado",
        data: result, // Adjust as needed
      };
    } else {
      const errorResponse = JSON.parse(result);
      return {
        code: errorResponse.code || 400,
        success: false,
        message: errorResponse.message || "Error al enviar el mensaje",
      };
    }
  } catch (error) {
    console.log("error", error);
    return {
      code: 400,
      success: false,
      message: "Error al enviar el mensaje",
    };
  }
}
export async function wa_sendTextMessage({ msgId, body }) {
  const { session } = await createContext();
  if (!session) return "Error";
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  let urlencoded = new URLSearchParams();
  urlencoded.append("token", process.env.WA_TOKEN);
  urlencoded.append("to", msgId.replace("%40", "@"));
  urlencoded.append("body", body);
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://api.ultramsg.com/${process.env.WA_INSTANCE}/messages/chat`,
      requestOptions
    );
    const responseData = await response.json();
    if (responseData.message !== "ok") {
      console.log("error", responseData);
      return {
        code: 400,
        success: false,
        message: "Error al enviar el mensaje",
      };
    }
    return {
      code: 200,
      success: true,
      message: "Mensaje enviado correctamente",
    };
  } catch (error) {
    console.log("error", error);
    return {
      code: 400,
      success: false,
      message: "Error al enviar el mensaje",
    };
  }
}
export async function getMessages({ id }) {
  const { session } = await createContext();
  if (!session) return "Error";
  const result = id.replace("%40", "@");
  const token = encodeURIComponent(process.env.WA_TOKEN);
  const limit = "1000"; // or any other value you want to set

  let url = `https://api.ultramsg.com/${
    process.env.WA_INSTANCE
  }/chats/messages?token=${token}&chatId=${encodeURIComponent(
    result
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
    return responseData;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return "Error";
  }
}

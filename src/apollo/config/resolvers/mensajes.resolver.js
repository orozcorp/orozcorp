import { ObjectId } from "mongodb";
import { v4 as uuidv4 } from "uuid";
const instance = process.env.WA_INSTANCE;
const token = process.env.WA_TOKEN;

export const mensajesResolver = {
  Mutation: {
    getQR: async (_, __, { db }) => {
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
    },
    getContacts: async (_, __, { db }) => {
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
    },
    wa_logOut: async (_, __, { db }) => {
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
    },
    wa_sendTextMessage: async (_, { msgId, body }, { db }) => {
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
    },
    readMessages: async (root, { chatId }, { db }) => {
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
    },
    uploadMessage: async (root, { input }, { db }) => {
      const { type, phone, document, filename } = input;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const objToInsert = {
        token,
        to: phone,
        priority: 5,
        referenceId: uuidv4(),
        body: `Adjunto ${type}`,
      };
      objToInsert[type] = document;
      if (type === "document") objToInsert["filename"] = filename;
      var raw = JSON.stringify(objToInsert);
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      try {
        fetch(
          `https://api.ultramsg.com/${instance}/messages/${type}`,
          requestOptions
        )
          .then((response) => response.text())
          .then(async (result) => {
            if (result.error) {
              return {
                code: 400,
                success: false,
                message: "Error al enviar el mensaje",
              };
            }
            const res = JSON.parse(result);
          })
          .catch((error) => {
            console.log("error", error);
            return {
              code: 400,
              success: false,
              message: "Error al enviar el mensaje",
            };
          });
        return {
          code: 200,
          success: true,
          message: "Mensaje enviado",
          data: "insertedId",
        };
      } catch (error) {
        console.log("error", error);
        return {
          code: 400,
          success: false,
          message: "Error al enviar el mensaje",
        };
      }
    },
  },
  Query: {
    getStatus: async (_, __, { db }) => {
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
    },
    getMe: async (_, __, { db }) => {
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
    },
    getChats: async (_, __, { db }) => {
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
    },
    getMessages: async (_, { id }, { db }) => {
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
    },
  },
};

import { ObjectId } from "mongodb";

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
    getMessages: async (_, { chatId }, { db }) => {
      const token = encodeURIComponent(process.env.WA_TOKEN);
      const limit = "1000"; // or any other value you want to set

      let url = `https://api.ultramsg.com/${
        process.env.WA_INSTANCE
      }/chats/messages?token=${token}&chatId=${encodeURIComponent(
        chatId
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

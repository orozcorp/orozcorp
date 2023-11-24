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
  },
};

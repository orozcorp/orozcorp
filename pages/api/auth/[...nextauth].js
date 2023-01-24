import EmailProvider from "next-auth/providers/email";
import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongoPromise";
import { connectToDatabase } from "../../../lib/mongodb";

const options = {
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  theme: {
    colorScheme: "ligth",
    brandColor: "#008080",
    logo: "https://orozcorp.s3.us-east-2.amazonaws.com/orozcorp/TECBOY+FACE.svg",
    buttonText: "#fff",
  },
  callbacks: {
    async signIn({ user }) {
      const { db } = await connectToDatabase();
      const existe = await db
        .collection("users")
        .findOne({ email: user?.email });
      if (existe) {
        return true;
      } else {
        return false;
      }
    },
    async session({ session, user, token }) {
      const { db } = await connectToDatabase();
      const userInfo = await db
        .collection("users")
        .findOne({ email: user?.email });
      if (userInfo) {
        session.roles = userInfo.profile.roles;
        session.user.id = userInfo._id;
        session.user.name = `${userInfo.profile.nombre} ${userInfo.profile.apellido}`;
        session.user.photo = userInfo.profile.picture;
        return session;
      }
      return {};
    },
  },
};
export default (req, res) => NextAuth(req, res, options);

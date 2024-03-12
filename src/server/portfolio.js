"use server";
import { ObjectId } from "mongodb";
import mongoDBtoJS from "../utils/mongodbReplacer";
import createContext from "../config/createContext";

export async function getPortfolios() {
  const { db } = await createContext();
  const portfolios = await db.collection("Portfolio").find({}).toArray();
  return mongoDBtoJS(portfolios);
}

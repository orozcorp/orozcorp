"use server";
import { ObjectId } from "mongodb";
import mongoDBtoJS from "../utils/mongodbReplacer";
import createContext from "../config/createContext";

export async function getPortfolios() {
  const { db } = await createContext();
  const portfolios = await db.collection("Portfolio").find({}).toArray();
  return mongoDBtoJS(portfolios);
}

export async function getPortfolioById({ id }) {
  const { db } = await createContext();
  const portfolio = await db
    .collection("Portfolio")
    .findOne({ _id: new ObjectId(id) });
  return mongoDBtoJS(portfolio);
}

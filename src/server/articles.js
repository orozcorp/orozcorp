"use server";
import { ObjectId } from "mongodb";
import mongoDBtoJS from "../utils/mongodbReplacer";
import createContext from "../config/createContext";

export async function blogGetAll({ limit }) {
  try {
    const { db } = await createContext();
    const data = await db
      .collection("Blog")
      .aggregate([{ $sample: { size: limit } }])
      .sort({ "article.publishedTime": -1 })
      .toArray();

    return mongoDBtoJS(data);
  } catch (error) {
    return [];
  }
}

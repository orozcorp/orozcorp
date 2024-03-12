import { ObjectId } from "mongodb";

function mongoDBReplacer(key, value) {
  // Convert ObjectId to string
  if (value instanceof ObjectId) {
    return value.toString();
  }
  // Convert Date objects to ISO string
  if (value instanceof Date) {
    return value.toISOString();
  }

  return value;
}

export default function mongoDBToJS(mongoData) {
  return JSON.parse(JSON.stringify(mongoData, mongoDBReplacer));
}

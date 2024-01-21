import { ObjectId } from "mongodb";
export const articleResolvers = {
  Query: {
    blogGetById: async (root, { _id }, { db }) => {
      try {
        const data = await db
          .collection("Blog")
          .findOne({ _id: new ObjectId(_id) });
        return data;
      } catch (error) {
        console.log(error);
        return {};
      }
    },
    blogGetAll: async (root, { limit }, { db }) => {
      try {
        const data = await db
          .collection("Blog")
          .aggregate([{ $sample: { size: limit } }])
          .sort({ "article.publishedTime": -1 })
          .toArray();

        return data;
      } catch (error) {
        return [];
      }
    },
  },
};

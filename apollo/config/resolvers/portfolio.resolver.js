export const portFolioResolvers = {
  Mutation: {
    insertPortfolio: async (root, { input }, { db }) => {
      try {
        const insert = await db.collection("Portfolio").insertOne(input);
        return {
          code: 200,
          success: true,
          message: `Se ingreso `,
        };
      } catch (error) {
        console.log(error);
        return {
          code: error.extensions.response.status,
          success: false,
          message: error.extensions.response.body,
        };
      }
    },
  },
  Query: {
    listPortfolio: async (root, { offset, limit }, { db }) => {
      const limitOffset = await db.collection("Portfolio").count();
      return await db
        .collection("Portfolio")
        .find({}, { sort: { startDate: -1 } })
        .skip(offset < limitOffset ? offset : 0)
        .limit(limit)
        .toArray();
    },
  },
};

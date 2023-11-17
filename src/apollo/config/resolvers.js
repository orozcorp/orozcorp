const { mergeResolvers } = require("@graphql-tools/merge");

import { portfolioResolvers } from "./resolvers/portfolio.resolver";
import { uploadsResolver } from "./resolvers/uploadsAndOther";
import { usersResolvers } from "./resolvers/users.resolver";

const resolvers = mergeResolvers([
  usersResolvers,
  uploadsResolver,
  portfolioResolvers,
]);

export default resolvers;

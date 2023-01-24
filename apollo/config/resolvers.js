const { mergeResolvers } = require("@graphql-tools/merge");

import { portFolioResolvers } from "./resolvers/portfolio.resolver";
import { uploadsResolver } from "./resolvers/uploadsAndOther";
import { userResolvers } from "./resolvers/users.resolver";

const resolvers = mergeResolvers([
  userResolvers,
  uploadsResolver,
  portFolioResolvers,
]);

export default resolvers;

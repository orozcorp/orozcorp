import { mergeResolvers } from "@graphql-tools/merge";

import { articleResolvers } from "./resolvers/articles.resolver";
import { portfolioResolvers } from "./resolvers/portfolio.resolver";
import { uploadsResolver } from "./resolvers/uploadsAndOther";
import { usersResolvers } from "./resolvers/users.resolver";
import { mensajesResolver } from "./resolvers/mensajes.resolver";

const resolvers = mergeResolvers([
  usersResolvers,
  uploadsResolver,
  portfolioResolvers,
  articleResolvers,
  mensajesResolver,
]);

export default resolvers;

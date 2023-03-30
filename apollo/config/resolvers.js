const { mergeResolvers } = require("@graphql-tools/merge");

import { uploadsResolver } from "./resolvers/uploadsAndOther";
import { usersResolvers } from "./resolvers/users.resolver";

const resolvers = mergeResolvers([usersResolvers, uploadsResolver]);

export default resolvers;

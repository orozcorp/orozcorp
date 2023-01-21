const { mergeResolvers } = require("@graphql-tools/merge");

import { uploadsResolver } from "./resolvers/uploadsAndOther";
import { userResolvers } from "./resolvers/users.resolver";

const resolvers = mergeResolvers([userResolvers, uploadsResolver]);

export default resolvers;

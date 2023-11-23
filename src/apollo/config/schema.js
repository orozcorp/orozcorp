import { mergeTypeDefs } from "@graphql-tools/merge";
import { article } from "./types/articles";
import { portfolio } from "./types/portfolio";
import { responses } from "./types/responses";
import { uploadSchema } from "./types/uploadAndOther";
import { usersSchema } from "./types/users";
import { mensajes } from "./types/mensajes";
const schema = mergeTypeDefs([
  responses,
  uploadSchema,
  usersSchema,
  portfolio,
  article,
  mensajes,
]);
export default schema;

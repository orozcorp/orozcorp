import { mergeTypeDefs } from "@graphql-tools/merge";
import { portfolio } from "./types/portfolio";
import { responses } from "./types/responses";
import { uploadSchema } from "./types/uploadAndOther";
import { usersSchema } from "./types/users";

const schema = mergeTypeDefs([responses, uploadSchema, usersSchema, portfolio]);
export default schema;

import { gql } from "@apollo/client";

export const mensajes = gql`
  type Contacts {
    id: String
    number: String
    name: String
    pushname: String
    isBusiness: Boolean
    isBlocked: Boolean
  }
  type Mutation {
    getQR: String
    getContacts: [Contacts]
  }
  type Query {
    getStatus: String
  }
`;

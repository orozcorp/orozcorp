import { gql } from "@apollo/client";

export const mensajes = gql`
  type MEWa {
    id: String
    name: String
    profile_picture: String
  }
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
    getMe: MEWa
  }
`;

import { gql } from "@apollo/client";

export const usersSchema = gql`
  type UserProfile {
    name: String!
    lastName: String!
  }
  type User {
    _id: ID!
    profile: UserProfile
  }
  type Query {
    portFolioSearch: [User]
  }
`;

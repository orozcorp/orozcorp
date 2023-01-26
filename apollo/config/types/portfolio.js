import { gql } from "@apollo/client";

export const portfolio = gql`
  enum AllowedTec {
    HTML
    CSS
    JS
    Node
    Mongo
    Meteor
    ReactJs
    Apollo
    GraphQL
    NextJs
  }
  type ImagesPortfolio {
    _id: ID!
    photo: String!
    description: String!
  }
  type Portfolio {
    _id: ID!
    projectName: String!
    description: String!
    startDate: Date!
    endDate: Date
    website: String!
    tecUsed: [AllowedTec]
    designBy: String!
    client: String!
    show: Boolean
    mainImage: ImagesPortfolio
    images: [ImagesPortfolio!]
  }
  input InputImagesPortfolio {
    _id: ID!
    photo: String!
    description: String!
  }
  input InputPortfolio {
    _id: ID!
    startDate: Date!
    endDate: Date
    projectName: String!
    website: String!
    tecUsed: [AllowedTec]
    description: String!
    mainImage: InputImagesPortfolio!
    designBy: String!
    client: String!
  }
  type Mutation {
    "insert PortFolio"
    insertPortfolio(input: InputPortfolio): GeneralResponse!
  }
  type Query {
    listPortfolio(offset: Int!, limit: Int!): [Portfolio]
  }
`;

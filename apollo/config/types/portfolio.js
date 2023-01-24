import { gql } from "@apollo/client";

export const portfolio = gql`
  enum AllowedTec {
    html5
    css
    js
    node
    mongo
    meteor
    apollo
    graphQL
    nextJS
  }
  type ImagesPortfolio {
    _id: ID!
    photo: String!
    description: String!
  }
  type Portfolio {
    _id: ID!
    projectName: String!
    startDate: Date!
    endDate: Date
    website: String!
    tecUsed: [AllowedTec]
    mainImage: ImagesPortfolio
    description: String!
    images: [ImagesPortfolio!]
    designBy: String!
    client: String!
    show: Boolean
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
    website: String!
    tecUsed: [AllowedTec]
    description: String!
    mainImage: InputImagesPortfolio
    images: [InputImagesPortfolio!]
    designBy: String!
    client: String!
  }
  type Mutation {
    "insert PortFolio"
    insertPortfolio(input: InputPortfolio): GeneralResponse!
  }
  type Query {
    listPortfolio: [Portfolio]
  }
`;

import { gql } from "@apollo/client";

export const article = gql`
  type BlogArticle {
    publishedTime: Date!
    modifiedTime: Date!
    expirationTime: Date!
    authors: [String]!
    tags: [String]!
  }
  type BlogImage {
    url: String!
    width: Int!
    height: Int!
    alt: String!
  }
  type Blog {
    _id: ID!
    title: String!
    content: String!
    awsLambda: String
    description: String!
    article: BlogArticle!
    promptIdeas: [String]
    chatId: ID
    messageId: ID
    imagePrompt: String
    status: String
    images: [BlogImage]
  }
  type Query {
    blogGetById(_id: ID!): Blog
    blogGetAll(limit: Int!): [Blog]
  }
`;

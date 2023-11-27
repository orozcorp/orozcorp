import { gql } from "@apollo/client";

export const mensajes = gql`
  type MEWa {
    id: String
    name: String
    profile_picture: String
  }
  type GroupParticipants {
    id: ID!
    isAdmin: Boolean!
    isSuperAdmin: Boolean!
  }
  type GroupMetadata {
    description: String!
    edit_group_info: String
    send_messages: String
    owner: ID!
    participants: [GroupParticipants]
  }
  type Chats {
    id: ID!
    name: String
    isReadyOnly: Boolean
    isGroup: Boolean
    groupMetadata: GroupMetadata
    last_time: Float
    pinned: Boolean
    archived: Boolean
    isMuted: Boolean
    unread: Int
    messages: [MessageData]
  }
  type MessageData {
    id: ID!
    from: String
    to: String
    author: String
    pushname: String
    ack: String
    type: String
    body: String
    media: String
    fromMe: Boolean
    self: Boolean
    link: String
    isForwarded: Boolean
    isMentioned: Boolean
    quotedMsg: QuotedMsg
    mentionedIds: [String]
    timestamp: Float
    filename: String
  }
  type QuotedMsg {
    id: ID
    body: String
    media: String
  }
  type Message {
    id: ID!
    event_type: String!
    instanceId: String!
    data: MessageData!
  }
  type Contacts {
    id: String
    number: String
    name: String
    pushname: String
    isBusiness: Boolean
    isBlocked: Boolean
  }
  input UploadMessageInput {
    type: String!
    phone: String!
    document: String
    fileName: String!
  }
  type Mutation {
    getQR: String
    getContacts: [Contacts]
    wa_logOut: GeneralResponse!
    wa_sendTextMessage(msgId: ID!, body: String!): GeneralResponse!
    readMessages(chatId: String!): GeneralResponse!
    uploadMessage(input: UploadMessageInput!): GeneralResponse!
  }
  type Query {
    getStatus: String
    getMe: MEWa
    getChats: [Chats]
    getMessages(id: ID!): [MessageData]
  }
`;

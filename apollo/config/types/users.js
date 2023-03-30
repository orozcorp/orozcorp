import { gql } from "@apollo/client";

export const usersSchema = gql`
  enum AllowedRoles {
    admin
    superAdmin
    client
    familiar
  }
  type Medicamentos {
    _id: ID!
    fechaInicio: Date!
    fechaFin: Date!
    nombre: String!
    dosis: String!
    frecuencia: String!
    observaciones: String
    recetadaPor: String!
    medicoId: ID!
    active: Boolean!
  }
  type UserProfile {
    name: String!
    lastName: String!
    roles: [AllowedRoles!]!
    picture: String
    caratulaSeguro: String
    tarjetaSeguro: String
    fechaNacimiento: Date
    peso: Float
    estatura: Float
    alergias: [String]
    enfermedades: [String]
    medicamentos: [Medicamentos]
    medicos: [Medicos]
  }
  type User {
    _id: ID!
    profile: UserProfile
  }
  type Query {
    getUserProfile(idUser: String!): User
  }
`;

import { gql } from "@apollo/client";

export const usersSchema = gql`
  enum AllowedRoles {
    admin
    superAdmin
    client
    familiar
  }
  type BabyGrowth {
    _id: ID!
    user: ID!
    fecha: Date!
    peso: Float!
    estatura: Float
  }
  type Familia {
    _id: ID!
    nombre: String!
    administradorName: String!
    administradorId: ID!
  }

  type Medicamentos {
    _id: ID!
    fechaInicio: Date!
    fechaFin: Date!
    nombre: String!
    dosis: String!
    frecuencia: String!
    observaciones: String
    sirvePara: String!
    medicoName: String!
    medicoId: ID!
  }
  input MedicamentosInput {
    fechaInicio: Date!
    fechaFin: Date!
    nombre: String!
    dosis: String!
    frecuencia: String!
    observaciones: String
    sirvePara: String!
    medicoName: String!
    medicoId: ID!
  }
  type MedicosProfile {
    _id: ID!
    nombre: String!
    apellido: String!
    telefonos: [String]
    especialidad: String!
    direccion: String
  }
  type HistorialMedico {
    _id: ID!
    fecha: Date!
    descripcion: String!
    medicoName: String!
    medicoId: ID!
  }
  type UserProfile {
    name: String!
    lastName: String!
    roles: [AllowedRoles!]!
    picture: String
    caratulaSeguro: String
    tarjetaSeguro: String
    fechaVencimientoSeguro: Date
    fechaNacimiento: Date
    peso: Float
    estatura: Float
    historialPeso: [BabyGrowth]
    tipoSangre: String
    alergias: [String]
    enfermedades: [String]
    medicamentos: [Medicamentos]
    medicos: [MedicosProfile]
    minor: Boolean
    familias: [Familia]
    rfc: String!
    curp: String!
    historialMedico: [HistorialMedico]
  }
  input FamiliaInput {
    _id: ID!
    nombre: String!
    administradorName: String!
    administradorId: ID!
  }
  input UserInput {
    email: String!
    name: String!
    lastName: String!
    roles: [AllowedRoles!]!
    peso: Float!
    estatura: Float!
    alergias: [String]
    enfermedades: [String]
    familias: [FamiliaInput]
    tipoSangre: String!
    fechaNacimiento: Date!
    rfc: String!
    curp: String!
  }
  input UserInputEdit {
    tipoSangre: String!
    fechaNacimiento: Date!
    rfc: String!
    curp: String!
    peso: Float!
    estatura: Float!
    name: String!
    lastName: String!
    alergias: [String]
    enfermedades: [String]
  }
  input SeguroInput {
    caratulaSeguro: String!
    tarjetaSeguro: String!
    fechaVencimientoSeguro: Date!
  }
  type User {
    _id: ID!
    createdAt: Date!
    email: String!
    emailVerified: Date
    profile: UserProfile
  }
  type Query {
    getUserProfile(idUser: String!, oldMed: Boolean!): User
    getFamilyMembers(idFamilia: String): [User]
    getFamilyDoctors(idUser: ID!, nombre: String): [MedicosProfile]
  }
  type Mutation {
    insertUser(input: UserInput!): GeneralResponse!
    updateUserProfile(
      userId: ID!
      email: String!
      input: UserInputEdit!
    ): GeneralResponse!
    updateUserWeightHeight(
      idUser: String!
      estatura: Float!
      peso: Float!
      fecha: Date!
    ): GeneralResponse!
    updateUserSeguro(idUser: String!, seguro: SeguroInput!): GeneralResponse!
    insertUserMedicamentos(
      idUser: String!
      medicamento: MedicamentosInput!
    ): GeneralResponse!
  }
`;

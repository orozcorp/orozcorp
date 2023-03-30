import { gql } from "@apollo/client";

export const medicosSchema = gql`
  type Medicos {
    _id: ID!
    nombre: String!
    apellido: String!
    telefonos: [String]
    especialidad: String!
    direccion: String!
  }
  type VisitasMedicas {
    _id: ID!
    fecha: Date!
    motivo: String!
    diagnostico: String!
    tratamiento: String!
    medicoId: ID!
    pacienteId: ID!
    pacienteName: String!
    medicoName: String!
  }
`;

import { ObjectId } from "mongodb";

export const usersResolvers = {
  Query: {
    getUserProfile: async (root, { idUser }, { db }) => {
      console.log("getUserProfile", idUser);
      return await db.collection("users").findOne(
        { _id: ObjectId(idUser) },
        {
          projection: {
            _id: 1,
            "profile.name": 1,
            "profile.lastName": 1,
            "profile.caratulaSeguro": 1,
            "profile.tarjetaSeguro": 1,
            "profile.fechaNacimiento": 1,
            "profile.peso": 1,
            "profile.estatura": 1,
            "profile.alergias": 1,
            "profile.enfermedades": 1,
            "profile.medicos": 1,
            "profile.medicamentos": {
              $filter: {
                input: "$profile.medicamentos",
                as: "medicamento",
                cond: { $gte: ["$$medicamento.fechaFin", new Date()] },
              },
            },
          },
        }
      );
    },
  },
  Mutation: {
    insertUser: async (root, { input }, { db }) => {
      const email = input.email;
      delete input.email;
      const user = { profile: { ...input }, createdAt: new Date(), email };
      try {
        const { insertedId } = await db.collection("users").insertOne(user);
        return {
          message: "Usuario creado",
          success: true,
          code: 200,
        };
      } catch (error) {
        console.error(error);
        return {
          code: 400,
          message: "Error al crear usuario",
          success: false,
        };
      }
    },
  },
};

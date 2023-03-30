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
};

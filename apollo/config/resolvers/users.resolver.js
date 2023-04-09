import { ObjectId } from "mongodb";
function isYoungerThan18(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // Adjust the age based on the month and day difference
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age < 18;
}

export const usersResolvers = {
  Query: {
    getUserProfile: async (root, { idUser }, { db }) => {
      const user = await db.collection("users").findOne(
        { _id: new ObjectId(idUser) },
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
            "profile.tipoSangre": 1,
            "profile.alergias": 1,
            "profile.enfermedades": 1,
            "profile.medicos": 1,
            "profile.rfc": 1,
            "profile.curp": 1,
            "profile.fechaVencimientoSeguro": 1,
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
      return user;
    },
    getFamilyMembers: async (root, { idFamilia }, { db }) => {
      return await db
        .collection("users")
        .find(
          { "profile.familias._id": idFamilia },
          {
            projection: {
              _id: 1,
              "profile.name": 1,
              "profile.lastName": 1,
            },
          }
        )
        .toArray();
    },
  },
  Mutation: {
    insertUser: async (root, { input }, { db }) => {
      const email = input.email;
      delete input.email;
      input.fechaNacimiento = new Date(input.fechaNacimiento);
      input.minor = isYoungerThan18(input.fechaNacimiento);
      input.medicamentos = [];
      input.medicos = [];
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
    updateUserWeight: async (root, { idUser, peso }, { db }) => {
      try {
        await db
          .collection("users")
          .updateOne(
            { _id: new ObjectId(idUser) },
            { $set: { "profile.peso": peso } }
          );
        return {
          message: "Peso actualizado",
          success: true,
          code: 200,
        };
      } catch (error) {
        console.error(error);
        return {
          code: 400,
          message: "Error al actualizar peso",
          success: false,
        };
      }
    },
    updateUserWeightHeight: async (
      root,
      { idUser, estatura, peso },
      { db }
    ) => {
      try {
        await db
          .collection("users")
          .updateOne(
            { _id: new ObjectId(idUser) },
            { $set: { "profile.estatura": estatura, "$profile.peso": peso } }
          );
        const obj = {
          user: idUser,
          peso,
          estatura,
        };
        await db.collection("BabyGrowth").insertOne(obj);
        return {
          message: "Estatura actualizada",
          success: true,
          code: 200,
        };
      } catch (error) {
        console.error(error);
        return {
          code: 400,
          message: "Error al actualizar estatura",
          success: false,
        };
      }
    },
    updateUserSeguro: async (root, { idUser, seguro }, { db }) => {
      try {
        await db.collection("users").updateOne(
          { _id: new ObjectId(idUser) },
          {
            $set: {
              "profile.caratulaSeguro": seguro.caratulaSeguro,
              "profile.tarjetaSeguro": seguro.tarjetaSeguro,
              "profile.fechaVencimientoSeguro": seguro.fechaVencimientoSeguro,
            },
          }
        );
        return {
          message: "Seguro actualizado",
          success: true,
          code: 200,
        };
      } catch (error) {
        console.error(error);
        return {
          code: 400,
          message: "Error al actualizar seguro",
          success: false,
        };
      }
    },
  },
};

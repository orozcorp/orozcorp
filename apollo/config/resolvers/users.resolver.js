import { ObjectId } from "mongodb";
import { v4 as uuidv4 } from "uuid";
function isYoungerThan18(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
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
    getUserProfile: async (root, { idUser, oldMed }, { db }) => {
      const filterCondition = oldMed
        ? { $lte: ["$$medicamento.fechaFin", new Date()] }
        : { $gte: ["$$medicamento.fechaFin", new Date()] };

      const projection = {
        _id: 1,
        email: 1,
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
        "profile.minor": 1,
        "profile.fechaVencimientoSeguro": 1,
        "profile.historialPeso": 1,
        "profile.historialMedico": 1,
        "profile.medicamentos": {
          $filter: {
            input: "$profile.medicamentos",
            as: "medicamento",
            cond: filterCondition,
          },
        },
      };

      const user = await db
        .collection("users")
        .findOne({ _id: new ObjectId(idUser) }, { projection });

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
    getFamilyDoctors: async (root, { idUser, nombre }, { db }) => {
      if (nombre === "") return [];
      return await db
        .collection("users")
        .aggregate([
          {
            $match: {
              _id: new ObjectId(idUser),
            },
          },
          {
            $unwind: "$profile.medicos",
          },
          {
            $match: {
              $or: [
                {
                  "profile.medicos.nombre": {
                    $regex: nombre,
                    $options: "i",
                  },
                },
                {
                  "profile.medicos.apellido": {
                    $regex: nombre,
                    $options: "i",
                  },
                },
              ],
            },
          },
          {
            $group: {
              _id: "$_id",
              medicos: {
                $push: "$profile.medicos",
              },
            },
          },
          {
            $project: {
              _id: 0,
              medicos: 1,
            },
          },
          {
            $unwind: "$medicos",
          },
          {
            $project: {
              _id: "$medicos._id",
              nombre: "$medicos.nombre",
              apellido: "$medicos.apellido",
              telefonos: "$medicos.telefonos",
              especialidad: "$medicos.especialidad",
              direccion: "$medicos.direccion",
            },
          },
          {
            $sort: {
              nombre: 1,
              apellido: 1,
            },
          },
        ])
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
    updateUserWeightHeight: async (
      root,
      { idUser, estatura, peso, fecha },
      { db }
    ) => {
      try {
        const obj = {
          _id: uuidv4(),
          user: idUser,
          peso,
          estatura,
          fecha: new Date(fecha),
        };

        await db.collection("users").updateOne(
          { _id: new ObjectId(idUser) },
          {
            $set: {
              "profile.estatura": estatura,
              "profile.peso": peso,
            },
            $push: { "profile.historialPeso": obj },
          }
        );

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
    insertUserMedicamentos: async (root, { idUser, medicamento }, { db }) => {
      medicamento._id = new ObjectId();
      medicamento.fechaInicio = new Date(medicamento.fechaInicio);
      medicamento.fechaFin = new Date(medicamento.fechaFin);
      try {
        const update = await db
          .collection("users")
          .updateOne(
            { _id: new ObjectId(idUser) },
            { $push: { "profile.medicamentos": medicamento } }
          );
        return {
          message: "Medicamentos agregados",
          success: true,
          code: 200,
        };
      } catch (error) {
        console.error(error);
        return {
          code: 400,
          message: "Error al agregar medicamentos",
          success: false,
        };
      }
    },
    updateUserProfile: async (root, { userId, email, input }, { db }) => {
      try {
        await db.collection("users").updateOne(
          {
            _id: new ObjectId(userId),
          },
          {
            $set: {
              email,
              profile: {
                tipoSangre: input.tipoSangre,
                alergias: input.alergias,
                enfermedades: input.enfermedades,
                fechaNacimeinto: new Date(input.fechaNacimeinto),
                rfc: input.rfc,
                curp: input.curp,
                name: input.name,
                lastName: input.lastName,
              },
            },
          }
        );
        return {
          message: "User profile updated",
          success: true,
          code: 200,
        };
      } catch (error) {
        console.error(error);
        return {
          code: 400,
          message: "Error al agregar medicamentos",
          success: false,
        };
      }
    },
    insertUserHistorialMedico: async (root, { idUser, historial }, { db }) => {
      historial._id = uuidv4();
      try {
        await db.collection("users").updateOne(
          {
            _id: new ObjectId(idUser),
          },
          {
            $push: {
              "profile.historialMedico": historial,
            },
          }
        );
        return {
          message: "Historial medico agregado",
          success: true,
          code: 200,
        };
      } catch (error) {
        console.error(error);
        return {
          code: 400,
          message: "Error al agregar historial medico",
          success: false,
        };
      }
    },
  },
};

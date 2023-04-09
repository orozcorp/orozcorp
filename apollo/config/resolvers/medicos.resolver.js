export const medicosResolvers = {
  Query: {
    getMedicos: async (root, { nombre }, { db }) => {
      //Fix to use the $text operator
      return await db
        .collection("Medicos")
        .find({ nombre: { $regex: nombre, $options: "i" } })
        .toArray();
    },
  },
  Mutation: {
    addMedico: async (root, { input, addNew }, { db }) => {
      try {
        if (addNew && !input._id) {
          const newMedico = await db.collection("Medicos").insertOne(input);
          return {
            status: 200,
            message: "Médico agregado exitosamente",
            data: newMedico.ops[0],
          };
        } else {
          const { pacientes } = input;
          const updatedMedico = await db
            .collection("Medicos")
            .updateOne({ _id: input._id }, { $push: pacientes });
          return {
            status: 200,
            message: "Médico actualizado exitosamente",
            data: updatedMedico.value,
          };
        }
      } catch (error) {
        console.log(error);
        return {
          status: 400,
          message: "Error al agregar médico",
          data: error,
        };
      }
    },
  },
};

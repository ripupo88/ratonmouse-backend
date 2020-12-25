// raton-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "raton";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      imgurl: String,
      title: { type: String, required: true },
      caracteristicas: [String],
      preciorecomendado: String,
      detalles: {
        fabricante: String,
        marca: String,
        serie: String,
        modelo: { type: String, required: true },
        sensor: String,
        botones: Number,
        peso: String,
        conexion: String,
        dimenciones: String,
      },
      comparador: [
        {
          nombre: String,
          afiliado: String,
          url: String,
          precio: String,
          fecha: Date,
        },
      ],
      positivos: [String],
      negativos: [String],
      youtube: { url: String, credit: String, nombre: String },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};

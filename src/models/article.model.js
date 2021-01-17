// article-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "article";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      content: {
        h1: String,
        lead: String,
        img: {
          name: String,
          alt: String,
        },
        tableCont: [String],
        html: String,
        recom: [
          {
            h2: String,
            prod: [String],
          },
        ],
      },

      seo: {
        title: String,
        description: String,
        url: String,
        img: String,
        opengraph: {
          sitename: String,
        },
        twiter: {
          author: String,
          site: String,
        },
      },
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

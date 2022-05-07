const { Schema, model } = require("mongoose");

const csvSchema = new Schema(
  {
    csv: {
      name : { type: String, required: true },
      data : { type: Array, required: true }
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

exports.default = model("Csv", csvSchema);

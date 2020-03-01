const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const housingSchema = new Schema(
  {
    key: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    flatTypeAndCost: {
      type: Array,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const housingData = mongoose.model("Housing", housingSchema);

module.exports = housingData;

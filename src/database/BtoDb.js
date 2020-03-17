const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BTOSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    Address: {
      type: String,
      required: true
    },
    MonthOfLaunch: {
      type: String,
      required: true
    },
    TypeOfFlats: {
      type: Array,
      required: true
    },
    LatAndLng: {
      type: Array,
      required: true
    },
    NearestMrt: {
      
    }

  },
  {
    timestamps: true
  }
);

const BTOData = mongoose.model("BTOData", BTOSchema);

module.exports = BTOData;

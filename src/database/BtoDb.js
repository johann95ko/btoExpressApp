const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BTOSchema = new Schema(
  {
    KeyName: {
      type: String,
      required: true
    },
    Name: {
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
    NumOfFlats: {
      type: Number,
      required: true
    },
    Type: {
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
      type: String,
      required: true
    },
    NearestMall: {
      type: String,
      required: true
    },
    NearestMarket: {
      type: String,
      required: true
    },
    ShortestDesc: {
      type: String,
      required: true
    },
    LongestDesc: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const BTOData = mongoose.model("BTOData", BTOSchema);

module.exports = BTOData;

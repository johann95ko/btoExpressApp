// let BTOData = require("../database/BtoDb");

class BtoDAO {
  constructor(modelData) {
    this.modelData = modelData;
  }

  readBto(req, res) {
    this.modelData
      .find()
      .then(eachHouse => res.send(eachHouse))
      .catch(err => res.status(400).json("Error: " + err));
  }

  createBto(req, res) {
    const KeyName = req.body.KeyName;
    const Name = req.body.Name;
    const Address = req.body.Address;
    const MonthOfLaunch = req.body.MonthOfLaunch;
    const NumOfFlats = req.body.NumOfFlats;
    const Type = req.body.Type;
    const TypeOfFlats = req.body.TypeOfFlats;
    const LatAndLng = req.body.LatAndLng;
    const NearestMrt = req.body.NearestMrt;
    const NearestMall = req.body.NearestMall;
    const NearestMarket = req.body.NearestMarket;
    const ShortestDesc = req.body.ShortestDesc;
    const LongestDesc = req.body.LongestDesc;
    const region = req.body.region;

    const newBTO = new this.modelData({
      KeyName,
      Name,
      Address,
      MonthOfLaunch,
      NumOfFlats,
      Type,
      TypeOfFlats,
      LatAndLng,
      NearestMrt,
      NearestMall,
      NearestMarket,
      ShortestDesc,
      LongestDesc,
      region
    });

    newBTO
      .save()
      .then(() => res.json("BTO added"))
      .catch(err => res.status(400).json("Error: " + err));
  }

  updateBto(req, res) {
    //unimplemented till required
  }

  deleteBto(req, res) {
    //unimplemented till required
  }
}

module.exports = BtoDAO;

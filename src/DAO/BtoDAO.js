let housingData = require("../DB/BtoDb");

class BtoDao {
  constructor(modelData) {
    this.modelData = modelData;
  }

  getBto(req, res) {
    this.modelData
      .find()
      .then(eachHouse => res.send(eachHouse))
      .catch(err => res.status(400).json("Error: " + err));
  }

  setBto(req, res) {
    const key = req.body.key;
    const name = req.body.name;
    const location = req.body.location;
    const flatTypeAndCost = req.body.flatTypeAndCost;

    const newHousing = new housingData({
      key,
      name,
      location,
      flatTypeAndCost
    });

    newHousing
      .save()
      .then(() => res.json("Housing added"))
      .catch(err => res.status(400).json("Error: " + err));
  }
}

module.exports = BtoDao;

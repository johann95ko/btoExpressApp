var express = require("express");
let housingData = require("../models/Housing.model");
var router = express.Router();

/* GET users listing. */
router.route("/").get((req, res) => {
  housingData
    .find()
    .then(eachHouse => res.send(eachHouse))
    .catch(err => res.status(400).json("Error: " + err));
});

/* ADD users listing. */
router.route("/add").post((req, res) => {
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
    .then(() => res.json("User added"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;

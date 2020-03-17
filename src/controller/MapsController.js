var express = require("express");
var router = express.Router();
const GoogleMaps = require("../models/Maps");

/* GET users listing. */
router.route("/geocode").get((req, res) => {
  GoogleMaps.geocode().then(result => {
    res.send(result.data);
  });
});

/* ADD users listing. */
router.route("/distance").get((req, res) => {
  var originLoc = "Choa Chu Kang Grove, Keat Hong Link";
  var destinationLoc = "Bukit Batok Road, Tegah Park Avenue";
  GoogleMaps.distance(originLoc, destinationLoc).then(result => {
    res.send(result.data);
  });
});

module.exports = router;


/* GET grants. */
router.route("/bto").post((req, res) => {
  const incomeLevel = req.body.incomeLevel;
  const FTA = req.body.FTA;
  const spouseFTA = req.body.spouseFTA;
  const employmentStatus = req.body.employmentStatus;

  const btoGrantCalculator = new BtoGrantCalculator(
    incomeLevel,
    FTA,
    spouseFTA,
    employmentStatus
  );

  res.send(btoGrantCalculator.calulateGrant().toString());
});
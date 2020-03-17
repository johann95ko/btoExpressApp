var express = require("express");
var router = express.Router();
const BtoGrantCalculator = require("../models/BtoGrantCalculator");

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

  res.send(btoGrantCalculator.calculateGrant().toString());
});

module.exports = router;

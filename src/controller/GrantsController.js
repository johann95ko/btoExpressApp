var express = require("express");
var router = express.Router();
const BtoGrantsCalculator = require("../models/BtoGrantsCalculator");

/* GET grants. */
router.route("/bto").post((req, res) => {
  const incomeLevel = req.body.incomeLevel;
  const firstTimeApplicant = req.body.firstTimeApplicant;
  const spouseFirstTimeApplicant = req.body.spouseFirstTimeApplicant;
  const employmentStatus = req.body.employmentStatus;

  const btoGrantsCalculator = new BtoGrantsCalculator(
    incomeLevel,
    firstTimeApplicant,
    spouseFirstTimeApplicant,
    employmentStatus
  );

  res.send(btoGrantsCalculator.calculateGrants().toString());
});

module.exports = router;

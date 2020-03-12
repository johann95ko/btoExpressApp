var express = require("express");
var router = express.Router();
const BtoGrantCalculator = require("../models/BtoGrantCalculator");

/* GET grants. */
router.route("/bto").post((req, res) => {
  const incomeLevel = req.body.incomeLevel;
  const firstTimers = req.body.firstTimers;
  const employmentStatus = req.body.employmentStatus;

  const btoGrantCalculator = new BtoGrantCalculator(
    incomeLevel,
    firstTimers,
    employmentStatus
  );

  res.send(btoGrantCalculator.calulateGrant().toString());
});

module.exports = router;

var express = require("express");
var router = express.Router();
const BtoGrantsCalculator = require("../models/BtoGrantsCalculator");

/* GET grants. */
router.route("/bto").post((req, res) => {
  const incomeLevel = req.body.incomeLevel;
  const FTA = req.body.FTA;
  const spouseFTA = req.body.spouseFTA;
  const employmentStatus = req.body.employmentStatus;
  
  try{
    const btoGrantsCalculator = new BtoGrantsCalculator(
      incomeLevel,
      FTA,
      spouseFTA,
      employmentStatus
    );
  
    res.send(btoGrantsCalculator.calculateGrants().toString());
  } catch(err){
    console.log(err)
  }
  
});

module.exports = router;

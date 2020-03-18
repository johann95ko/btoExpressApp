var express = require("express");
var router = express.Router();
const BtoGrantCalculator = require("../models/BtoGrantCalculator");
const Joi = require('joi');

/* GET grants. */
router.route("/bto").post((req, res) => {
  const incomeLevel = req.body.incomeLevel;
  const FTA = req.body.FTA;
  const spouseFTA = req.body.spouseFTA;
  const employmentStatus = req.body.employmentStatus;


   const schema = Joi.object().keys({
    incomeLevel: Joi.required(),
    FTA:Joi.required(),
    spouseFTA:joi.required(),
    employmentStatus:Joi.required()
  });

  Joi.validate(req.body,schema,(err,result)=>{
    if(err){
      console.log(err)
      res.send('Error Error!');
    }
    else{

    const btoGrantCalculator = new BtoGrantCalculator(
      incomeLevel,
      FTA,
      spouseFTA,
      employmentStatus
    );
    res.send(btoGrantCalculator.calulateGrant().toString());
    }
  })



 
});

module.exports = router;

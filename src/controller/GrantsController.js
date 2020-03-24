var express = require("express");
var router = express.Router();
const BtoGrantsCalculator = require("../models/BtoGrantsCalculator");
const GrantsStrategy = require("../models/GrantsStrategy");
const FTG = require("../models/FTGstrategy");
const Joi = require("joi");

/* GET grants. */
router.route("/bto").post((req, res) => {
  const schema = Joi.object().keys({
    incomeLevel: Joi.number().required(),
    firstTimeApplicant: Joi.boolean().required(),
    spouseFirstTimeApplicant: Joi.boolean().required(),
    employmentStatus: Joi.boolean().required()
  });

  Joi.validate(req.body, schema, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const incomeLevel = req.body.incomeLevel;
      const firstTimeApplicant = req.body.firstTimeApplicant;
      const spouseFirstTimeApplicant = req.body.spouseFirstTimeApplicant;
      const employmentStatus = req.body.employmentStatus;

      // const FTGstrat = new FTG()

      // const grantsStrategy = new GrantsStrategy(
      //   incomeLevel,
      //   firstTimeApplicant,
      //   spouseFirstTimeApplicant,
      //   employmentStatus,
      //   FTGstrat
      // );

      const btoGrantsCalculator = new BtoGrantsCalculator(
        incomeLevel,
        firstTimeApplicant,
        spouseFirstTimeApplicant,
        employmentStatus,
        
      );

      res.send(btoGrantsCalculator.calculateGrants().toString());
    }
  });
});

module.exports = router;

// var express = require("express");
// var router = express.Router();
// const BtoGrantCalculator = require("../models/BtoGrantCalculator");
// const Joi = require('joi');

/* GET grants. */
// router.route("/bto").post((req, res) => {
//   const incomeLevel = req.body.incomeLevel;
//   const FTA = req.body.FTA;
//   const spouseFTA = req.body.spouseFTA;
//   const employmentStatus = req.body.employmentStatus;

//  const schema = Joi.object().keys({
//   incomeLevel: Joi.required(),
//   FTA:Joi.required(),
//   spouseFTA:joi.required(),
//   employmentStatus:Joi.required()
// });

//   Joi.validate(req.body,schema,(err,result)=>{
//     if(err){
//       console.log(err)
//       res.send('Error Error!');
//     }
//     else{

//     const btoGrantCalculator = new BtoGrantCalculator(
//       incomeLevel,
//       FTA,
//       spouseFTA,
//       employmentStatus
//     );
//     res.send(btoGrantCalculator.calulateGrant().toString());
//     }
//   })

// });

// module.exports = router;

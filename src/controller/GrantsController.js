var express = require("express");
var router = express.Router();
const BtoGrantsCalculator = require("../models/BtoGrantsCalculator");
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
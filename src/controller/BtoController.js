var express = require("express");
let housingData = require("../models/BtoDb");
var router = express.Router();
const BtoController = require("../DAO/BtoController.js.js");
const btoController = new BtoController(housingData);

/* GET users listing. */
router.route("/").get((req, res) => {
  btoController.getBto(req, res);
});

/* ADD users listing. */
router.route("/add").post((req, res) => {
  btoController.setBto(req, res);
});

module.exports = router;

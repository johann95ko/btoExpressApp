var express = require("express");
let housingData = require("../database/BtoDb");
var router = express.Router();
const BtoDao = require("../models/BtoDao");
const btoDao = new BtoDao(housingData);

/* GET users listing. */
router.route("/").get((req, res) => {
  btoDao.getBto(req, res);
});

/* ADD users listing. */
router.route("/add").post((req, res) => {
  btoDao.setBto(req, res);
});

module.exports = router;

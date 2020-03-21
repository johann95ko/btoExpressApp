var express = require("express");
let BTOData = require("../database/BtoDb");
var router = express.Router();
const BtoDao = require("../models/BtoDAO");
const btoDao = new BtoDao(BTOData);

/* GET users listing. */
router.route("/").get((req, res) => {
  btoDao.getBto(req, res);
});

/* ADD users listing. */
router.route("/add").post((req, res) => {
  btoDao.setBto(req, res);
});

module.exports = router;

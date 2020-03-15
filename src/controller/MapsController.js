var express = require("express");
var router = express.Router();
const GoogleMaps = require("../models/GoogleMaps");

/* GET users listing. */
router.route("/geocode").get((req, res) => {
  GoogleMaps.geocode().then(result => {
    res.send(result.data);
  });
});

/* ADD users listing. */
router.route("/distance").get((req, res) => {
  GoogleMaps.distance().then(result => {
    res.send(result.data);
  });
});

module.exports = router;

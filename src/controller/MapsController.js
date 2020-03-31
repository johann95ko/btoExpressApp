var express = require("express");
var router = express.Router();
const Maps = require("../models/Maps");

let btoLocations = [
  "Choa Chu Kang Grove, Keat Hong Link",
  "Bukit Batok Road, Tengah Park Avenue",
  "Pasir Ris Drive, Pasir Ris Green",
  "Tampines Street 96, Tampines Street 92",
  "458B Sengkang W Rd, Fernvale Woods"
];

/* GET users listing. */
router.route("/geocode").get((req, res) => {
  const maps = new Maps();
  maps.geocode().then(result => {
    res.send(result.data);
  });
});

/* ADD users listing. */
router.route("/distance").post((req, res) => {
  const maps = new Maps();
  const originLoc = req.body.originLoc;
  const destinationLoc = req.body.destinationLoc;
  const googleDistanceApiPromise = maps.distance(originLoc, destinationLoc);
  googleDistanceApiPromise.then(result => {
    res.send([
      result.data.routes[0].legs[0].end_address,
      result.data.routes[0].legs[0].distance.text,
      result.data.routes[0].legs[0].duration.text
    ]);
  });
});

module.exports = router;

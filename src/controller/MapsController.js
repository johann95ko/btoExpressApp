var express = require("express");
var router = express.Router();
const Maps = require("../models/Maps");

let btoLocations = [
  "Choa Chu Kang Grove, Keat Hong Link",
  "Bukit Batok Road, Tegah Park Avenue",
  "Pasir Ris Drive, Pasir Ris Green",
  "Tampines Street 96, Tampines Street 92"
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
    res.send([result.data.routes[0].legs[0].distance.text, result.data.routes[0].legs[0].duration.text])
  });
  // console.log(googleDistanceApi);
  // res.send(googleDistanceApi.data.routes[0].legs[0].distance.text);
  // console.log(mapsDistance)
  // for (const eachLocation of btoLocations) {
  //   distancePromises.push(maps.distance(originLoc, eachLocation));
  //   maps.distance(originLoc, eachLocation).then(result => {
  //     distanceArray.push(result.data.routes[0].legs[0].distance.text);
  //   });
  // }

  // Promise.all(distancePromises).then(function(values) {
  //   res.send(213);
  // });
});

module.exports = router;

// /* GET grants. */
// router.route("/bto").post((req, res) => {
//   const incomeLevel = req.body.incomeLevel;
//   const FTA = req.body.FTA;
//   const spouseFTA = req.body.spouseFTA;
//   const employmentStatus = req.body.employmentStatus;

//   const btoGrantCalculator = new BtoGrantCalculator(
//     incomeLevel,
//     FTA,
//     spouseFTA,
//     employmentStatus
//   );

//   res.send(btoGrantCalculator.calulateGrant().toString());
// });

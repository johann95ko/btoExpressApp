const axios = require("axios");
const googleApiKey = "AIzaSyA_WObUiYD7YpoYufR84re1LZHAJeAGXkY";

let btoLocations = [
  "Choa Chu Kang Grove, Keat Hong Link",
  "Bukit Batok Road, Tegah Park Avenue",
  "Pasir Ris Drive, Pasir Ris Green",
  "Tampines Street 96, Tampines Street 92",
  "Woodlands Avenue 5, Woodlands Avenue 2",
  "Ang Mo Kio Avenue 2, Ang Mo Kio Street 21",
  "Bishan Street 11, Braddell Road",
  "Cassia Link, Jalan Dua, Old Airport Road"
];

const geocode = async () => {
  var location = "22 Main st Boston MA";
  try {
    return await axios.get(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {
        params: {
          address: location,
          key: googleApiKey
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const distance = async (originLoc, destinationLoc) => {
  
  var travelMode = "driving";
  try {
    return await axios.get(
      "https://maps.googleapis.com/maps/api/directions/json",
      {
        params: {
          origin: originLoc,
          destination: destinationLoc,
          mode: travelMode,
          key: googleApiKey
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  geocode,
  distance
};

const axios = require("axios");
const googleApiKey = "AIzaSyA_WObUiYD7YpoYufR84re1LZHAJeAGXkY";

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

const distance = async () => {
  var originLoc = "Nanyang Technological University";
  var destinationLoc = "510442";
  var travelMode = "walking";
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

const axios = require("axios");
const googleApiKey = "AIzaSyA_WObUiYD7YpoYufR84re1LZHAJeAGXkY";

class Maps {
  constructor() {}

  async geocode() {
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
  }

  async distance(originLoc, destinationLoc) {
    var travelMode = "driving";

    try {
      return await axios.get(
        "https://maps.googleapis.com/maps/api/directions/json",
        {
          params: {
            origin: originLoc + ", Singapore",
            destination: destinationLoc + ", Singapore",
            mode: travelMode,
            key: googleApiKey
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Maps;

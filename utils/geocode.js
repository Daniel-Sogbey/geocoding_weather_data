const request = require("postman-request");

const geocode = (address, callback) => {
  const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiZGFuaWVsMDYiLCJhIjoiY2tiZ3licGlhMDA2MjJxbDlzamxzeGJhcSJ9.6FwwBW2XQpyhYw6zSBS7NQ&limit=1`;
  request({ url: geocodeUrl, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to geocoding service", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      const coordinates = response.body.features[0].center;
      let latitude = coordinates[1];
      let longitude = coordinates[0];

      const data = {
        latitude,
        longitude,
      };

      callback(undefined, data);
    }
  });
};

module.exports = geocode;

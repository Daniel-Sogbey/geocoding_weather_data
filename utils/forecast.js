const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=0ddfc1dad344afa8a16d5a00f6681df1&query=${latitude},${longitude}&units=m`;
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service.", undefined);
    } else if (response.body.error) {
      callback("Unable to find location.", undefined);
    } else {
      const data = response.body.current;
      const location = response.body.location.region;

      const info = {
        desc: data.weather_descriptions[0],
        statement:
          "It is currently " +
          data.temperature +
          " degrees out. It feels like " +
          data.feelslike +
          " degrees out.",
        location,
      };

      callback(undefined, info);
    }
  });
};

module.exports = forecast;

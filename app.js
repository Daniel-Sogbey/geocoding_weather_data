const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Boston", (error, data) => {
  forecast(data.latitude, data.longitude, (error, info) => {
    console.table([
      {
        description: info.desc,
        location: info.location,
        statement: info.statement,
      },
    ]);
  });
});

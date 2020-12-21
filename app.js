const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=0ddfc1dad344afa8a16d5a00f6681df1&query=akatsi&units=m";

request({ url, json: true }, (error, response) => {
  //   console.log(response);
  const data = response.body.current;

  console.log(data.weather_descriptions[0]);

  console.log(
    "It is currently " +
      data.temperature +
      " degrees out. It feels like " +
      data.feelslike +
      " degrees out."
  );
});

const geocodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Akatsi.json?access_token=pk.eyJ1IjoiZGFuaWVsMDYiLCJhIjoiY2tiZ3licGlhMDA2MjJxbDlzamxzeGJhcSJ9.6FwwBW2XQpyhYw6zSBS7NQ&limit=1";

request({ url: geocodeUrl, json: true }, (error, response) => {
  const coordinates = response.body.features[0].center;
  let latitude = coordinates[1];
  let longitude = coordinates[0];
  console.log(latitude, longitude);
  if (error !== null) {
    console.log(error);
  }
});

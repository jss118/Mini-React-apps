const axios = require("axios");

export const getWeather = location => {
  const params = {
    access_key: "02cada269ced325a5e65a5c9f2b0e37c",
    query: location,
  };

  axios
    .get("https://api.weatherstack.com/current", { params })
    .then(response => {
      const apiResponse = response.data;
      console.log(
        `Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`
      );
    })
    .catch(error => {
      console.log(error);
    });
};

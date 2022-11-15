import { useState, useEffect } from "react";
import Axios from "axios";

const Weather = () => {
  const [temp, setTemp] = useState(null);
  const [location, setLocation] = useState("");

  useEffect(() => {
    const params = {
      access_key: "02cada269ced325a5e65a5c9f2b0e37c",
      query: location,
    };

    Axios.get("http://api.weatherstack.com/current", { params })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, [location]);

  const getWeather = event => {
    event.preventDefault();
    setLocation(event.target.form[0].value);
  };

  return (
    <div className="weather-border">
      <form className="enterLocation">
        <input type="text" placeholder="Enter city" required />
        <button onClick={getWeather}>Weather me up!</button>
      </form>
      <h2>{location}</h2>
    </div>
  );
};

export default Weather;

import { useState, useEffect } from "react";
import Axios from "axios";

const Weather = () => {
  const [temp, setTemp] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  useEffect(() => {
    const params = {
      access_key: "02cada269ced325a5e65a5c9f2b0e37c",
      query: location,
    };

    Axios.get("http://api.weatherstack.com/current", { params })
      .then(response => {
        setTemp(response.data.current.temperature);
        setFeelsLike(response.data.current.feelslike);
        setDescription(response.data.current.weather_descriptions[0]);
        setWeatherIcon(response.data.current.weather_icons[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, [location, temp, weatherIcon]);

  const getUserLocation = event => {
    event.preventDefault();
    const location = navigator.geolocation.getCurrentPosition(position => {
      console.log(position.coords);
    });
    return location;
  };

  const getWeather = event => {
    event.preventDefault();
    const locationStr = event.target.form[0].value;
    const uppercaseStr = locationStr[0].toUpperCase() + locationStr.slice(1);
    setLocation(uppercaseStr);
  };

  return (
    <div className="weather-border">
      <form className="enterLocation">
        <input type="text" placeholder="Enter city" />
        <button onClick={getWeather}>&#9728;</button>
        <button onClick={getUserLocation}>&#9737;</button>
      </form>
      <h1 className="location__h1">{location}</h1>
      {location ? (
        <img src={weatherIcon} className="weatherIcon-img" alt="weather-icon" />
      ) : null}
      {temp ? (
        <h2 className="temp__h2">
          {temp}
          <span className="celcius">&#8451;</span>
        </h2>
      ) : null}
      {feelsLike ? <p className="feelsLike__p">feels like</p> : null}
      <p className="feelsLike-temp__p">
        {feelsLike}
        {feelsLike ? <span className="celcius">&#8451;</span> : null}
      </p>
      <p className="weatherDescription">{description}</p>
    </div>
  );
};

export default Weather;

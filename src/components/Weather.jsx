import { useState, useEffect } from "react";
import Axios from "axios";

const Weather = () => {
  const [temp, setTemp] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
  const [description, setDescription] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: location },
      headers: {
        "X-RapidAPI-Key": "8566a10eebmshfc29a9f6693dd35p188a02jsnc4b24c5f8746",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    Axios.request(options)
      .then(function (response) {
        setTemp(response.data.current.temp_c);
        setFeelsLike(response.data.current.feelslike_c);
        setDescription(response.data.current.condition.text);
        setWeatherIcon(response.data.current.condition.icon);
      })
      .catch(function (error) {
        console.error(error);
      });

    navigator.geolocation.getCurrentPosition(position => {
      setLatitude(position.coords.latitude);
    });
    navigator.geolocation.getCurrentPosition(position => {
      setLongitude(position.coords.longitude);
    });
  }, [location, temp, weatherIcon]);

  const getUserLocation = event => {
    event.preventDefault();
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8566a10eebmshfc29a9f6693dd35p188a02jsnc4b24c5f8746",
        "X-RapidAPI-Host": "geocodeapi.p.rapidapi.com",
      },
    };

    fetch(
      `https://geocodeapi.p.rapidapi.com/GetNearestCities?latitude=${latitude}&longitude=${longitude}&range=0`,
      options
    )
      .then(response => response.json())
      .then(response => setLocation(response[0].City))
      .catch(err => console.error(err));
    setSearch("");
  };

  const getWeather = event => {
    event.preventDefault();
    if (!event.target.value) {
      alert("Enter a city or country in the searchbar");
    }
    const locationStr = event.target.value;
    const uppercaseStr = locationStr[0].toUpperCase() + locationStr.slice(1);
    setLocation(uppercaseStr);
    setSearch("");
  };

  const handleChange = event => {
    setSearch(event.target.value);
  };

  return (
    <div className="weather-border">
      <form className="enterLocation">
        <input
          type="text"
          placeholder="Enter city/country"
          className="location_input"
          value={search}
          onChange={handleChange}
        />
        <button onClick={getWeather} className="enter_btn" value={search}>
          Get weather
        </button>
        <button onClick={getUserLocation} className="location_btn">
          Use my location
        </button>
      </form>
      <h1 className="location__h1">{location}</h1>
      {location ? (
        <img src={weatherIcon} className="weatherIcon-img" alt="weather-icon" />
      ) : null}
      {location ? (
        <div className="temp-container">
          <h2 className="temp__h2">
            {temp}
            <span className="celcius">&#8451;</span>
          </h2>
          <p className="feelsLike__p">feels like</p>
          <p className="feelsLike-temp__p">
            {feelsLike}
            <span className="celcius">&#8451;</span>
          </p>
        </div>
      ) : null}
      <p className="weatherDescription">{description}</p>
    </div>
  );
};

export default Weather;

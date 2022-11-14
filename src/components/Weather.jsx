import { useState, useEffect } from "react";
import { getWeather } from "../Utils/getWeather";

const Weather = () => {
  const [temp, setTemp] = useState(null);
  const [location, setLocation] = useState("");

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return <div className="weather-border">HELLO</div>;
};

export default Weather;

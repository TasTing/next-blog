import React from "react";
import ReactWeather from "react-open-weather";
import 'react-open-weather/lib/css/ReactWeather.css'

const OpenWeather = () => {
  return (
    <ReactWeather
      forecast={"today"}
      apikey={"61c95522cd6a17119c6b467e7c814b37"}
      type={"city"}
      city={"hobart"}
    />
  )
}

export default OpenWeather
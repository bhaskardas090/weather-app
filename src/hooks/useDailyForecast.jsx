import React, {useState} from 'react'

const api = import.meta.env.VITE_WEATHER_API;
const key = import.meta.env.VITE_WEATHER_API_KEY;

function useDailyForecast(latitude, longitude) {
  const [data, setData] = useState(null);
  const getData = async (lat, lon) => {
    const response = await fetch(
      `${api}?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,daily&appid=${key}`
    );
    const data = await response.json();
    setData(data);
  };
  return { getData, data };
}

export default useDailyForecast
import React, {useState} from 'react'

function useDailyForecast(latitude, longitude) {
  const [data, setData] = useState(null);
  const getData = async (lat, lon) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,daily&appid=3e3dc1035300fb294651b533fa5d61df`
    );
    const data = await response.json();
    setData(data);
  };
  return { getData, data };
}

export default useDailyForecast
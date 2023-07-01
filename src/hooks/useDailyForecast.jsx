import React, {useState} from 'react'

function useDailyForecast(latitude, longitude) {
  const [dailyForecast, setDailyForecast] = useState(null);
  const getData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly,daily&appid=3e3dc1035300fb294651b533fa5d61df`
      );
      const data = await response.json();
      localStorage.setItem('dailyForecast', JSON.stringify(data));
      // setDailyForecast(data);
  }
  return {getData, dailyForecast};
}

export default useDailyForecast
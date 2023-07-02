import React, { useState } from 'react';

function useHistoryForecast() {
  const [data, setData] = useState();
  const handleDateChange = (date, lat, lon) => {
    const dateObj = new Date(date);
    const unixDate = Math.floor(dateObj.getTime() / 1000);
    const getData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall/timemachine?units=metric&lat=${lat}&lon=${lon}&dt=${unixDate}&appid=3e3dc1035300fb294651b533fa5d61df`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log('Errow Fetching History Data', error);
      }
    };

    getData();
  };
  return { data, handleDateChange };
}

export default useHistoryForecast;

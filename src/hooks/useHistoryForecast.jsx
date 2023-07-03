import React, { useState } from 'react';

const api = import.meta.env.VITE_WEATHER_API;
const key = import.meta.env.VITE_WEATHER_API_KEY;

function useHistoryForecast() {
  const [data, setData] = useState();
  const handleDateChange = (date, lat, lon) => {
    const dateObj = new Date(date);
    const unixDate = Math.floor(dateObj.getTime() / 1000);
    const getData = async () => {
      try {
        const response = await fetch(
          `${api}/timemachine?units=metric&lat=${lat}&lon=${lon}&dt=${unixDate}&appid=${key}`
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

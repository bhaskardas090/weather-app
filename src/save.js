


const getData = async () => {
  const response =
    await fetch(`https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=12.8808&lon=77.6301&dt=
1687883117&appid=3e3dc1035300fb294651b533fa5d61df`);
  const data = await response.json();
  console.log(data);
  // console.log(timestamps)
  setDailyForecast(data);
};

     //Historical data
      `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=
1687883117&appid=3e3dc1035300fb294651b533fa5d61df`;
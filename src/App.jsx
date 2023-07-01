import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import useDailyForecast from './hooks/useDailyForecast';
import useGeolocation from './hooks/useGeolocation';
import Home from './pages/Home';

function App() {
  const { geolocationData } = useGeolocation();
  const [dailyForecast, setDailyForecast] = useState(
    JSON.parse(localStorage.getItem('dailyForecast'))
  );
  // const { getData, dailyForecast } = useDailyForecast(geolocationData?.latitude,geolocationData?.longitude);

  // useEffect(() => {
  //   if (geolocationData) {
  //     getData();
  //   }
  // }, [geolocationData])

  return (
    <>
      <Navbar />
      <Home dailyForecast={dailyForecast} />
    </>
  );
}

export default App;

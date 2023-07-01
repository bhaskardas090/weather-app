import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import useDailyForecast from './hooks/useDailyForecast';
import useGeolocation from './hooks/useGeolocation';

function App() {
    const { geolocationData } = useGeolocation();
    const [dailyForecast, setDailyForecast] = useState(JSON.parse(localStorage.getItem('dailyForecast')));
    // const { getData, dailyForecast } = useDailyForecast(geolocationData?.latitude,geolocationData?.longitude);

    // useEffect(() => {
    //   if (geolocationData) {
    //     getData();
    //   }
    // }, [geolocationData])
    
    return (
    <>
      <Navbar />
    </>
  );
}

export default App;

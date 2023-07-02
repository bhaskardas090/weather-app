import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import useDailyForecast from './hooks/useDailyForecast';
import useGeolocation from './hooks/useGeolocation';
import Home from './pages/Home';
import History from './pages/History';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <History /> */}
    </>
  );
}

export default App;

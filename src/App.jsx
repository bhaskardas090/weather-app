import { useState, useEffect, lazy } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import useDailyForecast from './hooks/useDailyForecast';
import useGeolocation from './hooks/useGeolocation';
import Home from './pages/Home';
import History from './pages/History';
import Maps from './pages/Maps';
import Leaflet from './pages/Leaflet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  const { geoLocationData } = useGeolocation();
  // console.log(geoLocationData);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route
          path="/precipitation"
          element={
            geoLocationData && (
              <Leaflet
                lat={geoLocationData.lat}
                lon={geoLocationData.lon}
                overlayType="precipitation_new"
              />
            )
          }
        />
        <Route
          path="/temperature"
          element={
            geoLocationData && (
              <Leaflet
                lat={geoLocationData.lat}
                lon={geoLocationData.lon}
                overlayType="temp_new"
              />
            )
          }
        />
        <Route
          path="/googlemaps"
          element={
            geoLocationData && (
              <Maps lat={geoLocationData.lat} lon={geoLocationData.lon} />
            )
          }
        />
      </Routes>
      {/* <Home /> */}
      {/* <History /> */}
      {/* {geoLocationData && (
        <Maps
        lat={geoLocationData.lat}
        lon={geoLocationData.lon}
        // overlayType="precipitation_new"
        />
      )} */}
      {/* {geoLocationData && (
        <Leaflet
        lat={geoLocationData.lat}
        lon={geoLocationData.lon}
        overlayType="temp_new"
        />
      )} */}
    </>
  );
}

export default App;

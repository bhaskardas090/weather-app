import { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import useGeolocation from './hooks/useGeolocation';
import { Route, Routes } from 'react-router-dom';

// Lazy load the pages
const Home = lazy(() => import('./pages/Home'));
const History = lazy(() => import('./pages/History'));
const Maps = lazy(() => import('./pages/Maps'));
const Leaflet = lazy(() => import('./pages/Leaflet'));
function App() {
  const { geoLocationData } = useGeolocation();
  // console.log(geoLocationData);
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="loading">Loading...</div>}>
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
      </Suspense>
    </>
  );
}

export default App;

import React from 'react';
import {
  GoogleMap,
  LoadScript,
  Circle,
  Marker,
  GroundOverlay,
} from '@react-google-maps/api';
import image from '../assets/precipitation_new.jpeg';

const googleapi = import.meta.env.VITE_GOOGLE_MAP_API;

function Maps(props) {
  const center = {
    lat: props.lat,
    lng: props.lon,
  };

  const markerPosition = center; // Set the position for the marker

  const bounds = {
    north: props.lat,
    south: props.lat,
    east: props.lon,
    west: props.lon,
    // north: 12.8807741,
    // south: 12.8807741,
    // east: 77.6301213,
    // west: 77.6301213,
  };
  return (
    <LoadScript googleMapsApiKey={googleapi}>
      <GoogleMap
        center={center}
        zoom={13}
        mapContainerStyle={{
          height: '93vh',
          width: '100vw',
        }}
      >
        <GroundOverlay
          key={'url'}
          url="https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
          // url={image}
          bounds={bounds}
          zoom={13}
          // opacity={0.5}
          // defaultOpacity={0.5}
        />
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
    // <img src={image} alt="" />
  );
}

export default Maps;

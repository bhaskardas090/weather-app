import { ImageOverlay, MapContainer, TileLayer, useMap } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

function lon2tile(lon, zoom) {
  // returns X tile from given longitude
  return Math.floor(((lon + 180) / 360) * Math.pow(2, zoom));
}
// returns Y tile from given latitude
function lat2tile(lat, zoom) {
  return Math.floor(
    ((1 -
      Math.log(
        Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)
      ) /
        Math.PI) /
      2) *
      Math.pow(2, zoom)
  );
}

const MapImageOverlay = (props) => {
  const x = lon2tile(props.lon, props.zoom);
  const y = lat2tile(props.lat, props.zoom);

  const map = useMap();
  console.log(map.latLngToLayerPoint);
  return (
    <ImageOverlay
      bounds={map.getBounds()}
      url={`https://tile.openweathermap.org/map/${props.overlayType}/${props.zoom}/${x}/${y}.png?appid=911180d8058f1bd89a55b56be4c070d1`}
    ></ImageOverlay>
  );
};

const Maps = (props) => {
  const zoom = 4;

  return (
    <MapContainer
      center={[props.lat, props.lon]}
      zoom={zoom}
      scrollWheelZoom={false}
      dragging={false}
      zoomControl={false}
      style={{ height: '500px', width: '500px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // url={`https://a.tile.openstreetmap.org/${zoom}/${x}/${y}.png`}
      />
      <MapImageOverlay
        lat={props.lat}
        lon={props.lon}
        zoom={zoom}
        overlayType={props.overlayType}
      />
    </MapContainer>
  );
};

export default Maps;

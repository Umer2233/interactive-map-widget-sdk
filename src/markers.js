import mapboxgl from 'mapbox-gl';

const addMarker = (map, lat, lng, label) => {
  const marker = new mapboxgl.Marker()
    .setLngLat([lng, lat])
    .setPopup(new mapboxgl.Popup().setHTML(`<h3>${label}</h3>`)) // Popup for the marker
    .addTo(map);

  return marker;
};

const removeMarker = (marker) => {
  marker.remove();
};

const addMarkersFromGeoJSON = (map, geoJSON) => {
  geoJSON.features.forEach((feature) => {
    const { lat, lng, label } = feature.properties;
    addMarker(map, lat, lng, label);
  });
};


const flyToLocation = (map, lng, lat, zoom = 14) => {
  map.flyTo({
    center: [lng, lat],
    zoom,
    speed: 1.2,
    curve: 1,
    essential: true,
  });
};

export { addMarker, removeMarker, addMarkersFromGeoJSON, flyToLocation };

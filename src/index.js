import { addHeatmapLayer } from './heatmap';
import initializeMap from './map';
import { addMarker, removeMarker, addMarkersFromGeoJSON, flyToLocation } from './markers';
import { makeMapResponsive } from './utils';
import 'mapbox-gl/dist/mapbox-gl.css'; 

const InteractiveMapWidgetSDK = {
  initializeMap,
  addMarker,
  removeMarker,
  addMarkersFromGeoJSON,
  makeMapResponsive,
  addHeatmapLayer,
  flyToLocation
};

export default InteractiveMapWidgetSDK;

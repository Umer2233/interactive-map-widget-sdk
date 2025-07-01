import mapboxgl from "mapbox-gl";

const initializeMap = (containerId, options = {}) => {
  if (!mapboxgl.accessToken) {
    mapboxgl.accessToken = options.accessToken || "YOUR_DEFAULT_TOKEN";
  }

  const { center = [0, 0], zoom = 5, style = "satellite" } = options;

  const styleMap = {
    streets: "mapbox://styles/mapbox/streets-v11",
    satellite: "mapbox://styles/mapbox/satellite-v9",
  };

  const resolvedStyle = styleMap[style] || style;

  console.log("resolvedStyle => ", resolvedStyle);

  const map = new mapboxgl.Map({
    container: containerId,
    style: resolvedStyle,
    center,
    zoom,
  });

  console.log("MAP CONFIG", {
    container: containerId,
    style: resolvedStyle,
    center,
    zoom,
  });

  map.addControl(new mapboxgl.NavigationControl());

  return map;
};

export default initializeMap;

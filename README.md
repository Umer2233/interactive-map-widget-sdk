# InteractiveMapWidgetSDK - Documentation

This SDK provides a simplified wrapper, allowing easy initialization and manipulation of interactive maps, markers, and heatmaps within frontend applications.

---

## 📦 Installation

Install the SDK and its peer dependency:

```bash
npm install interactive-map-widget-sdk
```

---

## 🚀 Usage Example (React)

```jsx
import InteractiveMapWidgetSDK from 'interactive-map-widget-sdk';
import heatmapGeoJSON from './heatmap.json';

useEffect(() => {
  const map = InteractiveMapWidgetSDK.initializeMap('map', {
    accessToken: 'your_mapbox_token',
    center: [74.2683, 31.4470],
    zoom: 15,
    style: 'streets',
  });

  map.on('load', () => {
    map.resize();
    InteractiveMapWidgetSDK.makeMapResponsive(map);
    InteractiveMapWidgetSDK.addMarker(map, 31.44705, 74.26842, 'My Location');
    InteractiveMapWidgetSDK.addHeatmapLayer(map, heatmapGeoJSON);
    InteractiveMapWidgetSDK.flyToLocation(map, 74.2398, 31.4428, 15);
  });

  return () => map.remove();
}, []);
```

---

## 🧩 Available Methods

### 1. `initializeMap(containerId, options)`

Initializes a map inside a target HTML element.

#### Parameters:

* `containerId` (string): ID of the DOM element (e.g., 'map')
* `options` (object):

  * `accessToken` (**required**): Your Mapbox access token
  * `center` (array): `[lng, lat]` coordinates (default: `[0, 0]`)
  * `zoom` (number): Zoom level (default: `5`)
  * `style` (string): Map style (`streets`, `satellite`) or full custom style URL

#### Returns:

* A `Map` instance

---

### 2. `addMarker(map, lat, lng, label)`

Adds a marker to the given map with an optional popup label.

#### Parameters:

* `map`:  map instance
* `lat` (number): Latitude
* `lng` (number): Longitude
* `label` (string): HTML label for the popup (optional)

#### Returns:

* The marker instance

---

### 3. `removeMarker(marker)`

Removes a given marker from the map.

#### Parameters:

* `marker`: A `Marker` instance

---

### 4. `addMarkersFromGeoJSON(map, geoJSON)`

Adds multiple markers from a valid GeoJSON FeatureCollection.

#### Example:

```js
const geoJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { lat: 31.44698, lng: 74.2683, label: "Marker 1" },
      geometry: { type: "Point", coordinates: [74.2683, 31.44698] },
    },
    ...
  ]
};
InteractiveMapWidgetSDK.addMarkersFromGeoJSON(map, geoJSON);
```

---

### 5. `flyToLocation(map, lng, lat, zoom = 14)`

Smoothly pans and zooms the map to the specified location.

#### Parameters:

* `map`: map instance
* `lng` (number): Longitude
* `lat` (number): Latitude
* `zoom` (number): Zoom level (default: 14)

---

### 6. `addHeatmapLayer(map, geoJSON)`

Adds a heatmap layer from a GeoJSON dataset with Point features.

#### Parameters:

* `map`: map instance
* `geoJSON`: GeoJSON FeatureCollection with Point geometries

#### Notes:

* Use for high-density data visualization
* Default paint config uses `heatmap-intensity`, `color`, and `radius`

---

### 7. `makeMapResponsive(map)`

Automatically resizes the map on window resize.

#### Parameters:

* `map`: map instance

---

## 🌐 Supported Map Styles

Use one of the following aliases (or pass a custom Mapbox Studio style URL):

| Alias       | Mapbox Style URL                      |
| ----------- | ------------------------------------- |
| `streets`   | `mapbox://styles/mapbox/streets-v11`  |
| `satellite` | `mapbox://styles/mapbox/satellite-v9` |

---


## 🔚 Cleanup

Always remove the map on unmount to avoid memory leaks:

```js
useEffect(() => {
  const map = InteractiveMapWidgetSDK.initializeMap(...);

  return () => map.remove();
}, []);
```

---

## 🧠 Tip: Switching Styles

You can dynamically toggle between styles:

```js
<button onClick={() => setMapView(!mapView)}>Change View</button>
style: mapView ? 'streets' : 'satellite'
```

---

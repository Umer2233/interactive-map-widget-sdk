const addHeatmapLayer = (map, geoJSON) => {
  map.addSource('heatmap', {
    type: 'geojson',
    data: geoJSON,
  });

  map.addLayer({
    id: 'heatmap',
    type: 'heatmap',
    source: 'heatmap',
    maxzoom: 15,
    paint: {
      'heatmap-intensity': {
        stops: [
          [0, 0],
          [10, 1],
        ],
      },
      'heatmap-color': [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
        0, 'rgba(0,0,255,0)',
        0.5, 'rgb(0,255,0)',
        1, 'rgb(255,0,0)',
      ],
      'heatmap-radius': {
        stops: [
          [0, 2],
          [10, 20],
        ],
      },
    },
  });
};

export { addHeatmapLayer };

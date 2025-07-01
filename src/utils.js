const makeMapResponsive = (map) => {
  window.addEventListener('resize', () => {
    map.resize(); // Resize the map when the window is resized
  });
};

export { makeMapResponsive };

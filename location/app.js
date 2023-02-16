navigator.geolocation.getCurrentPosition(function (position) {
  console.log(position.coords.latitude, position.coords.longitude);

  const div = document.createElement("div");

  const content = document.createTextNode(
    `Latitude: ${position.coords.latitude} °, Longitude: ${position.coords.longitude} °`
  );

  div.appendChild(content);
});


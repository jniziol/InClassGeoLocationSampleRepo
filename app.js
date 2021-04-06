let latitude, longitude;

navigator.geolocation.getCurrentPosition(function(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  console.log(position);
}, function(error) {
  console.warn(error);
}, {enableHighAccuracy: true, timeout: 10000, maximumAge: 0});

// do some work

// This is a little work

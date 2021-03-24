let lat, long;

navigator.geolocation.getCurrentPosition(function(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;
  console.log(position);
}, function(error) {
  console.warn(error);
}, {enableHighAccuracy: true, timeout: 10000, maximumAge: 0});
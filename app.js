let lat, long;

navigator.geolocation.getCurrentPosition(function(pos) {
  lat = pos.coords.latitude;
  long = pos.coords.longitude;
  console.log(pos);
  console.log("hi")
}, function(error) {
  console.warn(error);
}, {enableHighAccuracy: true, timeout: 10000, maximumAge: 0});

// do some work

// This is a little work

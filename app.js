let latitude, longitude;

navigator.geolocation.getCurrentPosition(function(position) {
  latitude = position.coords.latitude;

  
  longitude = position.coords.longitude;
    console.log(position);
    // Fixed it up the way I like
    // New lines of code here!
}, function(error) {
  // This is important stuff
    console.warn(error);
}, {enableHighAccuracy: true, timeout: 10000, maximumAge: 0});

// do some work

// This is a little work

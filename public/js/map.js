// mapboxgl.accessToken = mapToken;
// const map = new mapboxgl.Map({
//     container: "map", // container ID
//     style: "mapbox://styles/mapbox/streets-v12",
//     center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
//     zoom: 9, // starting zoom
// });

// const marker = new mapboxgl.Marker({color: 'red'})
// .setLngLat(listing.geometry.coordinates)
// .setPopup( 
//     new mapboxgl.Popup({offset: 25})
// .setHTML(`<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`)
// )
// .addTo(map);


document.addEventListener("DOMContentLoaded", function () {
    console.log("Map script loaded.");
  
    if (!mapToken || !listing) {
      console.error("Map token or listing data is missing.");
      return;
    }
  
    const coordinates = listing.geometry && listing.geometry.coordinates;
    if (!coordinates || coordinates.length !== 2) {
      console.error("Listing coordinates are missing or invalid.");
      return;
    }
  
    mapboxgl.accessToken = mapToken;
    
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coordinates,
      zoom: 12
    });
  
    new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
  });
  
  
  